import { Grid, Typography } from "@mui/material";
import footerLogo from "../assests/logo-footer.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <footer id="footer-home">
        <Grid container sx={{backgroundColor: '#889AA3'}}>
            <Grid item xs>
                <img src={footerLogo} width='200rem' sx={{borderRadius: '100%'}} alt='footer-logo' />
            </Grid>
            <Grid item xs >
                    <Typography p={4} variant="h4">Follow Us</Typography>
                    <GitHubIcon fontSize="large" sx={{padding: '1rem'}} />
                    <TwitterIcon fontSize="large" sx={{padding: '1rem'}} />
                    <InstagramIcon fontSize="large" sx={{padding: '1rem'}} />
                    <LinkedInIcon fontSize="large" sx={{padding: '1rem'}} />
            </Grid>
                <Grid item xs textAlign='left'>
                    <Typography p={4} variant="h4">Contact Us</Typography>
                    <Typography px={4} py={2} variant="h6">contacto423@gmail.com</Typography>
                    <Typography px={4} variant="h6">+9182843434</Typography>
            </Grid>
        </Grid>
    </footer>
)
}