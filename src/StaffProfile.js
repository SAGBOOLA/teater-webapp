import React from "react";

import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import { Box, Stack } from "@mui/material";
import Footer from "./Components/Footer";
import ProfileNavBar from "./Components/ProfileNavBar";
import StaffSidebar from "./Components/StaffSidebar";

const StaffProfile = () => {
  return (
    <Box>
      <ProfileNavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <StaffSidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Footer />
    </Box>
  );
};

export default StaffProfile;
