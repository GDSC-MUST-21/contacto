import image from "../assests/download.jpg";
import avatar from "../assests/avatar.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import StarIcon from '@mui/icons-material/Star';

export default function Cards() {
    return (
        // <Card className="m-3">
        //     <Card.Img variant="top" src={image} />
        //     <Card.Body>
        //         <Card.Title>I will design, redesign professional modern website</Card.Title>
        //         <br />
        //         <Container>
        //             <Row className="mb-4">
        //                 <Col xs={8} className="d-flex justify-content-start">
        //                     <Image roundedCircle="true" src={avatar} width="40" height="40" />
        //                     <p className="m-2">Username</p>
        //                 </Col>
        //                 <Col xs={4}>
        //                     <p><FontAwesomeIcon icon={faStar} size="lg"/>4.6</p>
        //                 </Col>
        //             </Row>
        //         </Container>
        //         <footer>
        //             <FontAwesomeIcon icon={faThumbsUp} size="xl" />
        //         </footer>
        //     </Card.Body>
        // </Card>
        <Card sx={{ maxWidth: 345, margin: '1rem'}} className='cards'>
            <CardMedia
                component="img"
                // height="140"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    I will design, redesign professional modern website
                </Typography>
                <br />
                <Grid container>
                    <Grid item xs={12} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'start',
                        alignItems: 'center'
                    }}>
                        <img src={avatar} width="60" height="60" style={{
                            padding: '1rem',
                            borderRadius: '100%'
                        }} />
                        <Typography variant="h6" sx={{padding: '1rem'}}>username</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'center'}}>
                <IconButton aria-label="delete" size="large" >
                    <ThumbUpIcon />
                    
                </IconButton>
                
                
            </CardActions>
        </Card>

    );
}