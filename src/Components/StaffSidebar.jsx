import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/Inbox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";

const StaffSidebar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [member, setMember] = useState([]);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = () => {
    const newMember = {
      firstName,
      lastName,
      email,
      mobileNo,
      address,
      city,
      zipCode,
    };

    setFirstName("");
    setLastName("");
    setEmail("");
    setMobileNo("");
    setAddress("");
    setMember([...member, newMember]);
    setIsSubmitted(true);
    setIsFormOpen(false);
  };

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="HomePage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#inbox">
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" to="/Calendar">
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
      <Stack direction="column" spacing={3}>
        <Button
          variant="primary"
          onClick={handleFormOpen}
          sx={{
            bgcolor: "#ECF0F1",
            color: " #b90e0a",
            "&:hover": {
              backgroundColor: "#b90e0a",
              color: "#ffffff",
            },
          }}
          startIcon={<PersonAddIcon />}
        >
          Add Member
        </Button>
        {isFormOpen && !isSubmitted && (
          <Dialog
            open={isFormOpen}
            onClose={handleFormClose}
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
              width: "500px",
            }}
          >
            <DialogTitle>Add Member</DialogTitle>
            <DialogContent>
              <TextField
                label="FirstName :"
                variant="outlined"
                margin="normal"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                sx={{ width: "100%" }}
              />
              <TextField
                label="LastName :"
                variant="outlined"
                margin="normal"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                sx={{ width: "100%" }}
              />
              <TextField
                label="Email :"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: "100%" }}
              />
              <TextField
                label="Mobile no:"
                variant="outlined"
                margin="normal"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                sx={{ width: "100%" }}
              />
              <TextField
                label="Address :"
                variant="outlined"
                margin="normal"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{ width: "100%" }}
              />
              <TextField
                label="City :"
                variant="outlined"
                margin="normal"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{ width: "100%" }}
              />
              <TextField
                label="ZipCode:"
                variant="outlined"
                margin="normal"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                sx={{ width: "100%" }}
              />
              <DialogActions sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleFormSubmit}
                >
                  Register
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        )}
        {isSubmitted && (
          <div>
            <Typography variant="h6" align="center" gutterBottom>
              Member successfully created!
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                setIsFormOpen(false);
                setIsSubmitted(false);
              }}
            ></Button>
          </div>
        )}

        <Button
          variant="primary"
          sx={{
            bgcolor: "#ECF0F1",
            color: " #b90e0a",

            "&:hover": {
              backgroundColor: "#b90e0a",
              color: "#ffffff",
            },
          }}
          startIcon={<PersonRemoveAlt1Icon />}
        >
          Remove Member
        </Button>
      </Stack>
    </Box>
  );
};

export default StaffSidebar;
