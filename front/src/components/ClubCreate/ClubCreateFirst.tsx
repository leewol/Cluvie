import React, { useState } from "react";
import { ColumnContainerBox, StyledInput } from "@/styles/containers";
import { StyledLabel, StyledSpan } from "@/styles/text";
import {
  ClubCreateFormBox,
  FormBox,
  InputBox,
  HeadCountInput,
  MeetingInputBox,
  Line,
  StyledSelect,
} from "./ClubCreateFirstStyle";

function ClubCreateFirst() {
  const [form, setForm] = useState({
    picture: "",
    clubName: "",
    clubIntro: "",
    headCount: "",
    online: "",
    offline: "",
    weekday: "",
    weekend: "",
    hashtags: "",
    duration: "",
  });

  return (
    <ColumnContainerBox>
      <h1>클럽 생성하기</h1>
      <ClubCreateFormBox>
        <FormBox>
          <img
            src={require("@/asset/images/testimage.PNG")}
            alt='Club Thumnail'
            width={500}
            height={300}
          />
          <InputBox>
            <StyledLabel htmlFor='clubName'>클럽명</StyledLabel>
            <StyledInput type='text' name='clubName' value={form.clubName} />
          </InputBox>
          <InputBox>
            <StyledLabel htmlFor='clubIntro'>한줄 소개</StyledLabel>
            <StyledInput type='text' name='clubIntro' value={form.clubIntro} />
          </InputBox>
        </FormBox>
        <Line />
        <FormBox>
          <InputBox>
            <StyledLabel htmlFor='headCount'>최대 모집 인원</StyledLabel>
            <HeadCountInput
              type='number'
              name='headCount'
              value={form.headCount}
            />
            <span>명</span>
          </InputBox>
          <MeetingInputBox>
            <InputBox>
              <StyledLabel htmlFor='meetingMethod'>진행 방식</StyledLabel>
              <input type='checkbox' name='online' value={form.online} />
              <span>온라인</span>
              <input type='checkbox' name='offline' value={form.offline} />
              <span>오프라인</span>
            </InputBox>
            <InputBox>
              <StyledLabel htmlFor='meetingDay'>진행 요일</StyledLabel>
              <input type='checkbox' name='weekday' value={form.weekday} />
              <span>평일</span>
              <input type='checkbox' name='weekend' value={form.weekday} />
              <span>주말</span>
            </InputBox>
          </MeetingInputBox>
          <InputBox>
            <StyledLabel htmlFor='duration'>진행 기간</StyledLabel>
            <StyledSelect name='durations' id='duration'>
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
            <StyledLabel htmlFor='hashtags'>해시태그</StyledLabel>
            <StyledInput type='text' name='hashtags' value={form.hashtags} />
            <div>
              <StyledSpan>#친목도모</StyledSpan>
              <StyledSpan>#넷플릭스</StyledSpan>
            </div>
          </InputBox>
        </FormBox>
      </ClubCreateFormBox>
    </ColumnContainerBox>
  );
}

export default ClubCreateFirst;
