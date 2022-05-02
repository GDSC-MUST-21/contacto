import { Grid, Typography } from "@mui/material";
import web from '../assests/globe-solid.png';
import software from '../assests/computer-solid.png';
import database from '../assests/database-solid.png';
import gameDev from '../assests/gamepad-solid.png';
import ux from '../assests/compass-drafting-solid.png';
import dataScience from '../assests/gears-solid.png';
import mobileDev from '../assests/mobile-screen-solid.png';
import cyber from '../assests/shield-halved-solid.png';
import devOps from '../assests/code-solid.png';
import wordpress from '../assests/wordpress-brands.png';
import testing from '../assests/screwdriver-wrench-solid.png';
import data from '../assests/chart-line-solid.png';

export default function ServicesHome() {
    return (
        <Grid id='services' container p={4} sx={{backgroundColor: '#041C32', color: 'white'}}>
            <Grid item xs={12}>
                <Typography p={5} variant="h2" color='white'>Our Services</Typography>
            </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={web} width='70rem' alt='web-service' />
            <Typography variant="h6">Web Development</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={software} width='70rem' alt='web-service' />
            <Typography variant="h6">Software Development</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={database} width='70rem' alt='web-service' />
            <Typography variant="h6">Database Design</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={gameDev} width='70rem' alt='web-service' />
            <Typography variant="h6">Game Development</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={ux} width='70rem' alt='web-service' />
            <Typography variant="h6">UI/UX</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={dataScience} width='70rem' alt='web-service' />
            <Typography variant="h6">Data Science</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={mobileDev} width='70rem' alt='web-service' />
            <Typography variant="h6">Mobile App Development</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={cyber} width='70rem' alt='web-service' />
            <Typography variant="h6">Cyber Security</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={devOps} width='70rem' alt='web-service' />
            <Typography variant="h6">DevOps</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={wordpress} width='70rem' alt='web-service' />
            <Typography variant="h6">Wordpress Developer</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={testing} width='70rem' alt='web-service' />
            <Typography variant="h6">User Testing</Typography>
        </Grid>
        <Grid item xs={4} md={2} p={5}>
            <img src={data} width='70rem' alt='web-service' />
            <Typography variant="h6">Data Analytics</Typography>
        </Grid>
    </Grid>

    )
}