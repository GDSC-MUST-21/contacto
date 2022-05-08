import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import profileImage from '../assests/create profile-how it works.jpg'

export default function Working() {
    return (
        <Grid id='working' container p={4} sx={{
            backgroundColor: '#04293A',
            color: 'white'
        }}>
            <Grid item xs={12}>
                <Typography p={4} variant="h2">How It Works</Typography>
            </Grid>

            <Grid container p={5} sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Grid item xs>
                    <Card sx={{ maxWidth: '16rem', paddingBottom: '2rem' }}>
                        <CardMedia
                            component="img"
                            alt="create your profile"
                            image={profileImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" fontWeight='bold'>
                                Create Your Profile
                            </Typography>
                            <Typography variant="subtitle" color="black">
                            Create a profile by signing up from home page or category page.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: '16rem', paddingBottom: '2rem' }}>
                        <CardMedia
                            component="img"
                            alt="create your profile"
                            image={profileImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" fontWeight='bold'>
                            Create Gig
                            </Typography>
                            <Typography variant="subtitle" color="black">
                            After creating your profile, create your gig by clicking on Create your gig button.                      
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: '16rem', paddingBottom: '2rem' }}>
                        <CardMedia
                            component="img"
                            alt="create your profile"
                            image={profileImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" fontWeight='bold'>
                                Find Work
                            </Typography>
                            <Typography variant="subtitle" color="black">
                                According to the gig you created, people may approach you for work.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card sx={{ maxWidth: '16rem', paddingBottom: '2rem' }}>
                        <CardMedia
                            component="img"
                            alt="create your profile"
                            image={profileImage}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div" fontWeight='bold'>
                                Build Connections
                            </Typography>
                            <Typography variant="subtitle" color="black">
                                Perform freelancing and build connections with people around the world.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </Grid>
    )
}