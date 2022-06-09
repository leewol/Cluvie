import React, { useState } from "react";
import styled from "@emotion/styled";

import { ContainerBox } from "../../styles/Container";

// TODO : 스타일 - input박스 커스텀, radio 커스텀, 데이터 create(API), 비밀번호 일치 확인
// input 자체를 component로 만들어서 재사용할 생각?

const JoinFormInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 50px;
  }
`;

const JoinInputs = styled.div`
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

function JoinForm() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState("");

  const monthslist = () => {
    const months = [];
    for (let i = 1; i < 13; i++) {
      months.push(<option value={i}>{i}</option>);
    }
    return months;
  };

  const dayslist = () => {
    const days = [];
    for (let i = 1; i < 32; i++) {
      days.push(<option value={i}>{i}</option>);
    }
    return days;
  };

  return (
    <ContainerBox>
      <JoinFormInnerBox>
        <h1>회원가입</h1>
        <JoinInputs>
          <label htmlFor='email'>
            이메일
            <div>
              <input type='text' id='email' value={email} />
            </div>
          </label>
          <label htmlFor='password'>
            비밀번호
            <div>
              <input type='password' id='password' value={password} />
            </div>
          </label>
          <label htmlFor='passwordCheck'>
            비밀번호 확인
            <div>
              <input
                type='password'
                id='passwordCheck'
                value={confirmPassword}
              />
            </div>
          </label>
          <label htmlFor='nickname'>
            닉네임
            <div>
              <input type='text' id='nickname' value={nickname} />
            </div>
          </label>
          성별
          <div>
            <label htmlFor='women'>
              <input type='radio' name='sex' id='women' />
              여성
            </label>
            <label htmlFor='men'>
              <input type='radio' name='sex' id='men' />
              남성
            </label>
            <label htmlFor='none'>
              <input type='radio' name='sex' id='none' />
              여성도 남성도 아니에요
            </label>
          </div>
          생년월일
          <div className='birth'>
            <BirthBox type='text' id='birthYear' />년
            <select id='birthMonth'>{monthslist()}</select>월
            <select id='birthDay'>{dayslist()}</select>일
          </div>
          <button type='submit'>회원가입</button>
        </JoinInputs>
      </JoinFormInnerBox>
    </ContainerBox>
  );
}

export default JoinForm;
