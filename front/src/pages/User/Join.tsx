import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContainerBox, InnerBox } from "../../styles/Container";

// TODO : 소셜 회원가입, 스타일

function Join() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate("/joinByEmail");
  };

  return (
    <ContainerBox>
      <InnerBox>
        <h1>회원가입</h1>
        <button type='button'>구글로 회원가입</button>
        <button type='button'>카카오톡으로 회원가입</button>
        <button type='button' onClick={handleJoinClick}>
          이메일로 회원가입
        </button>
        <span>이미 클러비라면?</span>
        <Link to='/login'>로그인하기</Link>
      </InnerBox>
    </ContainerBox>
  );
}

export default Join;
