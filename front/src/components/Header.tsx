import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function MenuAppBar() {
  // prettier-ignore
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        sx={{ boxShadow: "none", backgroundColor: "rgba(255,255,255,0.8)" }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ marginLeft: "1%" }}
          >
            <Link
              to='/'
              style={{
                fontSize: "30px",
                color: "#ffc300",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              CLUVIE
            </Link>
          </IconButton>
          <div
            style={{
              fontSize: "16px",
              marginLeft: "2%",
              width: "84%",
            }}
          >
            <Button sx={{ color: "rgba(0,0,0,0.8)", fontWeight: "550" }}>
              모든 클럽 보기
            </Button>
          </div>
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle sx={{ color: "#716847", fontSize: "34px" }} />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              keepMounted
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>내 클럽리스트</MenuItem>
              <MenuItem onClick={handleClose}>마이페이지</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
