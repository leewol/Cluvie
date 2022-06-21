import React from "react";

import { UserButton } from "@/styles/user";

// ? 더 구체적으로 String Literal으로 표현해야 함
type SocialType = {
  social: "google" | "kakao-talk",
  action: "로그인" | "회원가입",
};

function SocialButton({ social, action }: SocialType): React.ReactElement {
  const socials = { google: "구글", "kakao-talk": "카카오톡으" };

  return (
    <UserButton type='button' social={social}>
      <img
        src={require(`../../asset/images/${social}.png`)}
        alt={`${social} icon`}
        width='25px'
        height='25px'
      />
      <span>
        {socials[social]}로 {action}
      </span>
    </UserButton>
  );
}

export default SocialButton;
