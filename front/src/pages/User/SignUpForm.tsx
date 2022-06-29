import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { isSignInUser } from "@/utils/recoil";
import {
  isEmailValid,
  isPasswordValid,
  isPasswordConfirmed,
  isNicknameValid,
  showValidIcon,
} from "@/utils/validation";
import * as Api from "@/utils/api";
import { onChangeFunction } from "@/utils/eventHandler";

import { ContainerBox, StyledInput } from "@/styles/containers";
import { FormButton, UserInputDiv } from "@/styles/user";
import { StyledLabel } from "@/styles/text";
import * as Styled from "./SignUpFormStyle";

function SignUpForm() {
  const navigate = useNavigate();

  const setIsSignIn = useSetRecoilState(isSignInUser);
  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    sex: "",
  });

  const isFormValid =
    isEmailValid(form.email) &&
    isPasswordValid(form.password) &&
    isPasswordConfirmed(form.password, form.confirmPassword) &&
    isNicknameValid(form.nickname) &&
    form.birthday &&
    form.sex;

  const onChange = onChangeFunction(setForm);

  const handleSumbit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // * 유저 데이터 create(post) > 로그인(post) > 메인 페이지로 이동
    const { email, password, nickname, birthday, sex } = form;
    Api.post("/users", {
      email,
      password,
      nickname,
      birthday,
      sex,
    })
      .then((res) => {
        console.log("회원가입 성공!");
        console.log(res);

        Api.post("/users/signIn", {
          email,
          password,
        })
          .then((resSignIn) => {
            const { token } = resSignIn.data;
            window.localStorage.setItem("token", token);
            setIsSignIn(() => true);

            navigate("/");
            console.log("로그인 성공!");
          })
          .catch((errSignIn) => {
            console.error(errSignIn);
          });
      })
      .catch((err) => {
        console.log("회원가입 실패!!");
        console.error(err);
      });
  };

  return (
    <ContainerBox>
      <Styled.SignUpFormInnerBox onSubmit={handleSumbit} autoComplete='off'>
        <h1>회원가입</h1>
        <Styled.SignUpInputBox>
          <StyledLabel htmlFor='email'>이메일</StyledLabel>
          <UserInputDiv>
            <StyledInput
              type='text'
              name='email'
              value={form.email}
              onChange={onChange}
            />
            {form.email ? showValidIcon(isEmailValid(form.email)) : ""}
          </UserInputDiv>

          <StyledLabel htmlFor='password'>비밀번호</StyledLabel>
          <UserInputDiv>
            <StyledInput
              type='password'
              name='password'
              value={form.password}
              onChange={onChange}
            />
            {form.password ? showValidIcon(isPasswordValid(form.password)) : ""}
          </UserInputDiv>

          <StyledLabel htmlFor='confirmPassword'>비밀번호 확인</StyledLabel>
          <UserInputDiv>
            <StyledInput
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
          </UserInputDiv>

          <StyledLabel htmlFor='nickname'>닉네임</StyledLabel>
          <UserInputDiv>
            <StyledInput
              type='text'
              name='nickname'
              value={form.nickname}
              onChange={onChange}
            />
            {form.nickname ? showValidIcon(isNicknameValid(form.nickname)) : ""}
          </UserInputDiv>

          <StyledLabel>성별</StyledLabel>
          <Styled.RadioInputDiv id='sex'>
            <Styled.StyledRadioInput
              id='women'
              type='radio'
              name='sex'
              value='여성'
              checked={form.sex === "여성"}
              onChange={onChange}
            />
            <Styled.StyledRadioLabel htmlFor='women'>
              여성
            </Styled.StyledRadioLabel>
            <Styled.StyledRadioInput
              id='men'
              type='radio'
              name='sex'
              value='남성'
              checked={form.sex === "남성"}
              onChange={onChange}
            />
            <Styled.StyledRadioLabel htmlFor='men'>
              남성
            </Styled.StyledRadioLabel>
            <Styled.StyledRadioInput
              id='none'
              type='radio'
              name='sex'
              value='여성도 남성도 아니에요'
              checked={form.sex === "여성도 남성도 아니에요"}
              onChange={onChange}
            />
            <Styled.StyledRadioLabel htmlFor='none'>
              여성도 남성도 아니에요
            </Styled.StyledRadioLabel>
          </Styled.RadioInputDiv>
          <StyledLabel>생년월일</StyledLabel>

          <UserInputDiv>
            <Styled.StyledDateInput
              type='date'
              name='birthday'
              value={form.birthday}
              onChange={onChange}
            />
          </UserInputDiv>
          <FormButton
            type='submit'
            disabled={!isFormValid}
            isFormValid={!!isFormValid}
          >
            회원가입
          </FormButton>
        </Styled.SignUpInputBox>
      </Styled.SignUpFormInnerBox>
    </ContainerBox>
  );
}

export default SignUpForm;
