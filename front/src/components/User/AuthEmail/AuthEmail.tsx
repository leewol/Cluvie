import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import { isAuthEmailCodeCheckValid } from "@/utils/validation";
import { isEmailAuthorized, authCode } from "@/utils/recoil";

import { AuthEmailBox, AuthEmailLabel, AuthEmailInput, AuthEmailCheckButton } from "./AuthEmailStyle";

function AuthEmail() {
  const emailAuthCode = useRecoilValue(authCode);
  const setIsThisEmailAuthorized = useSetRecoilState(isEmailAuthorized);

  const [inputCode, setInputCode] = useState<string>("");
  
  const handleChangeCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(() => event.target.value);
  }

  const handleCodeSubmit = () => {
    if (inputCode !== "" && Number(inputCode) === Number(emailAuthCode)) {
      setIsThisEmailAuthorized(() => true);
      return;
    }
    alert("인증 번호를 다시 확인해 주세요!");
  }

  return (<AuthEmailBox>
      <AuthEmailLabel htmlFor='auth-email'>이메일로 전송된 인증 번호를 입력해주세요!</AuthEmailLabel>
      <AuthEmailInput
        type='text'
        name='auth-email'
        value={inputCode}
        onChange={handleChangeCode}
      />
      <AuthEmailCheckButton 
        type="button" 
        disabled={!isAuthEmailCodeCheckValid(inputCode)}
        onClick={handleCodeSubmit}>
        인증
      </AuthEmailCheckButton>
  </AuthEmailBox>);
}

export default AuthEmail;