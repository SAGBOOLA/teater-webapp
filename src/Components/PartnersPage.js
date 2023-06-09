import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PartnersPage = () => {
    return (
        <div>
            <Box position={'sticky'} sx={{ width: '100%' }} textAlign={'center'}>
                <Typography variant='h3' bgcolor='#ff8080' gutterBottom >
                    SAMARBETSPARTNERS
                </Typography>
                <br/>
                <br/>
                <Typography variant='body2'
                    textAlign={'left'} marginLeft='20.5%' marginRight='20%' gutterBottom>
                    <b>Vulkanteatern</b> och Föreningen Teater i Huskvarna har under samarbetsprojektet 
                    ”Teater i Parken” framfört ett flertal sommarlustspel och familjeteater 
                    i Huskvarna Folkets Park, teaterföreställningen Raskens på Huskvarna Teater. 
                    Under flera år har spelats sommarfarser. Det senaste året har återigen ett 
                    sommarlustspel framförts i Huskvarna Folkets Park. <Link to={'http://www.vulkanteatern.se/'} activeStyle={{ color: 'red' }}>www.vulkanteatern.se</Link>
                    <br/>
                    <br/>
                    <b>Revysmedjan</b> (före detta Landstingsrevyn) och Föreningen Teater i Huskvarna har 
                    under våren 2013 startat ett samarbete för att sätta upp Huskvarnarevyn på Huskvarna 
                    Teater i oktober månad 2013. <Link to={'http://www.revysmedjan.se/'} activeStyle={{ color: 'red' }}>www.huskvarnarevyn.se</Link>
                    <br />
                    <br/>
                    <b>Kulturskolan</b> är en ständig samarbetspartner.
                    <br />
                    <br />
                    Föreningen har ett mycket bra samarbete med flera olika förvaltningar inom Jönköpings 
                    kommun, i synnerhet med kulturförvaltningen. <Link to={'https://www.jonkoping.se/kultur'} activeStyle={{ color: 'red' }}>www.jonkoping.se/kultur</Link>
                    <br />
                    <br />
                    Föreningen Teater i Huskvarna har ett speciellt förhållande till författaren <b>Alf Henrikson</b>. 
                    Den avgörande orsaken till föreningens bildande var att Alf Henriksson hade skrivit skådespelet om 
                    Huskvarnas historia, Bara tusen korta år, vilket skulle komma att uppföras i Huskvarna Folkets Park 
                    år 1994. Alf Henriksonsällskapet bildades i Huskvarna Folkets Park i samband med föreställningen av 
                    Bara tusen korta år den 23 juni 1996. <Link to={'https://alfhenrikson.se/'} activeStyle={{ color: 'red' }}>www.alfhenrikson.se</Link>
                    <br />
                    <br />
                    <b>Musik- och Teater Vänner</b> och Föreningen Teater i Huskvarna samarbetar med Barn- och familjeteater 
                    som ges varje vår och höst i Missionskyrkan i Huskvarna. 
                    <br />
                    <br />
                    <b>Smålands Musik & Teater</b> ... <Link to={'https://kulturhusetspira.se/'} activeStyle={{ color: 'red' }}>www.smot.se</Link>
                    <br />
                </Typography>
            </Box>
        </div>
    )
}

export default PartnersPage