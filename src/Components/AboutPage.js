import { Box, Typography } from '@mui/material'
import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <Box position={'sticky'} sx={{ width: '100%' }} textAlign={'center'}>
                <Typography variant='h3' bgcolor='#ff8080' gutterBottom >
                    OM OSS
                </Typography>
                <br/>
                <br/>
                <Typography variant='body1' color={'primary'}
                    textAlign={'left'} marginLeft='20.5%' marginRight='20%' gutterBottom>
                    <b>
                        Föreningen Teater i Huskvarna bildades den 14 juni 1993
                        och syftar till att främja ett allsidigt teaterliv i Huskvarna.
                    </b>
                </Typography>
                <Typography  variant='body2'
                    textAlign={'left'} marginLeft='20.5%' marginRight='20%' gutterBottom>
                    Föreningen arbetar för att erbjuda teater och andra kulturevenemang i Huskvarna.
                    Här finns utmärkta lokaler för både vinter- och sommarteater.
                    Vi arrangerar också teater på gator och torg för att nå ut till fler människor.
                    Vår ambition är att även få igång bra teateraktivitet för Huskvarnas ungdomar.
                    <br/>
                    <br/>
                    Föreningen har över 300 medlemmar och vi vill bli ännu fler.
                    Särskilt gärna vill vi få med fler unga människor,
                    som kan och vill påverka föreningens arbete.
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <b>Vad gör föreningen?</b>
                    <br/>
                    För att främja ett aktivt teaterliv i Huskvarna är föreningen aktiv på olika sätt:
                    <br/>
                    <br/>
                    <b>- Teaterarrangemang:</b> Alf Henrikssons historiska skådespel Bara Tusen Korta 
                    År var en viktig anledning till att föreningen bildades 1993. De senaste åren har 
                    Raskens av Vilhelm Moberg samt sommarlustspel och farser arrangerats i Huskvarna 
                    Folkets Park i samarbete med Vulkanteatern. Alla arrangemang har varit välbesökta. 
                    Tillsammans med Revysmedjan - Huskvarnarevy på Huskvarna Teater.
                    <br/>
                    <br/>
                    <b>- Kaffe mé drömmar:</b> På Huskvarna bibliotek anordnas regelbundet kulturprogram 
                    med varierande innehåll. Kaffe mé drömmar har framförts på Huskvarna Bibliotek sedan 1994.
                    <br/>
                    <br/>
                    <b>- Teaterresor:</b> Föreningens medlemmar erbjuds möjlighet att under trivsamma 
                    former och till fördelaktigt pris besöka teaterföreställningar på andra orter i landet.
                    <br/>
                    <br/>
                    <b>- Luddepriset:</b> För att uppmärksamma och uppmuntra betydande kulturgärningar i 
                    kommunen har föreningen instiftat Luddepriset. Ludde är den evige Huskvarnabon som 
                    figurerar i skådespelet Bara Tusen Korta År.
                    <br/>
                    <br/>
                    <b>- Information och opinion:</b> Föreningen Teater i Huskvarna är aktiv i frågor som 
                    rör kultur och då främst teater i Huskvarna. Det kan gälla anpassning och utnyttjande 
                    av Huskvarna Teater, Kulturskolans utveckling i Huskvarna, Alfred Dalinskolans 
                    kulturprofil etc. Vi sprider information om olika kulturarrangemang och vill i alla 
                    avseenden uppträda som goda kulturambassadörer.
                </Typography>
            </Box>
        </div>
    )
}

export default AboutPage