import Carousel from 'react-material-ui-carousel'
import { Typography, Grid, Paper, Button } from '@mui/material'
import webDev from '../assests/web-dep.png'
import softwareDev from '../assests/software-dep.png'
import ui from '../assests/ui-ux-dep.png'
import gameDev from '../assests/game-dep.png'

function Item(props)
{
    return (
        <Grid>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button> */}
            <img src={webDev} style={{margin: '4px'}} height='410px' alt='web-dev' />
            <img src={softwareDev} style={{margin: '4px'}} height='410px' alt='web-dev' />
            <img src={gameDev} style={{margin: '4px'}} height='410px' alt='web-dev' />
            <img src={ui} style={{margin: '4px'}} height='410px' alt='web-dev' />
        </Grid>
    )
}

export default function Services() {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Grid container p={4}>
            <Typography variant='h2' p={4} sx={{fontWeight: '500'}}>Trending Services</Typography>
            <Grid item xs={12} p={4}>
            <Carousel animation='slide' navButtonsAlwaysVisible duration={300}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            </Grid>
        </Grid>
    )
}