import React from "react";
import { Link } from "react-router-dom";

import { ContainerBox } from "@/styles/containers";

function Main() {
  return (
    <ContainerBox>
      <ul>
        <li>
          <Link to='/myClublist'>내 클럽 리스트</Link>
        </li>
        <li>
          <Link to='/myPage'>마이페이지</Link>
        </li>
      </ul>
    </ContainerBox>
  );
}

export default Main;
