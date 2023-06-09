import { Menu } from '@mui/icons-material'
import { Box, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const Pages = ['Hem', 'Om Oss', 'Samarbetspartners', 'Bli Medlem', 'Logga In'];

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List value={value} onChange={handleChange}>
                    {
                        Pages.map((page, index) => (
                            <ListItemButton key={index} component='a' href={`/${page}`}>
                                <ListItemIcon>
                                    <ListItemText color='primary' >{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }

                </List>
            </Drawer>
            <IconButton sx={{ color: 'white', marginLeft: 'auto' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
            </IconButton>
        </Box>
    )
}

export default DrawerComp;