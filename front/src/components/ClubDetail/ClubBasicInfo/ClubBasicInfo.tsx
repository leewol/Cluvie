/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import * as Interface from "@/utils/interface";
import * as Style from "./ClubBasicInfoStyle";

const durationList = [
  "미정",
  "단기",
  "1~2개월",
  "3~4개월",
  "5~6개월",
  "6개월 이상",
  "장기",
];

function ClubBasicInfo({ club }: { club: Interface.Club }) {
  return (
    <div>
      <Style.BasicInfoDiv>
        <Style.BasicInfoEachDiv>
          <Style.InfoTitleDiv>클럽명</Style.InfoTitleDiv>
          <Style.InfoContentDiv>{club.name}</Style.InfoContentDiv>
        </Style.BasicInfoEachDiv>
        <Style.BasicInfoEachDiv>
          <Style.InfoTitleDiv>주제</Style.InfoTitleDiv>
          <Style.InfoContentDiv>{club.intro}</Style.InfoContentDiv>
        </Style.BasicInfoEachDiv>
        <Style.BasicInfoEachDiv>
          <Style.InfoTitleDiv>모집 인원</Style.InfoTitleDiv>
          <Style.InfoContentDiv>{club.head_count}명</Style.InfoContentDiv>
        </Style.BasicInfoEachDiv>
        <Style.BasicInfoEachDiv>
          <Style.InfoTitleDiv>클럽 일정</Style.InfoTitleDiv>
          <Style.InfoContentDiv>
            {club.weekday ? "평일" : ""}
            {club.weekday && club.weekend ? "/" : ""}
            {club.weekend ? "주말" : ""}
            {!(club.weekday || club.weekend) ? "미정" : ""}
          </Style.InfoContentDiv>
        </Style.BasicInfoEachDiv>
        <Style.BasicInfoEachDiv>
          <Style.InfoTitleDiv>진행 방식</Style.InfoTitleDiv>
          <Style.InfoContentDiv>
            {club.online ? "온라인" : ""}
            {club.online && club.offline ? "/" : ""}
            {club.offline ? "오프라인" : ""}
            {!(club.online || club.offline) ? "미정" : ""}
          </Style.InfoContentDiv>
        </Style.BasicInfoEachDiv>
        <Style.BasicInfoEachDiv>
          <Style.InfoTitleDiv>진행 기간</Style.InfoTitleDiv>
          <Style.InfoContentDiv>
            {durationList[club.duration ? club.duration : 0]}
          </Style.InfoContentDiv>
        </Style.BasicInfoEachDiv>
      </Style.BasicInfoDiv>
    </div>
  );
}

export default ClubBasicInfo;
