import React from "react";
import styled from "@emotion/styled";
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";

const JoinButton = styled(Button)`
  color: #ffc300;
`;

type ClubJoinDialogProps = {
  openJoin: boolean,
  handleCloseJoin: React.MouseEventHandler<HTMLButtonElement>,
};

function ClubJoinDialog({ openJoin, handleCloseJoin }: ClubJoinDialogProps) {
  return (
    <Dialog
      open={openJoin}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>신청하시겠습니까?</DialogTitle>
      <DialogActions>
        <Button color='inherit' onClick={handleCloseJoin}>
          취소하기
        </Button>
        <JoinButton onClick={handleCloseJoin} autoFocus>
          신청하기
        </JoinButton>
      </DialogActions>
    </Dialog>
  );
}

export default ClubJoinDialog;
