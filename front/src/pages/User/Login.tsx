import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { ContainerBox, InnerBox, InputBox } from "../../styles/Container";
import {
  isEmailValid,
  isPasswordValid,
  showValidIcon,
} from "../../utils/validation";
import * as Api from "../../utils/api";

// TODO : 소셜 로그인, 스타일 (input박스, 버튼, 링크)

const LoginInputBox = styled(InputBox)`
  div > input {
    width: 592px;
  }
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
    // * 로그인 후 메인 페이지로 이동하기
  };

  return (
    <ContainerBox>
      <InnerBox>
        <h1>로그인</h1>
        <button type='button'>구글</button>
        <button type='button'>카카오톡</button>
        <form onSubmit={handleSumbit}>
          <LoginInputBox>
            <div>
              <input
                type='text'
                placeholder='이메일'
                name='email'
                value={form.email}
                onChange={onChange}
              />
              {form.email ? showValidIcon(isEmailValid(form.email)) : ""}
            </div>
            <div>
              <input
                type='password'
                placeholder='비밀번호'
                name='password'
                value={form.password}
                onChange={onChange}
              />
              {form.password
                ? showValidIcon(isPasswordValid(form.password))
                : ""}
            </div>
            <button type='submit' disabled={!isFormValid}>
              로그인
            </button>
          </LoginInputBox>
        </form>
        <Link to='/register'>가입하기</Link>
      </InnerBox>
    </ContainerBox>
  );
}

export default Login;
