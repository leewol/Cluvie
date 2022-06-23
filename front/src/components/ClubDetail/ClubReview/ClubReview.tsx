import * as React from "react";
import { Rating } from "@mui/material";
import * as Style from "./ClubReviewStyle";

function ClubReview() {
  return (
    <Style.ReviewDiv>
      <Rating value={3} readOnly />
      <div>
        <Style.ReviewInfoDiv>
          2022-06-10
          <br />
          신**
        </Style.ReviewInfoDiv>
        <div>참여후기를 적는 공간입니다.</div>
      </div>
    </Style.ReviewDiv>
  );
}

export default ClubReview;
