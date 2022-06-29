import React, { useRef, useState, useEffect } from "react";

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { 
  MainBannerBox, 
  MainTextBox, 
  MainBannerImageBox,
  SlideImageBox,
  StyledSpanBox,
  MainStyledSpan,
  ArrowBox } from "./MainBannerStyle";

import img1 from "@/asset/images/abouttime.jpg";
import img2 from "@/asset/images/interstellar.png";
import img3 from "@/asset/images/time.jpg";

const images = [img1, img2, img3];

function MainBanner() {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [style, setStyle] = useState({});
  const [imgs, setImgs] = useState(images);

  useEffect(() => {
    // if (currentImgIndex === 0) {
    //   setImgs((prev) => {
    //     prev.push(prev[prev.length - 1]);
    //     prev.unshift(prev[0]);
    //     return prev;
    //   })
    // }
    // if (currentImgIndex === imgs.length - 1) {
    //   setImgs((prev) => {
    //     prev.push(prev[0]);
    //     prev.unshift(prev[prev.length - 1]);
    //     return prev;
    //   })
    // }

    setTimeout(() => {
      setCurrentImgIndex((prev) => {
        if (prev < imgs.length - 1) {
          return prev + 1;
        }
        return 0;
      })
    }, 3000);
    
    setStyle(() => ({
      transform: `translateX(-${(currentImgIndex) * 4}00px)`
    }));

    console.log(currentImgIndex);
    console.log(imgs);
  }, [currentImgIndex])
  
  return (
    <MainBannerBox>
      <MainTextBox>
        <h2>혼자 즐기는 영화가 지겹다면</h2>
        <h2>
          <span>클러비</span>로 모여 보세요!
        </h2>
        <StyledSpanBox>
          <MainStyledSpan>#지금뜨는</MainStyledSpan>
          <MainStyledSpan>#마감임박</MainStyledSpan>
          <MainStyledSpan>#주말모임</MainStyledSpan>
        </StyledSpanBox>
      </MainTextBox>
      <MainBannerImageBox>
          <SlideImageBox ref={swiperRef} style={style}>
            {
              imgs.map((img, idx) => 
              <img key={idx} src={img} alt="banner-img" className={idx === currentImgIndex ? "show-banner" : ""} />)
            }
          </SlideImageBox>
          <ArrowBox className="arrow-back">
            <ArrowBackIosRoundedIcon className="arrow-icon" />
          </ArrowBox>
          <ArrowBox className="arrow-forward">
            <ArrowForwardIosRoundedIcon className="arrow-icon" />
          </ArrowBox>
      </MainBannerImageBox>
    </MainBannerBox>
  );
}

export default MainBanner;