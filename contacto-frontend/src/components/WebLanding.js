import webdev from '../assests/webdev.svg';
// import Category from "./Category";
import "@fontsource/montserrat";
import { Grid, Typography } from "@mui/material";
import Cards from './Cards';


export default function WebLanding() {
    return (
        <Grid container>
            <Grid container className="web-dev-hero" sx={{padding: '5rem'}}>
                <Grid item xs={12} sm={6} sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant='h1' style={{ fontFamily: "montserrat", fontWeight: '600', textAlign: 'left' }}>Web developer
                        <span>
                            <Typography variant='h4' style={{ fontWeight: '400', fontFamily: "montserrat" }}>Frontend|Backend|Fullstack</Typography>
                        </span>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={webdev} alt='web-dev' style={{width: '32rem',}}/>
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