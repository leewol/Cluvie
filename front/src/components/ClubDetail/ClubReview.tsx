import * as React from "react";
import { Rating } from "@mui/material";

function ClubReview() {
  return (
    <div
      style={{
        boxShadow: "none",
        borderWidth: "0 0 1px 0",
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.2)",
        padding: "30px 0",
      }}
    >
      <Rating defaultValue={2.5} precision={0.5} readOnly />
      <div>
        <div style={{ fontSize: "13px", margin: "10px 0" }}>
          2022-06-10
          <br />
          신**
        </div>
        <div>참여후기를 적는 공간입니다.</div>
      </div>
    </div>
  );
}

export default ClubReview;
