import * as React from "react";
import { Button, Modal, Box, Typography, Rating } from "@mui/material";
import styled from "@emotion/styled";

const ReviewButton = styled(Button)`
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: black;
  background-color: rgba(0, 0, 0, 0.03);
`;

const ReviewBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
`;

function ClubReviewButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ReviewButton onClick={handleOpen}>참여 후기 작성</ReviewButton>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <ReviewBox>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            참여 후기 작성하기
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            클럽에 대한 별점을 매겨주세요
          </Typography>
          <Rating
            name='half-rating'
            defaultValue={0}
            precision={0.5}
            onChange={(event, newValue) => console.log(newValue)}
          />
          <Button color='inherit'>제출</Button>
          <Button color='inherit' onClick={handleClose}>
            취소
          </Button>
        </ReviewBox>
      </Modal>
    </div>
  );
}

export default ClubReviewButton;
