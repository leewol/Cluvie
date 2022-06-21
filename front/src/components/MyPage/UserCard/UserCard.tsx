/* eslint-disable import/extensions */
import React, { useState, useEffect } from "react";
import { CardContent, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EmailIcon from "@mui/icons-material/Email";
import * as Api from "@/utils/api";
import * as Style from "./UserCardStyle";

interface User {
  nickname?: string;
  birthday?: number;
  email?: string;
  description?: string;
  sex?: string;
}

function UserCard() {
  // prettier-ignore
  const [userInfo, setUserInfo] = useState<User>({});

  useEffect(() => {
    Api.get("/users")
      .then((res) => {
        console.log(res);
        setUserInfo(res.data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("userInfo", userInfo);
  }, [userInfo]);

  if (!userInfo) return null;

  return (
    <Style.WholeUserCard>
      <Style.FirstCardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>
            {userInfo.nickname}
          </span>
          {userInfo.sex === "남성" && (
            <MaleIcon style={{ fontSize: "24px", color: "#ffc300" }} />
          )}
          {userInfo.sex === "여성" && (
            <FemaleIcon style={{ fontSize: "24px", color: "#ffc300" }} />
          )}
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
          <span style={{ marginLeft: "5px" }}>{userInfo.birthday}</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <EmailIcon />
          <span style={{ marginLeft: "5px" }}>{userInfo.email}</span>
        </div>
      </CardContent>
      <CardContent>{userInfo.description}</CardContent>
    </Style.WholeUserCard>
  );
}

export default UserCard;
