import React from "react";
import { Link } from "react-router-dom";

import { ContainerBox, InnerBox, UserForm } from "../../styles/Container";

// TODO : 소셜 로그인, 스타일

function Login() {
  return (
    <ContainerBox>
      <InnerBox>
        <h1>로그인</h1>
        <button type='button'>구글</button>
        <button type='button'>카카오톡</button>
        <UserForm>
          <input type='text' placeholder='이메일' />
          <input type='password' placeholder='비밀번호' />
          <button type='submit'>로그인</button>
        </UserForm>
        <Link to='/join'>가입하기</Link>
      </InnerBox>
    </ContainerBox>
  );
}

export default Login;
