import * as React from "react";
import { Box, Popper, IconButton, Button } from "@mui/material";
import styled from "@emotion/styled";
import SettingsIcon from "@mui/icons-material/Settings";

const SettingButton = styled(Button)`
  color: black;
`;

export default function SimplePopper() {
  // prettier-ignore
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <SettingsIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl} placement='bottom-end'>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          <div>
            <SettingButton>수정</SettingButton>
          </div>
          <div>
            <SettingButton>삭제</SettingButton>
          </div>
        </Box>
      </Popper>
    </div>
  );
}
