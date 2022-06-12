import React from "react";
import { useNavigate } from "react-router-dom";

import { ContainerBox } from "../styles/Container";

function Main() {
  const navigate = useNavigate();

  return (
    <ContainerBox>
      <button type='button' onClick={() => navigate("/login")}>
        로그인
      </button>
      <button type='button' onClick={() => navigate("/clublist")}>
        클럽목록
      </button>
      <button type='button' onClick={() => navigate("/myclublist")}>
        내 클럽 리스트
      </button>
      <button type='button' onClick={() => navigate("/mypage")}>
        마이페이지
      </button>
    </ContainerBox>
  );
}

export default Main;
