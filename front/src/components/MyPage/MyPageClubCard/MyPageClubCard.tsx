/* eslint-disable import/extensions */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardMedia, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import testimage from "@/asset/images/testimage.PNG";
import { StyledSpan } from "@/styles/text";
import * as Interface from "@/utils/interface";
import * as Api from "@/utils/api";
import ClubDeleteJoinDialog from "@/components/ClubDetail/ClubDeleteJoinDialog/ClubDeleteJoinDialog";
import * as Style from "./MyPageClubCardStyle";

function MyPageClubCard({
  club,
  like,
}: {
  club: Interface.Club,
  // eslint-disable-next-line react/require-default-props
  like?: boolean,
}) {
  const [openDeleteJoin, setOpenDeleteJoin] = useState(false);
  const [applicantsButton, setApplicantsButton] = useState(false);
  const [likesButton, setLikesButton] = useState(false);
  const handleToggleDeleteJoin = () => setOpenDeleteJoin((prev) => !prev);
  const handleDeleteLikes = () => {
    Api.delete(`/likes/${club.club_id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setLikesButton((prev) => !prev);
  };
  const handlePostLikes = () => {
    Api.post("/likes", { club_id: club.id })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setLikesButton((prev) => !prev);
  };

  return (
    <Style.WholeCardDiv>
      <Style.WholeCard>
        <Link to={`/clubDetail/${club.club_id}`}>
          <CardMedia
            component='img'
            height='200'
            src={testimage}
            alt='Club Image'
          />
        </Link>
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
          {like && !likesButton && (
            <IconButton aria-label='favorite' onClick={handleDeleteLikes}>
              <Style.ClubCardFavoriteIcon />
            </IconButton>
          )}
          {like && likesButton && (
            <IconButton aria-label='favorite' onClick={handlePostLikes}>
              <FavoriteBorderIcon />
            </IconButton>
          )}
          {!like && !applicantsButton && (
            <IconButton aria-label='favorite' onClick={handleToggleDeleteJoin}>
              <Style.StyledSpan2>수락대기중</Style.StyledSpan2>
            </IconButton>
          )}
          {!like && applicantsButton && (
            <IconButton aria-label='favorite'>
              <Style.StyledSpan3>신청취소중</Style.StyledSpan3>
            </IconButton>
          )}
          <ClubDeleteJoinDialog
            clubId={club.club_id}
            openDeleteJoin={openDeleteJoin}
            handleToggleDeleteJoin={handleToggleDeleteJoin}
            setApplicantsButton={setApplicantsButton}
          />
        </Style.ClubCardInfos>
      </Style.WholeCard>
    </Style.WholeCardDiv>
  );
}

export default MyPageClubCard;
