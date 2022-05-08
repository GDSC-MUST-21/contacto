import { Grid, Typography } from "@mui/material";
import bgImage from '../assests/hero-section2.png'

export default function Hero() {
    return (
        <Grid container sx={{
            backgroundColor: '#FBEB93',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '1px',
            }}>
            <Grid item xs={10} sm={6} p={5} sx={{color: '#041C32', paddingTop: '2rem', textAlign: 'left'}}>
                <Typography variant="h2" px={3} sx={{fontSize: '4.3rem'}}>Connect <span style={{color: '#fb934c'}}>Create</span> Sell</Typography>
                <Typography variant="h6" px={4}><b>Find the perfect <em>freelance</em> services for your business</b></Typography>
            </Grid>
            <Grid item xs={10} sm={5}>
                <img src={bgImage} width='450rem' height='400rem' alt='hero-background' />
            </Grid>
        </Grid>
    )
}