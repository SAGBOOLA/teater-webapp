import React from 'react';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import { Box, Stack } from '@mui/material';
import Footer from './Components/Footer';
import ProfileNavBar from './Components/ProfileNavBar';




const MemberProfile = () => {
    return (
        <Box>
            <ProfileNavBar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar/>
            <Feed />
            <Rightbar />
            </Stack>
        </Box>
    );
};

export default MemberProfile;