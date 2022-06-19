import React, { useState } from "react";

import * as Interface from "@/utils/interface";
import { onChangeFunction } from "@/utils/eventHandler";

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
} from "./ClubCreateBasicStyle";

function ClubCreateBasic(props: Interface.ClubState) {
  const { clubInfo, setClubInfo } = props;

  const onChange = onChangeFunction(setClubInfo);
  const onClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    
    setClubInfo((prev: any) => ({
      ...prev,
      [target.name]: (target.checked ? 1 : 0),
    }));
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    
    setClubInfo((prev: any) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

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
            <StyledLabel htmlFor='name'>클럽명</StyledLabel>
            <StyledInput
              type='text'
              name='name'
              value={clubInfo.name}
              onChange={onChange}
            />
          </InputBox>
          <InputBox>
            <StyledLabel htmlFor='intro'>한줄 소개</StyledLabel>
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
                onClick={onClick}
              />
              <span>온라인</span>
              <input
                type='checkbox'
                name='offline'
                value={clubInfo.offline}
                onClick={onClick}
              />
              <span>오프라인</span>
            </InputBox>
            <InputBox>
              <StyledLabel htmlFor='meetingDay'>진행 요일</StyledLabel>
              <input type='checkbox' name='weekday' value={clubInfo.weekday} onClick={onClick} />
              <span>평일</span>
              <input type='checkbox' name='weekend' value={clubInfo.weekend} onClick={onClick} />
              <span>주말</span>
            </InputBox>
          </MeetingInputBox>
          <InputBox>
            <StyledLabel htmlFor='duration'>진행 기간</StyledLabel>
            <StyledSelect name='duration' id='duration' onChange={handleSelect}>
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
            <StyledInput
              type='text'
              name='hashtags'
              value={clubInfo.hashtags}
            />
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

export default ClubCreateBasic;
