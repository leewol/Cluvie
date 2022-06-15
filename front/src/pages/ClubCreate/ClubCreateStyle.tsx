import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import ReactQuill from "react-quill";

export const WholeBox = styled(Box)`
  position: relative;
  margin: 80px auto 0 auto;
  max-width: 1160px;
`;

export const Title = styled.div`
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 60px;
`;

export const ClubReactQuill =
  styled(ReactQuill) <
  { duplicated: number } >
  `
  .ql-editor {
    min-height: 500px;
  }
  .ql-toolbar:first-of-type {
    display: ${(props) => (props.duplicated ? "none" : "block")};
  }
`;

export const ButtonBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 0 85%;
`;

export const MyButton1 = styled(Button)`
  width: 50%;
  margin: 0 2% 0 2%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
`;

export const MyButton2 = styled(Button)`
  width: 50%;
  margin: 0 2% 0 2%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
`;
