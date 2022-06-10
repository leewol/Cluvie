import * as React from "react";
import { Box, Popper, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SimplePopper() {
  // prettier-ignore
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    console.log(event);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <SettingsIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          The content of the Popper.
        </Box>
      </Popper>
    </div>
  );
}
