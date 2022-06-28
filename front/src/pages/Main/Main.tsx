import React from "react";

import { MainContainerBox } from "./MainStyle";

import MainBanner from "@/components/Main/MainBanner/MainBanner";
import MainClubList from "@/components/Main/MainClubList/MainClubList";

function Main() {
  return (
    <MainContainerBox>
      <MainBanner />
      <MainClubList />
    </MainContainerBox>
  );
}

export default Main;
