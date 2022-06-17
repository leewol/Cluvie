/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import { CardContent } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ClubDetailTab from "@/components/ClubDetail/ClubDetailTab";
import * as Style from "./ClubPreviewStyle";

interface Club {
  id: number;
  name: string;
  picture: string | null;
  intro: string;
  day: number;
  description: string;
  views: number | null;
  num: number;
  process: number;
  duration_of_progress: number;
  club_state: string;
}

function ClubPreview({ newClub }: { newClub: Club }) {
  return (
    <div>
      <Style.WholeBox>
        <Style.WholeCard>
          <img
            // eslint-disable-next-line global-require
            src={require("@/asset/images/testimage.PNG")}
            alt='클럽썸네일이미지'
          />
          <Style.ContentBox>
            <CardContent>
              <Style.Title>
                {newClub.name}
                <SettingsIcon />
              </Style.Title>
              <Style.Text1>{newClub.intro}</Style.Text1>
              <Style.Text2>
                본 클럽은 {newClub.process ? "오프라인" : "온라인"}으로
                진행됩니다.
              </Style.Text2>
              <Style.Text2>
                모집 마감까지 6자리 남았어요! (현재 14명 / 최대 {newClub.num}명)
              </Style.Text2>
              <Style.Text3>
                *클럽 사정에 따라 모집이 조기 마감될 수 있습니다.
              </Style.Text3>
            </CardContent>
            <Style.ButtonBox>
              <Style.MyButton1 color='inherit'>신청하기</Style.MyButton1>
              <Style.MyButton2 color='inherit'>
                <FavoriteBorderOutlinedIcon />
                &nbsp;찜하기
              </Style.MyButton2>
              <Style.MyButton2 color='inherit'>
                <img
                  // eslint-disable-next-line global-require
                  src={require("@/asset/images/kakao-talk.png")}
                  alt='kakao-talk'
                />
                &nbsp;공유하기
              </Style.MyButton2>
            </Style.ButtonBox>
          </Style.ContentBox>
        </Style.WholeCard>
        <ClubDetailTab club={newClub} preview />
      </Style.WholeBox>
    </div>
  );
}

export default ClubPreview;
