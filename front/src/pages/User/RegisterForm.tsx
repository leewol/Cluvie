import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import axios from "axios";

import { ContainerBox } from "../../styles/Container";

// TODO : 스타일 - 데이터 create(API), 비밀번호 일치 확인, input박스 커스텀, radio 커스텀
// TODO: 검증 - 이메일 형식, 비밀번호 6자리 이상, 비밀번호 확인 일치, 닉네임 2글자 이상
// 이야기할 것 : age , enum (성별 자료형)

const RegisterFormInnerBox = styled.form`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 50px;
  }
`;

const RegisterInputs = styled.div`
  display: flex;
  flex-direction: column;

  div:not(.birth) > input {
    width: 100%;
  }

  input {
    margin-bottom: 20px;
  }
  input[type="radio"] {
    // display: none;
  }
`;

const BirthBox = styled.input`
  width: 100px;
`;

function RegisterForm() {
  const serverUrl = `http://${window.location.hostname}:5001`;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    age: "",
    sex: "",
  });
  const [birthYear, setBirthYear] = useState("");

  const isEmailValid = (email: String) => {
    return true;
  };
  const isPasswordValid = form.password.length >= 6;
  const isPasswordConfirmed = form.password === form.confirmPassword;
  const isNicknameValid = form.nickname.length >= 2;
  const isFormValid =
    isEmailValid(form.email) &&
    isPasswordValid &&
    isPasswordConfirmed &&
    isNicknameValid;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let age = 0;

    if (name === "age") {
      setBirthYear(() => value);

      const date = new Date();
      age = date.getFullYear() - Number(value) + 1;
    }

    setForm((prev) => ({
      ...prev,
      [name]: name === "age" ? age : value,
    }));
  };

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    // * 데이터 create 후 메인 페이지로 이동하기
    const { email, password, nickname, age } = form;
    const bodyData = JSON.stringify({
      email,
      password,
      nickname,
      age,
      sex: Number(form.sex),
    });

    console.log(bodyData);

    axios
      .post(`${serverUrl}/users/registration`, bodyData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const monthslist = () => {
    const months = [];
    for (let i = 1; i < 13; i++) {
      months.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return months;
  };

  const dayslist = () => {
    const days = [];
    for (let i = 1; i < 32; i++) {
      days.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return days;
  };

  return (
    <ContainerBox>
      <RegisterFormInnerBox onSubmit={handleSumbit}>
        <h1>회원가입</h1>
        <RegisterInputs>
          <label htmlFor='email'>
            이메일
            <div>
              <input
                type='text'
                name='email'
                value={form.email}
                onChange={onChange}
              />
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
            </div>
          </label>
          성별
          <div id='sex' onChange={onChange}>
            <label htmlFor='women'>
              <input type='radio' name='sex' value='1' />
              여성
            </label>
            <label htmlFor='men'>
              <input type='radio' name='sex' value='2' />
              남성
            </label>
            <label htmlFor='none'>
              <input type='radio' name='sex' value='3' />
              여성도 남성도 아니에요
            </label>
          </div>
          생년월일
          <div className='birth'>
            <BirthBox
              type='text'
              name='age'
              value={birthYear}
              onChange={onChange}
            />
            년<select name='birthMonth'>{monthslist()}</select>월
            <select name='birthDay'>{dayslist()}</select>일
          </div>
          <button type='submit'>회원가입</button>
        </RegisterInputs>
      </RegisterFormInnerBox>
    </ContainerBox>
  );
}

export default RegisterForm;
