import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { ContainerBox, InnerBox } from "../../styles/Container";

// TODO : 소셜 로그인, 스타일, 이메일 비밀번호 검증

const UserForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  input {
    width: 99%;
  }
`;

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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
  };

  return (
    <ContainerBox>
      <InnerBox>
        <h1>로그인</h1>
        <button type='button'>구글</button>
        <button type='button'>카카오톡</button>
        <UserForm onSubmit={handleSumbit}>
          <input
            type='text'
            placeholder='이메일'
            name='email'
            value={form.email}
            onChange={onChange}
          />
          <input
            type='password'
            placeholder='비밀번호'
            name='password'
            value={form.password}
            onChange={onChange}
          />
          <button type='submit'>로그인</button>
        </UserForm>
        <Link to='/register'>가입하기</Link>
      </InnerBox>
    </ContainerBox>
  );
}

export default Login;
