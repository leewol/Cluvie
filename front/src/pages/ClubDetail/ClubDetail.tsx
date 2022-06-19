/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from "react";
import { CardContent } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ClubDetailTab from "@/components/ClubDetail/ClubDetailTab";
import ClubSettingPopper from "@/components/ClubDetail/ClubSettingPopper/ClubSettingPopper";
import ClubChatButton from "@/components/ClubDetail/ClubChatButton/ClubChatButton";
import Header from "@/components/Header/Header";
import ClubJoinDialog from "@/components/ClubDetail/ClubJoinDialog/ClubJoinDialog";
import * as Api from "@/utils/api";
import * as Interface from "@/utils/interface";
import * as Style from "./ClubDetailStyle";

function ClubDetail() {
  const [openJoin, setOpenJoin] = useState(false);
  // prettier-ignore
  const [club, setClub] = useState<Interface.Club>({
    id: -100,
    name: '이름을 입력해주세요',
    intro: '한줄소개를 입력해주세요',
    description: '상세정보를 입력해주세요',
    head_count: 100,
    duration: 6,
    state: '모집중',
    manager: 4,
  });
  const handleOpenJoin = () => setOpenJoin(true);
  const handleCloseJoin = () => setOpenJoin(false);

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO);
    }
  }, []);

  useEffect(() => {
    Api.get("/clubs/16")
      .then((res) => {
        console.log(res);
        setClub(res.data.club);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("club", club);
  }, [club]);

  const sendKakaoMessage = () => {
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "마블 톺아보기",
        description: "마블 시네마틱 유니버스의 영화를 함께 샅샅이 분석해봐요!",
        imageUrl: "https://cdn.imweb.me/thumbnail/20220501/559d862b36b34.jpg",
        link: {
          webUrl: window.location.href,
          mobileWebUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "사이트로 이동",
          link: {
            webUrl: window.location.href,
            mobileWebUrl: window.location.href,
          },
        },
      ],
    });
  };

  if (club.id === -100) {
    return null;
  }

  return (
    <div>
      {/* <Header /> */}
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
                {club.name}
                <ClubSettingPopper club={club} />
              </Style.Title>
              <Style.Text1>{club.intro}</Style.Text1>
              <Style.Text2>
                본 클럽은 {club.online ? "온라인" : ""}
                {club.offline ? "오프라인" : ""}으로 진행됩니다.
              </Style.Text2>
              <Style.Text2>
                모집 마감까지 6자리 남았어요! (현재 14명 / 최대{" "}
                {club.head_count}명)
              </Style.Text2>
              <Style.Text3>
                *클럽 사정에 따라 모집이 조기 마감될 수 있습니다.
              </Style.Text3>
            </CardContent>
            <Style.ButtonBox>
              <Style.MyButton1 color='inherit' onClick={handleOpenJoin}>
                신청하기
              </Style.MyButton1>
              <ClubJoinDialog
                openJoin={openJoin}
                handleCloseJoin={handleCloseJoin}
              />
              <Style.MyButton2 color='inherit'>
                <FavoriteBorderOutlinedIcon />
                &nbsp;찜하기
              </Style.MyButton2>
              <Style.MyButton2 color='inherit' onClick={sendKakaoMessage}>
                <img
                  // eslint-disable-next-line global-require
                  src={require("../../asset/images/kakao-talk.png")}
                  alt='kakao-talk'
                />
                &nbsp;공유하기
              </Style.MyButton2>
            </Style.ButtonBox>
          </Style.ContentBox>
        </Style.WholeCard>
        <ClubDetailTab club={club} />
        <ClubChatButton />
      </Style.WholeBox>
    </div>
  );
}

export default ClubDetail;
