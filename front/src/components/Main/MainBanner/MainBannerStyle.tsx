import styled from "@emotion/styled/macro";

import { StyledSpan } from "@/styles/text";

const MainBannerBox = styled.div`
  overflow: hidden;
  background-color: #716847;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MainTextBox = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 42px;
    font-weight: 300;
    line-height: 1.0;
    span {
      font-weight: 600;
    }
  }
`;

const MainBannerImageBox = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  border-radius: 30px;
  .arrow-back {
    left: -20px;
  }
  .arrow-forward {
    right: -20px;
  }
`;

const SlideImageBox = styled.div`
  display: flex;
  width: 1200px;
  transition: all 0.4s ease-in-out;
  img {
    width: 400px;
    height: 300px;
    border-radius: 30px;
    opacity: 0;
    transition: all 0s linear;
  }
  .show-banner {
    opacity: 1;
  }
`;

const MainStyledSpan = styled(StyledSpan)`
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

const StyledSpanBox = styled.div`
  margin-top: 20px;
`;

const ArrowBox = styled.div`
  position: absolute;
  top: 45%;
  background-color: white;
  opacity: 0.7;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  .arrow-icon {
    cursor: pointer;
    font-size: 24px;
  }
`;

export { MainBannerBox, MainTextBox, MainBannerImageBox, SlideImageBox,  MainStyledSpan, StyledSpanBox, ArrowBox };