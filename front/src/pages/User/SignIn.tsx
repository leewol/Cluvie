import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ContainerBox, InnerBox, StyledInput } from "@/styles/containers";
import { InputBox, FormButton, UserInputDiv, StyledLink } from "@/styles/user";
import SocialButton from "@/components/User/SocialButton";

import {
  isEmailValid,
  isPasswordValid,
  showValidIcon,
} from "@/utils/validation";
import * as Api from "@/utils/api";
import { onChangeFunction } from "@/utils/eventHandler";

// TODO : 소셜 로그인, 로그인 실패 시 alert

const SignInButtonBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
  text-align: right;
`;

function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const isFormValid =
    isEmailValid(form.email) && isPasswordValid(form.password);

  const onChange = onChangeFunction(setForm);

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // * 로그인 후 메인 페이지로 이동
    const { email, password } = form;
    Api.post("/signIn", {
      email,
      password,
    })
      .then((res) => {
        const { accessToken } = res.data.user;
        window.localStorage.setItem("token", accessToken);

        // API 요청 콜마다 헤더에 accessToken 담기도록 설정
        // ! 그런데 페이지 리로드 되면 이어지지 않는다..
        // ! -> 리프레시 토큰 이용해서 다시 해볼것
        // axios.defaults.headers.common[
        //   "Authorization"
        // ] = `Bearer ${accessToken}`;
        navigate("/");

        console.log("로그인 성공!");
      })
      .catch((err) => {
        console.log("로그인 실패!!");
        console.error(err);
      });
  };

  return (
    <ContainerBox>
      <InnerBox>
        <h1>로그인</h1>
        <SignInButtonBox>
          <SocialButton social='google' action='로그인' />
          <SocialButton social='kakao-talk' action='로그인' />
        </SignInButtonBox>
        <form onSubmit={handleSumbit} autoComplete='off'>
          <InputBox>
            <UserInputDiv>
              <StyledInput
                type='text'
                placeholder='이메일'
                name='email'
                value={form.email}
                onChange={onChange}
              />
              {form.email ? showValidIcon(isEmailValid(form.email)) : ""}
            </UserInputDiv>
            <UserInputDiv>
              <StyledInput
                type='password'
                placeholder='비밀번호'
                name='password'
                value={form.password}
                onChange={onChange}
              />
              {form.password
                ? showValidIcon(isPasswordValid(form.password))
                : ""}
            </UserInputDiv>
            <FormButton
              type='submit'
              disabled={!isFormValid}
              isFormValid={!!isFormValid}
              social=''
            >
              로그인
            </FormButton>
          </InputBox>
        </form>
        <SignInButtonBox>
          <StyledLink to='/signUp'>가입하기</StyledLink>
        </SignInButtonBox>
      </InnerBox>
    </ContainerBox>
  );
}

export default SignIn;
