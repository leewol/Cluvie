import React from "react";

import { CardMedia, CardContent, IconButton } from "@mui/material";

import {
  WholeCard,
  ClubCardContent,
  ClubCardInfos,
  ClubCardFavoriteIcon,
} from "./ClubCardStyle";
import { StyledSpan } from "@/styles/text";
import testimage from "@/asset/images/testimage.PNG";

function ClubCard(): React.ReactElement {
  return (
    <WholeCard>
      <CardMedia
        component='img'
        height='250'
        src={testimage}
        alt='Club Image'
      />
      <ClubCardContent>
        {/* 제목, 소개 받아서 표시 */}
        <h3>MCU 톺아보기</h3>
        <span>마블 시네마틱 유니버스의 영화를 함께 샅샅이 분석해봐요!</span>
      </ClubCardContent>
      <CardContent>
        {/* 해시태그 받아서 표시 */}
        <StyledSpan>#지금뜨는</StyledSpan>
        <StyledSpan>#마감임박</StyledSpan>
      </CardContent>
      <ClubCardInfos>
        {/* 온오프라인 받아서 표시 / 좋아요 적용 */}
        <div>
          <StyledSpan>오프라인</StyledSpan>
        </div>
        <IconButton aria-label='favorite'>
          <ClubCardFavoriteIcon />
        </IconButton>
      </ClubCardInfos>
    </WholeCard>
  );
}

export default ClubCard;
