/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import styled from "@emotion/styled";
import * as Interface from "@/utils/interface";

export const BasicInfoDiv = styled.div`
  display: flex;
  // align-items: center;
  //   justify-content: center;
  flex-direction: column;
`;

export const BasicInfoEachDiv = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: center;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const InfoTitleDiv = styled.div`
  font-weight: bold;
`;
function ClubBasicInfo({ club }: { club: Interface.Club }) {
  return (
    <div>
      <BasicInfoDiv>
        <BasicInfoEachDiv>
          <InfoTitleDiv>클럽명</InfoTitleDiv>
          <div>{club.name}</div>
        </BasicInfoEachDiv>
        <BasicInfoEachDiv>
          <InfoTitleDiv>주제</InfoTitleDiv>
          <div>{club.intro}</div>
        </BasicInfoEachDiv>
        <div>모집 인원 {club.head_count}</div>
        <div>
          클럽 일정 {club.weekday ? "평일" : ""}
          {club.weekend ? "주말" : ""}
        </div>
        <div>
          진행 방식 {club.online ? "온라인" : ""}
          {club.offline ? "오프라인" : ""}
        </div>
        <div>진행 기간 {club.duration}</div>
      </BasicInfoDiv>
    </div>
  );
}

export default ClubBasicInfo;
