import React, { useEffect, useState } from "react";

import { useAllClubList } from "@/hooks/queries/useClubList";
import MainClubCardsSlide from "@/components/Main/MainClubCardsSlide/MainClubCardsSlide";

import { CardListBox } from "./MainClubListStyle";

function MainClubList() {
  const res = useAllClubList();
  const resClubList = res.data ?? [];

  return (
    <CardListBox>
      <h2 id="view-club">클러비 주목! 지금 뜨는 클럽</h2>
      {/* <MainClubCardsSlide /> */}

      <h2 id="head_count-club">곧 모집 인원 도달! 마감 임박 클럽</h2>
      {/* <MainClubCardsSlide /> */}

      <h2 id="weekend-club">주말을 알차게! 주말 진행 클럽</h2>
      <MainClubCardsSlide resClubList={resClubList} />
    </CardListBox>
  );
}

export default MainClubList;