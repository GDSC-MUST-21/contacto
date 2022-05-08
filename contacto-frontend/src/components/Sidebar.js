import { Avatar, Grid, Typography } from "@mui/material";
import avatar from "../assests/avatar.png";

export default function Sidebar() {
    return (
        <Grid container  sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(236, 179, 101)',
            padding: '1.5rem',
        }}>
            <Grid item xs>
                <Avatar
                    alt="Remy Sharp"
                    src={avatar}
                    sx={{ width: 176, height: 176 }}
                />
                <Typography variant="h6">Name:</Typography>
            </Grid>
            <Grid container sx={{
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '1rem'
            }}>
                <Grid item xs={12} sx={{padding: '1rem'}}>
                <Typography variant="body1">Country:</Typography>
                </Grid>
                <Grid item xs={12} sx={{padding: '1rem'}}>
                <Typography variant="body1">Description:</Typography>
                </Grid>
            </Grid>

        </Grid>

    )
}