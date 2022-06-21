/* eslint-disable import/extensions */
import React, { useEffect } from "react";
import { CardContent, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EmailIcon from "@mui/icons-material/Email";
import * as Api from "@/utils/api";
import * as Style from "./UserCardStyle";

function UserCard() {
  // useEffect(()=>{
  //     Api.get
  // },[])

  return (
    <Style.WholeUserCard>
      <Style.FirstCardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>닉네임</span>
          <MaleIcon style={{ fontSize: "24px", color: "#ffc300" }} />
        </div>
        <IconButton style={{ margin: "0 0 0 auto" }}>
          <EditIcon style={{ fontSize: "24px" }} />
        </IconButton>
      </Style.FirstCardContent>
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <PeopleAltIcon />
          <span style={{ marginLeft: "5px" }}>생년월일</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <EmailIcon />
          <span style={{ marginLeft: "5px" }}>test@email.com</span>
        </div>
      </CardContent>
      <CardContent>자기소개를 적는 공간입니다.</CardContent>
    </Style.WholeUserCard>
  );
}

export default UserCard;
