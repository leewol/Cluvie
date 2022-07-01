import React from "react";
import { useNavigate } from "react-router-dom";

import { Club } from "@/utils/interface";

import { CardMedia } from "@mui/material";
import { StyledSpan } from "@/styles/text";

import { ClubCardContent, ClubCardInfos } from "@/components/ClubCard/ClubCardStyle";
import testimage from "@/asset/images/testimage.PNG";

import { MainWholeCard } from './MainClubCardStyle';

interface Props {
  club: Club;
}

function MainClubCard({ club }: Props) {
  const navigate = useNavigate();

  const handleClickCard = (clubId: number | undefined) => {
    navigate(`/clubDetail/${clubId}`);
  }

  return (
    <MainWholeCard>
      <CardMedia
        component='img'
        height='250'
        src={testimage}
        alt='Club Image'
        onClick={() => handleClickCard(club.id)}
      />
      <ClubCardContent onClick={() => handleClickCard(club.id)}>
        <h3>{club.name}</h3>
        <span>{club.intro}</span>
      </ClubCardContent>
      <ClubCardInfos>
        <div>
          {!!club.online && <StyledSpan>온라인</StyledSpan>}
          {!!club.offline && <StyledSpan>오프라인</StyledSpan>}
        </div>
      </ClubCardInfos>
    </MainWholeCard>
  );
}

export default MainClubCard;