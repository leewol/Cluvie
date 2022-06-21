import React from "react";
import { Button, Dialog, DialogTitle, DialogActions } from "@mui/material";
import JoinButton from "./ClubJoinDialogStyle";

type ClubJoinDialogProps = {
  openJoin: boolean,
  handleToggleJoin: React.MouseEventHandler<HTMLButtonElement>,
};

function ClubJoinDialog({ openJoin, handleToggleJoin }: ClubJoinDialogProps) {
  return (
    <Dialog
      open={openJoin}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>신청하시겠습니까?</DialogTitle>
      <DialogActions>
        <Button color='inherit' onClick={handleToggleJoin}>
          취소하기
        </Button>
        <JoinButton color='inherit' onClick={handleToggleJoin} autoFocus>
          신청하기
        </JoinButton>
      </DialogActions>
    </Dialog>
  );
}

export default ClubJoinDialog;
