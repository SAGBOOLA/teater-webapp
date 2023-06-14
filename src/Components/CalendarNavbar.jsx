import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { blueGrey } from "@mui/material/colors";
import NotificationsIcon from "@mui/icons-material/Notifications";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#b90e0a",
  color: "#fff",
});

const Icons = styled("Box")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const CalendarNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <CustomToolbar>
        <Box
          component="img"
          sx={{ height: 50, marginRight: 4 }}
          alt="logo"
          src="photos/logo1.png"
        />
        <Typography variant="h6">Calendar</Typography>
        <Icons>
          <Avatar
            sx={{ bgcolor: blueGrey[900], width: 35, height: 35 }}
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
            }}
          >
            M
          </Avatar>
        </Icons>
      </CustomToolbar>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
export default CalendarNavbar;
