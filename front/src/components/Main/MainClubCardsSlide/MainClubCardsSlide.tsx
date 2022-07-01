import React, { useEffect, useState } from "react";

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import { Club } from "@/utils/interface";

import MainClubCard from "@/components/Main/MainClubCard/MainClubCard";

import { 
  ClubCardsSlideBox, 
  ClubCardBox, 
  CardArrowBox,
  CardSlideImageHideBox } from "./MainClubCardsSlideStyle";

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface Props {
  resClubList: Club[];
}

function MainClubCardsSlide({ resClubList }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newCurrentIndex = currentIndex + 1;
    console.log("idx",currentIndex);
    console.log("len", cards.length);
    if (newCurrentIndex > cards.length - 4) return;
    setCurrentIndex(newCurrentIndex);
    // console.log(cardSlide);
  }

  const handlePrev = () => {
    const newCurrentIndex = currentIndex - 1;
    console.log("idx", currentIndex);
    console.log(cards.length);
    if (newCurrentIndex < 0) return;
    setCurrentIndex(newCurrentIndex);
  }

  const slideStyle = () => {
    return {
      transform: `translateX(-${(currentIndex) * 385}px)`,
    };
  }

  useEffect(() => {
    // console.log(currentIndex);
    // console.log(cards.length);
  }, [currentIndex])

  return (
    <ClubCardsSlideBox>
      <CardSlideImageHideBox className="hide-prev"/>
      <CardSlideImageHideBox className="hide-back"/>
      <ClubCardBox style={slideStyle()}>
        {
          resClubList.slice(0, 10).map((weekendClub) => 
          <MainClubCard key={weekendClub.id} club={weekendClub} />)
        }
      </ClubCardBox>
      <CardArrowBox className="arrow-back" onClick={handlePrev}>
        <ArrowBackIosRoundedIcon className="arrow-icon" />
      </CardArrowBox>
      <CardArrowBox className="arrow-forward" onClick={handleNext}>
        <ArrowForwardIosRoundedIcon className="arrow-icon" />
      </CardArrowBox>
    </ClubCardsSlideBox>
  )
}

export default MainClubCardsSlide;