import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { ColumnContainerBox, StyledInput } from "@/styles/containers";
import { StyledLabel, StyledSpan } from "@/styles/text";
import { ClubCreateFormBox, ThumnailBox, Line } from "./ClubCreateFirstStyle";

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
        <div>
          <ThumnailBox>
            <img
              src={require("@/asset/images/testimage.PNG")}
              alt='Club Thumnail'
            />
          </ThumnailBox>
          <div>
            <StyledLabel htmlFor='clubName'>클럽명</StyledLabel>
            <StyledInput type='text' name='clubName' value={form.clubName} />
          </div>
          <div>
            <StyledLabel htmlFor='clubIntro'>한줄 소개</StyledLabel>
            <StyledInput type='text' name='clubIntro' value={form.clubIntro} />
          </div>
        </div>
        <Line />
        <div>
          <div>
            <StyledLabel htmlFor='headCount'>최대 모집 인원</StyledLabel>
            <StyledInput
              type='number'
              name='headCount'
              value={form.headCount}
            />
          </div>
          <div>
            <div>
              <StyledLabel htmlFor='meetingMethod'>진행 방식</StyledLabel>
              <input type='checkbox' name='online' value={form.online} />
              <span>온라인</span>
              <input type='checkbox' name='offline' value={form.offline} />
              <span>오프라인</span>
            </div>
            <div>
              <StyledLabel htmlFor='meetingDay'>진행 요일</StyledLabel>
              <input type='checkbox' name='weekday' value={form.weekday} />
              <span>평일</span>
              <input type='checkbox' name='weekend' value={form.weekday} />
              <span>주말</span>
            </div>
          </div>
          <div>
            <StyledLabel htmlFor='duration'>진행 기간</StyledLabel>
            <select name='durations' id='duration'>
              <option value='0'>미정</option>
              <option value='1'>단기</option>
              <option value='2'>1~2개월</option>
              <option value='3'>3~4개월</option>
              <option value='4'>5~6개월</option>
              <option value='5'>6개월 이상</option>
              <option value='6'>장기</option>
            </select>
          </div>
          <div>
            <div>
              <StyledLabel htmlFor='hashtags'>해시태그</StyledLabel>
              <StyledInput type='text' name='hashtags' value={form.hashtags} />
            </div>
            <div>
              <StyledSpan>#친목도모</StyledSpan>
              <StyledSpan>#넷플릭스</StyledSpan>
            </div>
          </div>
        </div>
      </ClubCreateFormBox>
    </ColumnContainerBox>
  );
}

export default ClubCreateFirst;
