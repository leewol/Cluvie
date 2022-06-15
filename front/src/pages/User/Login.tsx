import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { ContainerBox, InnerBox } from "@/styles/container";
import { InputBox, FormButton, UserInputDiv, UserInput } from "@/styles/user";

import {
  isEmailValid,
  isPasswordValid,
  showValidIcon,
} from "@/utils/validation";
import * as Api from "@/utils/api";
import SocialButton from "@/components/User/SocialButton";

// TODO : 소셜 로그인, 스타일 (input박스, 버튼, 링크)

const LoginButtonBox = styled.div`
  width: 100%;
  margin-bottom: 30px;
  text-align: right;
`;

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const isFormValid =
    isEmailValid(form.email) && isPasswordValid(form.password);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);

    // * 로그인 후 메인 페이지로 이동
    const { email, password } = form;
    Api.post("/signIn", {
      email,
      password,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <ContainerBox>
      <InnerBox>
        <h1>로그인</h1>
        <LoginButtonBox>
          <SocialButton social='google' action='로그인' />
          <SocialButton social='kakao-talk' action='로그인' />
        </LoginButtonBox>
        <form onSubmit={handleSumbit} autoComplete='off'>
          <InputBox>
            <UserInputDiv>
              <UserInput
                type='text'
                placeholder='이메일'
                name='email'
                value={form.email}
                onChange={onChange}
              />
              {form.email ? showValidIcon(isEmailValid(form.email)) : ""}
            </UserInputDiv>
            <UserInputDiv>
              <UserInput
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
        <LoginButtonBox>
          <Link to='/register'>가입하기</Link>
        </LoginButtonBox>
      </InnerBox>
    </ContainerBox>
  );
}

export default Login;
