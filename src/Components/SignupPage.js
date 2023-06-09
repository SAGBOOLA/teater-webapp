import { Box, Typography } from '@mui/material'
import React from 'react'

const SignupPage = () => {
    return (
        <div>
            <Box position={'sticky'} sx={{ width: '100%' }} textAlign={'center'}>
                <Typography variant='h3' bgcolor='#ff8080' gutterBottom >
                    BLI MEDLEM
                </Typography>
                <br />
                <br />
                <Typography variant='body2'
                    textAlign={'left'} marginLeft='20.5%' marginRight='20%' gutterBottom>
                    <h3>Teater i Huskvarna!</h3>
                    <p>Som medlem ger du ett viktigt stöd till teaterverksamheten.</p>
                    <li>Du ger som medlem ett viktigt stöd till teaterverksamheten, Huskvarna.</li>
                    <li>Du får regelbunden information om intressanta kulturaktiviteter.</li>
                    <li>Dessutom får du särskilda medlemsförmåner som t ex fribiljetter
                        till genrep, rabatterade  teaterresor, sista minuten-erbjudanden
                        från samarbetspartners.
                    </li>
                    <br />
                    <br />
                    <h3>Är du intresserad av att vara aktiv i vår förening?</h3>
                    Vi behöver dig som har kreativa idéer om spännande verksamheter, stort kontaktnär
                    och som även operativt kan tänka sig att jobba i olika arbetsgrupper inom teater
                    och kultur, men också kring teknik, marknadsföring, kaffeservering med mera.
                    <br />
                    Vi behöver också fylla på personer till viktiga demokratiska poster som
                    styrelseledamöter, revisorer och då behövs personer till valberedningen.
                    <br />
                    Hör gärna av dig till <a href='mailto: info@teaterihuskvarna.se'>info@teaterihuskvarna.se</a>
                    <br />
                    <br />
                    Marianne Ericsson
                    <br />
                    Ordförande Föreningen Teater i Huskvarna
                    <br />
                    <br />
                    <h3>Hur blir du medlem?</h3>
                    Du kan anmäla dig per post eller e-post till:
                    <br />
                    <br />
                    Elsie Andersson
                    <br/>
                    Storgatan 32 A
                    <br/>
                    561 42 Huskvarna
                    <br/>
                    <br/>
                    E-post: <a href='mailto: medlemmar@teaterihuskvarna.se'>medlemmar@teaterihuskvarna.se</a>
                    <br/>
                    Uppge namn, adress, telefon och ev. e-post vid anmälan. Om e-postadress uppges kan du nås 
                    av snabba medlemserbjudande.
                    <br/>
                    <br/>
                    <h3>Årsavgiften</h3>
                    För medlemskap i Föreningen Teater i Huskvarna är 50 kr/år för enskild medlem och 100 kr/år 
                    för familj. Om du anmäler hela eller delar av din familj, <b>glöm inte att uppge namn på alla 
                    familjemedlemmar!</b>
                    <br/>
                    <br/>
                    <b>Föreningens Bankgiro: 817-5531</b>
                </Typography>
            </Box>
        </div>
    )
}

export default SignupPage