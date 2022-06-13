import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

import { ContainerBox, InputBox } from "@/styles/Container";
import {
  isEmailValid,
  isPasswordValid,
  isPasswordConfirmed,
  isNicknameValid,
  showValidIcon,
} from "@/utils/validation";
import * as Api from "@/utils/api";

// TODO : 스타일 - 데이터 create(API), 스타일 (input박스, radio, 버튼)

const RegisterFormInnerBox = styled.form`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 50px;
  }
`;

const RegisterInputBox = styled(InputBox)`
  input {
    margin-bottom: 20px;
  }
  input[type="radio"] {
    // display: none;
  }
`;

function RegisterForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    sex: "",
  });

  const isFormValid =
    isEmailValid(form.email) &&
    isPasswordValid(form.password) &&
    isPasswordConfirmed(form.password, form.confirmPassword) &&
    isNicknameValid(form.nickname);

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

    // * 데이터 create 후 메인 페이지로 이동하기
    // const { email, password, nickname, birthDate, sex } = form;
    // Api.post("/users", {
    //   email,
    //   password,
    //   nickname,
    //   birthDate,
    //   sex,
    // })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  return (
    <ContainerBox>
      <RegisterFormInnerBox onSubmit={handleSumbit}>
        <h1>회원가입</h1>
        <RegisterInputBox>
          <label htmlFor='email'>
            이메일
            <div>
              <input
                type='text'
                name='email'
                value={form.email}
                onChange={onChange}
              />
              {form.email ? showValidIcon(isEmailValid(form.email)) : ""}
            </div>
          </label>
          <label htmlFor='password'>
            비밀번호
            <div>
              <input
                type='password'
                name='password'
                value={form.password}
                onChange={onChange}
              />
              {form.password
                ? showValidIcon(isPasswordValid(form.password))
                : ""}
            </div>
          </label>
          <label htmlFor='confirmPassword'>
            비밀번호 확인
            <div>
              <input
                type='password'
                name='confirmPassword'
                value={form.confirmPassword}
                onChange={onChange}
              />
              {form.confirmPassword
                ? showValidIcon(
                    isPasswordConfirmed(form.password, form.confirmPassword)
                  )
                : ""}
            </div>
          </label>
          <label htmlFor='nickname'>
            닉네임
            <div>
              <input
                type='text'
                name='nickname'
                value={form.nickname}
                onChange={onChange}
              />
              {form.nickname
                ? showValidIcon(isNicknameValid(form.nickname))
                : ""}
            </div>
          </label>
          성별
          <div id='sex' onChange={onChange}>
            <label htmlFor='women'>
              <input type='radio' name='sex' value='여성' />
              여성
            </label>
            <label htmlFor='men'>
              <input type='radio' name='sex' value='남성' />
              남성
            </label>
            <label htmlFor='none'>
              <input type='radio' name='sex' value='여성도 남성도 아니에요' />
              여성도 남성도 아니에요
            </label>
          </div>
          생년월일
          <div className='birth'>
            <input
              type='date'
              name='birthDate'
              value={form.birthDate}
              onChange={onChange}
            />
          </div>
          <button type='submit' disabled={!isFormValid}>
            회원가입
          </button>
        </RegisterInputBox>
      </RegisterFormInnerBox>
    </ContainerBox>
  );
}

export default RegisterForm;
