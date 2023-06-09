import { AppBar, Box, Tab, Tabs, Toolbar, styled, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import DrawerComp from './DrawerComp';
import { Link } from 'react-router-dom';


const StyleToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});



const Pages = ['Hem', 'Om Oss', 'Samarbetspartners', 'Bli Medlem', 'Logga In'];

const Navbar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <AppBar position='sticky'>
                <StyleToolbar>
                    <Box component='img' sx={{ height: 50 }} alt='logo' src='/second_logo.png' />
                    {
                        isMatch ? (
                            <>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                                <Tabs sx={{ marginLeft: 'auto' }} textColor='inherit' value={value} onChange={handleChange} indicatorColor='secondary'>
                                    {
                                        Pages.map((page, index) => (
                                            <Tab key={index} label={page} component={Link} to={`/${page}`} />
                                        ))
                                    }
                                </Tabs>
                            </>
                        )
                    }
                </StyleToolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;