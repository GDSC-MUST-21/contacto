import softwaredev from '../assests/softwaredev.svg';
// import Category from "./Category";
import "@fontsource/montserrat";
import { Grid, Typography } from "@mui/material";
import Cards from './Cards';

export default function SoftwareDevLanding() {
    return (
        <Grid container>
            <Grid container className="web-dev-hero" sx={{padding: '5rem'}}>
                <Grid item xs={12} sm={6} sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant='h2' style={{ fontSize: '4rem', fontFamily: "montserrat", fontWeight: '600' }}>Software developer
                        <span>
                            <Typography variant='h5' style={{ fontSize: '2rem', fontWeight: '400', fontFamily: "montserrat" }}>Python|Java|C++</Typography>
                        </span>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={softwaredev} style={{width: '35rem',}} alt="software-dev-illustration"/>
                </Grid>
            </Grid>

            <Grid container className="web-gigs" style={{
                backgroundColor: "#00303F",
                padding: '2rem',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                    <Grid item xs={12} lg={4} md={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={12} lg={4} md={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={12} lg={4} md={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={12} lg={4} md={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={12} lg={4} md={6}>
                        <Cards />
                    </Grid>
                    <Grid item xs={12} lg={4} md={6}>
                        <Cards />
                    </Grid>
            </Grid>
        </Grid>
    )
}