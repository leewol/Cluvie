/* eslint-disable import/extensions */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CardMedia,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import testimage from "@/asset/images/testimage.PNG";
import { StyledSpan } from "@/styles/text";
import * as Interface from "@/utils/interface";
import * as Api from "@/utils/api";
import CloseApplicantsDialog from "@/components/MyClubList/CloseApplicantsDialog/CloseApplicantsDialog";
import * as Style from "./MyClubListCardStyle";

function MyClubListCard({
  club,
  make,
}: {
  club: Interface.Club,
  // eslint-disable-next-line react/require-default-props
  make: string,
}) {
  const [openCloseApplicants, setOpenCloseApplicants] = useState(false);
  const [closeApplicantsButton, setCloseApplicantsButton] = useState(false);
  const [accordionClick, setAccordionClick] = useState(false);
  const handleToggleCloseApplicants = () =>
    setOpenCloseApplicants((prev) => !prev);

  const handleClickAccordion = () => {
    setAccordionClick((prev) => !prev);
  };

  useEffect(() => {
    if (accordionClick) {
      Api.get(`/applications/${club.id}/users`)
        .then((res) => console.log("모임에 신청한 사람", res.data.applicants))
        .catch((err) => console.log(err));
    }
  }, [accordionClick]);

  return (
    <Style.WholeCardDiv>
      <Style.WholeCard make={make}>
        <Link to={`/clubDetail/${club.id}`}>
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
          <Style.OnOffDiv>
            {club.offline ? <StyledSpan>오프라인</StyledSpan> : ""}
            {club.online ? <StyledSpan>온라인</StyledSpan> : ""}
          </Style.OnOffDiv>
          {make === "true" && !closeApplicantsButton && (
            <Style.MyIconButton
              aria-label='favorite'
              onClick={handleToggleCloseApplicants}
            >
              <Style.StyledSpan2>모집마감하기</Style.StyledSpan2>
            </Style.MyIconButton>
          )}
          {make === "true" && closeApplicantsButton && (
            <Style.MyIconButton aria-label='favorite'>
              <Style.StyledSpan3>모집마감중</Style.StyledSpan3>
            </Style.MyIconButton>
          )}
          <CloseApplicantsDialog
            clubId={club.id}
            openCloseApplicants={openCloseApplicants}
            handleToggleCloseApplicants={handleToggleCloseApplicants}
            setCloseApplicantsButton={setCloseApplicantsButton}
          />
        </Style.ClubCardInfos>
      </Style.WholeCard>
      {make === "true" && (
        <Style.AccordionDiv>
          <Accordion
            style={{ borderRadius: "0px 0px 4px 4px" }}
            onClick={handleClickAccordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <div style={{ fontWeight: "bold" }}>신청자 목록</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </AccordionDetails>
          </Accordion>
        </Style.AccordionDiv>
      )}
    </Style.WholeCardDiv>
  );
}

export default MyClubListCard;
