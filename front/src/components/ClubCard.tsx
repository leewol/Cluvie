import React from "react";
import styled from "@emotion/styled/macro";

import { ContainerBox } from "@/styles/Container";
import { Card, CardMedia, CardContent, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const WholeCard = styled(Card)`
  width: 350px;
  height: 500px;
`;

const ClubCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  h3 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  span {
    color: #5b5b5b;
  }
`;

const StyledSpan = styled.span`
  color: #141414;
  font-size: 14px;
  font-weight: 600;
  background-color: #ffe047;
  border: 3px solid #ffe047;
  border-radius: 10px;
  margin-right: 5px;
  padding: 0 5px;
`;

const ClubCardInfos = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -5px;
  ${StyledSpan} {
    background-color: #d3d3d3;
    border: 3px solid #d3d3d3;
  }
`;

const ClubCardFavoriteIcon = styled(FavoriteIcon)`
  color: #f07167;
  font-size: 28px;
`;

function ClubCard() {
  return (
    <ContainerBox>
      <WholeCard>
        <CardMedia
          component='img'
          height='250'
          src={require("../asset/images/testimage.PNG")}
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
    </ContainerBox>
  );
}

export default ClubCard;
