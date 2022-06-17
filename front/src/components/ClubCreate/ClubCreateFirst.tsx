import React, { useState } from "react";
import styled from "@emotion/styled/macro";
import { ColumnContainerBox, StyledInput } from "@/styles/containers";
import { StyledLabel } from "@/styles/text";
import { ClubCreateFormBox, ThumnailBox } from "./ClubCreateFirstStyle";

const Line = styled.hr`
  width: 1;
  height: 100%;
  opacity: 0.2;
`;

function ClubCreateFirst() {
  const [form, setForm] = useState({
    thumnail: "",
    clubName: "",
    clubIntro: "",
    headCount: "",
    meetingMethod: "",
    meetingDay: "",
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
          <div>최대 모집 인원</div>
          <div>
            <div>진행 방식</div>
            <div>진행 요일</div>
          </div>
          <div>진행 기간</div>
          <div>
            <div>해시태그</div>
            <div>해시태그 목록</div>
          </div>
        </div>
      </ClubCreateFormBox>
    </ColumnContainerBox>
  );
}

export default ClubCreateFirst;
