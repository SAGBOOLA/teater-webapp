import React from 'react';
import StaffSidebar from './components/StaffSidebar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import { Box, Stack } from '@mui/material';
import Footer from './Components/Footer';
import ProfileNavBar from './Components/ProfileNavBar';

const StaffProfile = () => {
    return (
        <Box>
            <ProfileNavBar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <StaffSidebar />
            <Feed />
            <Rightbar />
            </Stack>
            <Footer/>
        </Box>
    );
};

export default StaffProfile;