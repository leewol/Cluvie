import styled from "@emotion/styled/macro";

import { InputBox, UserInputDiv } from "@/styles/user";

export const SignUpFormInnerBox = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SignUpInputBox = styled(InputBox)`
  input {
    margin-bottom: 20px;
  }
  .icon {
    margin-top: 9px;
  }
`;

export const RadioInputDiv = styled(UserInputDiv)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledRadioLabel = styled.label`
  border: 1px solid #d3d3d3;
  border-radius: 7px;
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    animation: 0.1s linear forwards bgcolor-hover;
    cursor: pointer;
  }
  @keyframes bgcolor-hover {
    from {
    }
    to {
      background-color: #ffc300;
      border: 1px solid #ffc300;
    }
`;

export const StyledRadioInput = styled.input`
  display: none;
  &:checked + ${StyledRadioLabel} {
    background-color: #ffc300;
    border: 1px solid #ffc300;
  }
`;

export const StyledDateInput = styled.input`
  appearance: none;
  outline: none;
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border-radius: 7px;
  border: 1px solid #d3d3d3;
  background: transparent;
  padding-left: 10px;
  font-family: inherit;
  font-size: 14px;

  ::-webkit-datetime-edit-text {
    padding: 0 20px;
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-calendar-picker-indicator {
    padding-right: 10px;
    font-size: 18px;
  }
  :focus {
    animation: 0.7s linear forwards border-focus;
  }
  @keyframes border-focus {
    from {
      border: 1px solid #d3d3d3;
    }
    to {
      border: 1px solid #ffc300;
    }
`;
