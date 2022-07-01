import React, { useEffect, useState } from "react";
import axios from "axios";

import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';

import * as Api from "@/utils/api";
import { Club } from "@/utils/interface";
import { onChangeFunction } from "@/utils/eventHandler";
import testimage from "@/asset/images/testimage.PNG";

import { ColumnContainerBox, StyledInput } from "@/styles/containers";
import { StyledLabel } from "@/styles/text";
import {
  ClubCreateFormBox,
  ThumnailBox,
  ThumnailLabel,
  ThumnailImage,
  FormBox,
  InputBox,
  HeadCountInput,
  MeetingInputBox,
  Line,
  StyledSelect,
  HashtagsBox,
  HashtagNotice,
  HashtagNotice2,
  HashtagSpan,
  HashtagSpan2,
  AIButton
} from "./ClubCreateBasicStyle";

// * Props type은 해당 파일 내에서 정의
interface Props {
  clubInfo: Club;
  setClubInfo: React.Dispatch<
  React.SetStateAction<Club>>;
  contents: string;
}

// ! state setter는 prop으로 가지 않는 게 좋다
function ClubCreateBasic({ clubInfo, setClubInfo, contents }: Props) {
  const [ thumnail, setThumnail ] = useState<any>();
  const [ aihashtagArr, setAiHashtagArr ] = useState<string[]>([]);
  const [ hashtagArr, setHashtagArr ] = useState<string[]>([]);

  const onChange = onChangeFunction(setClubInfo);

  const handleCheckBox = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    
    setClubInfo((prev: Club) => ({
      ...prev,
      [target.name]: (target.checked ? 1 : 0),
    }));
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    
    setClubInfo((prev: Club) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

  const handleHashtagEnter = (event: React.MouseEvent<HTMLSpanElement>) => {
    const clickedHashtag = event.currentTarget.id;
    
    // 중복 처리
    if (hashtagArr.includes(clickedHashtag)) {
      alert("이미 등록된 해시태그입니다!");
      return;
    }

    // 3개까지만 입력 가능
    if (hashtagArr.length === 3) {
      alert("해시태그를 3개 모두 입력하셨습니다!");
      return;
    }

    setHashtagArr((prev) => [...prev, clickedHashtag]);
  }

  const handleSpanClickDelete = (event: React.MouseEvent<HTMLSpanElement>) => {
    const clickedHashtag = event.currentTarget.id;
    const newHashtagArr = hashtagArr.filter((el: string) => el !== clickedHashtag);

    setHashtagArr(() => newHashtagArr);
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    // files[0]은 File || null
    if (files !== null) {
      const formData = new FormData();
      
      setThumnail(() => files[0]);
      // "file"로 안 하면 field name 오류 발생
      formData.append("file", files[0]);

      try {
        // TODO : 이미지 올렸을 때 미리보기로 나오지 않을 때가 있다?
        const pictureRes = await Api.post("/clubs/picture", formData);
        const { fileName } = pictureRes.data;

        setClubInfo((prev: Club) => ({
          ...prev,
          picture: fileName,
        }));
      } catch (error) {
        console.error(error);
      }
    }
  }

  const handleAISummary = () => {
    const contentsWithoutTags = contents.replace(/(<([^>]+)>)/ig,"")
    if(contentsWithoutTags.length >= 30){
      console.log('한줄요약 상세정보',contents)
      console.log('한줄요약 상세정보 태그제거??',contentsWithoutTags)
      console.log('상세정보 길이',contentsWithoutTags.length)

      setClubInfo((prev: any) => ({
        ...prev,
        'intro': contentsWithoutTags,
      }));
    }
    else {
      alert('상세 정보를 30자 이상 입력하세요!');
    }
  }

  const handleAIKeyword = () => {
    const contentsWithoutTags = contents.replace(/(<([^>]+)>)/ig,"")
    if(contentsWithoutTags.length >= 30){
      axios.post('http://kdt-ai4-team18.elicecoding.com:5002/keyword-diversity',{sentences:contentsWithoutTags},{
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))

      setAiHashtagArr(['영화','모임','안녕','주말','친구']);
    }
    else {
      alert('상세 정보를 30자 이상 입력하세요!');
    }
  }

  // hashtagArr 변경될 때 clubInfo를 업데이트
  useEffect(() => {
    setClubInfo((prev: Club) => ({
      ...prev,
      hashtags: hashtagArr.join(","),
    }));
  }, [hashtagArr]);

  useEffect(() => {
    console.log(clubInfo);
  }, [clubInfo.picture]);

  useEffect(()=>{
    console.log('해시태그!!',hashtagArr)
  },[hashtagArr])

  return (
    <ColumnContainerBox>
      <h1>클럽 생성하기</h1>
      <ClubCreateFormBox>
        <FormBox>
          <ThumnailBox noThumnail={!thumnail}>
            <ThumnailLabel noThumnail={!thumnail} htmlFor="chooseFile">
              <PhotoCameraBackIcon className="thumnail-icon"/>
            </ThumnailLabel>
            <input id="chooseFile" style={{display: 'none'}} type="file" accept="image/*" onChange={handleImageUpload}/>
            {
              clubInfo.picture &&
              <ThumnailImage
                src={`http://${window.location.hostname}:3000/uploads/${clubInfo.picture}`}
                alt='Club Thumnail'
              />
            }
          </ThumnailBox>
          <InputBox>
            <StyledLabel htmlFor='name'>클럽명</StyledLabel>
            <StyledInput
              type='text'
              name='name'
              value={clubInfo.name}
              onChange={onChange}
            />
          </InputBox>
          <InputBox>
            <StyledLabel htmlFor='intro'>한줄 소개<AIButton type='button' onClick={handleAISummary}>한줄 요약</AIButton><br/><HashtagNotice>한줄 소개는 직접 작성하거나, AI가 제공하는 한줄 요약을 등록할 수도 있습니다!<br/>클럽의 상세 정보를 30자 이상 작성하고 한줄 요약 버튼을 클릭하면 AI가 작성한 한줄 요약이 입력돼요!</HashtagNotice><HashtagNotice2><br/>*한줄 요약 버튼을 클릭하면 작성 중인 한줄 소개가 지워집니다!</HashtagNotice2></StyledLabel>
            
            <StyledInput
              type='text'
              name='intro'
              value={clubInfo.intro}
              onChange={onChange}
            />
          </InputBox>
        </FormBox>
        <Line />
        <FormBox>
          <InputBox>
            <StyledLabel htmlFor='head_count'>최대 모집 인원</StyledLabel>
            <HeadCountInput
              type='number'
              name='head_count'
              value={clubInfo.head_count}
              onChange={onChange}
              min='1'
            />
            <span>명</span>
          </InputBox>
          <MeetingInputBox>
            <InputBox>
              <StyledLabel htmlFor='meetingMethod'>진행 방식</StyledLabel>
              <input
                type='checkbox'
                name='online'
                value={clubInfo.online}
                defaultChecked={Boolean(clubInfo.online)}
                onClick={handleCheckBox}
              />
              <span>온라인</span>
              <input
                type='checkbox'
                name='offline'
                value={clubInfo.offline}
                defaultChecked={Boolean(clubInfo.offline)}
                onClick={handleCheckBox}
              />
              <span>오프라인</span>
            </InputBox>
            <InputBox>
              <StyledLabel htmlFor='meetingDay'>진행 요일</StyledLabel>
              <input type='checkbox' name='weekday' value={clubInfo.weekday} defaultChecked={Boolean(clubInfo.weekday)} onClick={handleCheckBox} />
              <span>평일</span>
              <input type='checkbox' name='weekend' value={clubInfo.weekend} defaultChecked={Boolean(clubInfo.weekend)} onClick={handleCheckBox} />
              <span>주말</span>
            </InputBox>
          </MeetingInputBox>
          <InputBox>
            <StyledLabel htmlFor='duration'>진행 기간</StyledLabel>
            <StyledSelect name='duration' id='duration' defaultValue={clubInfo.duration} onChange={handleSelect}>
              <option value='0'>미정</option>
              <option value='1'>단기</option>
              <option value='2'>1~2개월</option>
              <option value='3'>3~4개월</option>
              <option value='4'>5~6개월</option>
              <option value='5'>6개월 이상</option>
              <option value='6'>장기</option>
            </StyledSelect>
          </InputBox>
          <InputBox>
            <StyledLabel htmlFor='hashtags'>해시태그<AIButton type='button' onClick={handleAIKeyword}>키워드 추출</AIButton><br/>
              <HashtagNotice>클럽의 상세 정보를 30자 이상 작성하고 키워드 추출 버튼을 클릭하면 AI가 클럽에 적합한 해시태그를 보여줍니다!<br/>그중에서 최대 3개의 해시태그를 등록할 수 있어요!</HashtagNotice>
            </StyledLabel>
            <HashtagsBox>
              {aihashtagArr.map((el: string) => <HashtagSpan id={el} key={el} onClick={handleHashtagEnter}>#{el}</HashtagSpan>)}
            </HashtagsBox>
            {Boolean(aihashtagArr.length) && <HashtagNotice>마음에 드는 해시테그를 클릭하세요!</HashtagNotice>}
            <HashtagsBox>
              {hashtagArr.map((el: string) => <HashtagSpan2 id={el} key={el} onClick={handleSpanClickDelete}>#{el}</HashtagSpan2>)}
            </HashtagsBox>
            {Boolean(hashtagArr.length) && <HashtagNotice>한 번 더 클릭하면 취소할 수 있어요!</HashtagNotice>}
          </InputBox>
        </FormBox>
      </ClubCreateFormBox>
    </ColumnContainerBox>
  );
}

export default ClubCreateBasic;
