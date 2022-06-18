import styled from "@emotion/styled/macro";

import { StyledInput, inputBase } from "@/styles/containers";

const ClubCreateFormBox = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const FormBox = styled.div`
  width: 500px;
  height: 600px;
  img {
    margin-bottom: 60px;
  }
`;

const InputBox = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const HeadCountInput = styled(StyledInput)`
  width: 20%;
  margin-right: 10px;
`;

const MeetingInputBox = styled.div`
  display: flex;
  span {
    margin: 0 10px 0 5px;
  }
`;

const Line = styled.hr`
  width: 1;
  height: 600px;
  opacity: 0.2;
`;

const StyledSelect = styled.select`
  ${inputBase}
  font-size: 16px;
`;

export {
  ClubCreateFormBox,
  FormBox,
  InputBox,
  HeadCountInput,
  MeetingInputBox,
  Line,
  StyledSelect,
};
