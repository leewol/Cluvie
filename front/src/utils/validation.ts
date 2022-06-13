const isEmailValid = (email: string) => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  return emailRegex.test(email);
};
const isPasswordValid = (password: string) => password.length >= 6;
const isPasswordConfirmed = (password: string, confirmPassword: string) =>
  password === confirmPassword;
const isNicknameValid = (nickname: string) => nickname.length >= 2;

export { isEmailValid, isPasswordValid, isPasswordConfirmed, isNicknameValid };
