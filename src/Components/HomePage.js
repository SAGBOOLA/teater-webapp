import { Box, Card, Grid, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
    return (
        <div>
            <Box position={'sticky'} sx={{ width: '100%' }} textAlign={'center'} >
                <Typography variant='h3' bgcolor='#ff8080' gutterBottom >
                    VÄLKOMMEN TILL TEATER I HUSKVARNA
                </Typography>
                <Typography position='static' variant='h4' color={'primary'} align='left' marginLeft='10%' gutterBottom>SOMMAR 2023</Typography>
                <Typography position='static' variant='subtitle2' fontSize='150%' color={'primary'} gutterBottom>KULTUR PÅ GÅNG</Typography>
                <Typography position='static' variant='body2' textAlign={'left'} marginLeft='9.5%' marginRight='40%' gutterBottom >
                    <b>LUDDEPRISTAGARNA 2022</b>
                    <br/>
                    Styrelsen har beslutat att tilldela
                    Luddepriset för 2022 till Cilla Strandsäter,
                    producent Revysmedjan/Huskvarna
                    revyn och Ungdomsludde till barngrupperna som medverkade i En Julsaga.
                    <br/>
                    <br/>
                    <b>Motiveringen till båda priserna är att</b>
                    <br />
                    ”Vi vill uppmärksamma de föreningar vi har samarbetat med under hösten 2022
                    för deras fantastiska kulturinsatser, som resulterat i stor inlevelse,
                    upplevelse och glädje för alla åldrar.”
                    <br/>
                    <br/>
                    <br/>
                    <b>GRABBARNA I 57:AN</b>
                    <br/>
                    I juni kommer det bli sommarteater i Huskvarna Fokets Park igen!
                    <br />
                    Vi kommer hjälpa till med servering, men för att det ska gå ihop sig behöver
                    vi fler händer och fötter. Hör av dig till styrlesen om ni kan.
                </Typography>

            </Box>
            <Box marginLeft='40.6em'>
                <img src='/masks.png' alt='mask' />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }} position='sticky' marginLeft={'5.6em'}>
                <ImageList sx={{ width: 700, height: 700, alignContent: 'center' }} cols={3} gap={9}>
                    <ImageListItem>
                        <img src='/teater.png'
                            alt='pic1' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='/teater2.jpeg'
                            alt='pic2' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='/teater3.jpeg'
                            alt='pic3' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='/teater4.jpeg'
                            alt='pic4' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='/teater5.jpeg'
                            alt='pic5' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='/teater6.jpeg'
                            alt='pic6' />
                    </ImageListItem>
                </ImageList>
            </Box>
        </div>
    )
}

export default HomePage