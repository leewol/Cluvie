import React, { useEffect, useState } from "react";

import { Club } from "@/utils/interface";
import { useAllClubList } from "@/hooks/queries/useClubList";

import MainClubCard from "@/components/Main/MainClubCard/MainClubCard";
import { CardListBox, ClubCardBox } from "./MainClubListStyle";

function MainClubList() {
  const res = useAllClubList();
  const resClubList = res.data ?? [];

  return (
    <CardListBox>
        <h2 id="view-club">클러비 주목! 지금 뜨는 클럽</h2>
        <ClubCardBox>
          {/* <MainClubCard /> */}
        </ClubCardBox>
        <h2 id="head_count-club">곧 모집 인원 도달! 마감 임박 클럽</h2>
        <ClubCardBox>
          {/* <MainClubCard /> */}
        </ClubCardBox>
        <h2 id="weekend-club">주말을 알차게! 주말 진행 클럽</h2>
        <ClubCardBox>
          {resClubList.slice(0, 10).map((weekendClub) => <MainClubCard key={weekendClub.id} club={weekendClub} />)}
        </ClubCardBox>
    </CardListBox>
  );
}

export default MainClubList;