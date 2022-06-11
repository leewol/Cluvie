import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const ChatButton = styled(Button)`
  position: fixed;
  right: 50px;
  bottom: 30px;
  z-index: 1100;
  border-radius: 50%;
  background-color: #ffc300;
  width: 70px;
  height: 70px;
  &:hover {
    background-color: #716847;
  }
`;

const MyChatIcon = styled(ChatIcon)`
  font-size: 40px;
  color: white;
`;

function ClubChatButton() {
  return (
    <div>
      <ChatButton color='inherit'>
        <MyChatIcon />
      </ChatButton>
    </div>
  );
}

export default ClubChatButton;
