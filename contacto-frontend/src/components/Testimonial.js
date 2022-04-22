import { Button, Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Cust1 from '../assests/cust-1.jpg';
import Cust2 from '../assests/cust-2.jpg';
import Cust3 from '../assests/cust-3.jpg';
import quoteLeft from '../assests/quote-left-solid.png'
import quoteRight from '../assests/quote-right-solid.png'

function Item() {
    return (
        <Grid container>
            <Grid item xs={6}>
                <img src={Cust1} width='510px' height='710px' alt='customer-1'/>
            </Grid>
            <Grid item xs={6}>
                <img width='120rem' src={quoteLeft} alt='left quote' />
                <Typography variant="body1" italic>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </Typography>
                <img src={quoteRight} width='120rem' alt='right quote'/>
            </Grid>
        </Grid>
    )
}
export default function Testimonial() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        },
        {
            name: "Random Name #3",
            description: "Hello World!"
        }
    ]
    return (
        <Carousel animation='slide' navButtonsAlwaysVisible duration={300}>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}   