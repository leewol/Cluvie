import * as React from "react";
import { Rating } from "@mui/material";
import * as Style from "./ClubReviewStyle";

interface Review {
  id: number;
  club_id: number;
  contents: string;
  nickname: string;
  star_rating: number;
}

function ClubReview({ review }: { review: Review }) {
  return (
    <Style.ReviewDiv>
      <Rating value={review.star_rating} readOnly />
      <Style.ReviewContentDiv>
        <Style.ReviewInfoDiv>
          2022-06-10
          <br />
          {review.nickname}
        </Style.ReviewInfoDiv>
        <div>{review.contents}</div>
      </Style.ReviewContentDiv>
    </Style.ReviewDiv>
  );
}

export default ClubReview;
