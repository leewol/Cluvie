import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContainerBox, InnerBox } from "@/styles/container";
import { FormButton } from "@/styles/user";
import SocialButton from "@/components/User/SocialButton";

// TODO : 소셜 회원가입, 스타일

function Register() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/registerByEmail");
  };

  return (
    <ContainerBox>
      <InnerBox>
        <h1>회원가입</h1>
        <SocialButton social='google' action='회원가입' />
        <SocialButton social='kakao-talk' action='회원가입' />
        <FormButton
          type='button'
          onClick={handleRegisterClick}
          isFormValid
          social=''
        >
          이메일로 회원가입
        </FormButton>
        <span>이미 클러비라면?</span>
        <Link to='/login'>로그인하기</Link>
      </InnerBox>
    </ContainerBox>
  );
}

export default Register;
