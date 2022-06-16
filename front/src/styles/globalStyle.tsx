import React from "react";
import { Global, css } from "@emotion/react";

const style = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css");
  html {
    font-size: 16px;
  }

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", sans-serif;

    button {
      &:hover {
        opacity: 0.6;
      }
    }
  }
`;

function GlobalStyle() {
  return <Global styles={style} />;
}

export default GlobalStyle;
