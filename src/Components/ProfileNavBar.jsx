import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { blueGrey } from "@mui/material/colors";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  backgroundColor: "#b90e0a",
  color: "#fff",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: "3px",
  width: "60%",
  margin: "0 200px",
}));

const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const ProfileNavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [open, setOpen] = useState(false);

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
        <Typography
          variant="h6"
          sx={{ display: { xs: "none", sm: "block" }, marginLeft: 0 }}
        >
          Medlem
        </Typography>
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={2}>
            <NotificationsIcon />
          </Badge>
          <Avatar
            sx={{ bgcolor: blueGrey[900], width: 35, height: 35 }}
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
            }}
          >
            M
          </Avatar>
        </Icons>
        <UserBox
          onClick={(e) => {
            setOpen(true);
          }}
        >
          <Avatar sx={{ bgcolor: blueGrey[900], width: 35, height: 35 }}>
            M
          </Avatar>
          <Typography variant="span">Medlem</Typography>
        </UserBox>
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

export default ProfileNavBar;
