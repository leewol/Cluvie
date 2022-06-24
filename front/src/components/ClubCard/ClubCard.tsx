import React from "react";

import { CardMedia, CardContent, IconButton } from "@mui/material";

import { Club } from "@/utils/interface";

import {
  WholeCard,
  ClubCardContent,
  ClubCardInfos,
  ClubCardFavoriteIcon,
} from "./ClubCardStyle";
import { StyledSpan } from "@/styles/text";
import testimage from "@/asset/images/testimage.PNG";

interface Props {
  club: Club;
}

function ClubCard({ club }: Props): React.ReactElement {
  return (
    <WholeCard>
      <CardMedia
        component='img'
        height='250'
        src={testimage}
        alt='Club Image'
      />
      <ClubCardContent>
        <h3>{club.name}</h3>
        <span>{club.intro}</span>
      </ClubCardContent>
      <CardContent>
        {/* 해시태그 받아서 표시 */}
        <StyledSpan>#지금뜨는</StyledSpan>
        <StyledSpan>#마감임박</StyledSpan>
      </CardContent>
      <ClubCardInfos>
        <div>
          {!!club.online && <StyledSpan>온라인</StyledSpan>}
          {!!club.offline && <StyledSpan>오프라인</StyledSpan>}
        </div>
        <IconButton aria-label='favorite'>
          <ClubCardFavoriteIcon />
        </IconButton>
      </ClubCardInfos>
    </WholeCard>
  );
}

export default ClubCard;
