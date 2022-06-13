import React from "react";
import { Link } from "react-router-dom";

import { ContainerBox } from "@/styles/Container";

function Main() {
  return (
    <ContainerBox>
      <ul>
        <li>
          <Link to='/login'>로그인</Link>
        </li>
        <li>
          <Link to='/clublist'>클럽 목록</Link>
        </li>
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
