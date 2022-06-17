import styled from "@emotion/styled/macro";

// import { StyledInput } from "@/styles/containers";

const ClubCreateFormBox = styled.form`
  width: 100%;
  display: flex;
  // justify-content: space-between;
`;

const ThumnailBox = styled.div`
  width: 400px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Line = styled.hr`
  width: 1;
  height: 500px;
  opacity: 0.2;
`;

export { ClubCreateFormBox, ThumnailBox, Line };
