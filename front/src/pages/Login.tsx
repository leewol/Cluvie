import React from "react";
import styled from "@emotion/styled";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
`;

function Login() {
  return (
    <LoginBox>
      <span>로그인</span>
    </LoginBox>
  );
}

export default Login;
