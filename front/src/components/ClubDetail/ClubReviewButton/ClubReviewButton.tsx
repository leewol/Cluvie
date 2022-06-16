import * as React from "react";
import { Button, Modal, Rating } from "@mui/material";
import * as Style from "./ClubReviewButtonStyle";

function ClubReviewButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Style.ReviewButton color='inherit' onClick={handleOpen}>
        참여 후기 작성
      </Style.ReviewButton>
      <Modal
        open={open}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Style.ReviewBox>
          <div className='rating'>
            <div>클럽에 대한 별점을 매겨주세요</div>
            <div>
              <Rating
                name='half-rating'
                defaultValue={0}
                precision={0.5}
                onChange={(event, newValue) => console.log(newValue)}
              />
            </div>
          </div>
          <div>
            <textarea
              className='review-textarea'
              defaultValue='참여 후기를 작성해주세요'
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void =>
                console.log(event.target.value)
              }
            />
          </div>
          <div>
            <Button color='inherit'>제출</Button>
            <Button color='inherit' onClick={handleClose}>
              취소
            </Button>
          </div>
        </Style.ReviewBox>
      </Modal>
    </div>
  );
}

export default ClubReviewButton;
