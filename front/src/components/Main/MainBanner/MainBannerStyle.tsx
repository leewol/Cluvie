import styled from "@emotion/styled/macro";

const MainBannerBox = styled.div`
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
  width: 400px;
  height: 300px;
  background-color: white;
  border-radius: 40px;
  position: relative;
`;

export { MainBannerBox, MainTextBox, MainBannerImageBox };