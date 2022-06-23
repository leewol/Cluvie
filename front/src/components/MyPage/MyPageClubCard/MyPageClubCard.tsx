/* eslint-disable import/extensions */
import React from "react";

import { CardMedia, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import testimage from "@/asset/images/testimage.PNG";
import { StyledSpan } from "@/styles/text";
import * as Interface from "@/utils/interface";
import * as Style from "./MyPageClubCardStyle";

function MyPageClubCard({
  club,
  like,
}: {
  club: Interface.Club,
  // eslint-disable-next-line react/require-default-props
  like?: boolean,
}) {
  return (
    <Style.WholeCardDiv>
      <Style.WholeCard>
        <CardMedia
          component='img'
          height='200'
          src={testimage}
          alt='Club Image'
        />
        <Style.ClubCardContent1>
          {/* 제목, 소개 받아서 표시 */}
          <h3>{club.name}</h3>
          <span>{club.intro}</span>
        </Style.ClubCardContent1>
        <Style.ClubCardContent2>
          {/* 해시태그 받아서 표시 */}
          <StyledSpan>#지금뜨는</StyledSpan>
          <StyledSpan>#마감임박</StyledSpan>
          <StyledSpan>#주말</StyledSpan>
        </Style.ClubCardContent2>
        <Style.ClubCardInfos>
          {/* 온오프라인 받아서 표시 / 좋아요 적용 */}
          <div>
            {club.offline ? <StyledSpan>오프라인</StyledSpan> : ""}
            {club.online ? <StyledSpan>온라인</StyledSpan> : ""}
          </div>
          {like ? (
            <IconButton aria-label='favorite'>
              <Style.ClubCardFavoriteIcon />
            </IconButton>
          ) : (
            <IconButton aria-label='favorite'>
              <Style.StyledSpan2>수락대기중</Style.StyledSpan2>
            </IconButton>
          )}
        </Style.ClubCardInfos>
      </Style.WholeCard>
    </Style.WholeCardDiv>
  );
}

export default MyPageClubCard;
