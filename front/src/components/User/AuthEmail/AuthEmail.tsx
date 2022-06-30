import React, { useState } from "react";

import { isAuthEmailCodeValid } from "@/utils/validation";

import { AuthEmailBox, AuthEmailLabel, AuthEmailInput, AuthEmailCheckButton } from "./AuthEmailStyle";

function AuthEmail() {
  const [authCode, setAuthCode] = useState<string>("");

  const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthCode(() => event.target.value);
  }

  const handleCodeSubmit = () => {

  }

  return (<AuthEmailBox>
      <AuthEmailLabel htmlFor='auth-email'>이메일로 전송된 인증 번호를 입력해주세요!</AuthEmailLabel>
      <AuthEmailInput
        type='text'
        name='auth-email'
        value={authCode}
        onChange={handleChangeCode}
      />
      <AuthEmailCheckButton 
        type="submit" 
        disabled={!isAuthEmailCodeValid(authCode)}
        onClick={handleCodeSubmit}>
        인증
      </AuthEmailCheckButton>
  </AuthEmailBox>);
}

export default AuthEmail;