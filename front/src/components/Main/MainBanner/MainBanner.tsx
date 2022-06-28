import React from "react";

import { MainBannerBox, MainTextBox, MainBannerImageBox } from "./MainBannerStyle";

function MainBanner() {
  return (
    <MainBannerBox>
      <MainTextBox>
        <h2>혼자 즐기는 영화가 지겹다면</h2>
        <h2>
          <span>클러비</span>로 모여 보세요!
        </h2>
        <div>
          <span>#지금뜨는</span>
          <span>#마감임박</span>
          <span>#주말모임</span>
        </div>
      </MainTextBox>
      <MainBannerImageBox>
        이미지
        화살표 아이콘
      </MainBannerImageBox>
    </MainBannerBox>
  );
}

export default MainBanner;