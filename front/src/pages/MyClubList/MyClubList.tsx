/* eslint-disable import/extensions */
import React from "react";
import MyClubListTab from "@/components/MyClubList/MyClubListTab/MyClubListTab";
import * as Style from "./MyClubListStyle";

function MyClubList() {
  return (
    <Style.WholeBox>
      <Style.Title>마이페이지</Style.Title>
      <MyClubListTab />
    </Style.WholeBox>
  );
}

export default MyClubList;
