import React from "react";
import styled from "@emotion/styled";

import { ContainerBox, InnerBox, UserForm } from "../../styles/Container";

// TODO : 스타일, 데이터 create(API), 비밀번호 일치 확인
// TODO : radio 버튼 박스 및 토글, 생년월일 입력받기 (input text, select * 2)
// input 자체를 component로 만들어서 재사용할 생각?

const BirthBox = styled.input`
  width: 100px;
`;

function JoinForm() {
  return (
    <ContainerBox>
      <InnerBox>
        <h1>회원가입</h1>
        <UserForm>
          <label htmlFor='email'>
            이메일
            <input type='text' id='email' />
          </label>
          <label htmlFor='password'>
            비밀번호
            <input type='text' id='password' />
          </label>
          <label htmlFor='passwordCheck'>
            비밀번호 확인
            <input type='text' id='passwordCheck' />
          </label>
          <label htmlFor='nickname'>
            닉네임
            <input type='text' id='nickname' />
          </label>
          성별
          <fieldset>
            <div>
              <label htmlFor='women'>
                <input type='radio' name='sex' id='women' />
                여성
              </label>
            </div>
            <div>
              <label htmlFor='men'>
                <input type='radio' name='sex' id='men' />
                남성
              </label>
            </div>
            <div>
              <label htmlFor='none'>
                <input type='radio' name='sex' id='none' />
                여성도 남성도 아니에요
              </label>
            </div>
          </fieldset>
          생년월일
          <div>
            <BirthBox type='text' id='birthYear' />년
            <BirthBox type='select' id='birthMonth' />월
            <BirthBox type='select' id='birthDay' />일
          </div>
          <button type='submit'>회원가입</button>
        </UserForm>
      </InnerBox>
    </ContainerBox>
  );
}

export default JoinForm;
