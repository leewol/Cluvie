import styled from "@emotion/styled/macro";

// import { StyledInput } from "@/styles/containers";
import { StyledSpan } from "@/styles/text";

const ClubCreateFormBox = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ThumnailBox = styled.div`
  width: 100%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export { ClubCreateFormBox, ThumnailBox };
