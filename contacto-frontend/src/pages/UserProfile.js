import { Grid } from "@mui/material";
import ProfileNav from "../components/ProfileNav";
import ProfileAccordion from "../components/ProfileAccordion";
import Cards from "../components/Cards";
import Sidebar from "../components/Sidebar";

export default function UserProfile() {
    return (
        <Grid container id='user-profile'>
            <ProfileNav />
            <Grid container sx={{ padding: '1rem' }}>
                <Grid item xs={12} md={4}>
                    <Sidebar />
                </Grid>
                <Grid item xs={12} md={4} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <ProfileAccordion />
                </Grid>
                <Grid item xs={12} md={4} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Cards />
                </Grid>
            </Grid>
        </Grid>
    )
}