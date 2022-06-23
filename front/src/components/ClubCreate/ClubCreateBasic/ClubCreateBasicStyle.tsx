import styled from "@emotion/styled/macro";

import { StyledInput, inputBase } from "@/styles/containers";
import { StyledSpan } from "@/styles/text";

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

const HashtagsBox = styled.div`
  margin-top: 10px;
`;

const HashtagNotice = styled.span`
  color: #716847;
  font-size: 12px;
  margin-left: 10px;
`;

const HashtagSpan = styled(StyledSpan)`
  background-color: #716847;
  border: 5px solid #716847;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

export {
  ClubCreateFormBox,
  FormBox,
  InputBox,
  HeadCountInput,
  MeetingInputBox,
  Line,
  StyledSelect,
  HashtagsBox,
  HashtagNotice,
  HashtagSpan,
};
