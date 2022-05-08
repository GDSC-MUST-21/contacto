import { Grid, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Cust1 from '../assests/cust-1.jpg';
import Cust3 from '../assests/cust-3.jpg';
import quoteLeft from '../assests/quote-left-solid.png'
import quoteRight from '../assests/quote-right-solid.png'

// function Item(props) {
//     return (
//         <Grid xs={12}>
//             <img src={props.item.image} width='510px' height='710px' alt='customer-1' />
//             <img width='120rem' src={quoteLeft} alt='left quote' />
//             <Typography variant="body1" italic>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
//             </Typography>
//             <img src={quoteRight} width='120rem' alt='right quote' />

//         </Grid>
//     )
// }
// export default function Testimonial() {
//     var items = [
//         {
//             name: "Random Name #1",
//             // description: "Probably the most random thing you have ever seen!"
//             image: `${Cust1}`
//         },
//         {
//             name: "Random Name #2",
//             // description: "Hello World!"
//             image: `${Cust2}`
//         },
//         {
//             name: "Random Name #3",
//             image: `${Cust3}`
//         }
//     ]
//     return (
//         <Grid container>
//             <Grid item xs={12}>
//             <Carousel animation='slide' navButtonsAlwaysVisible duration={300}>
//                 {
//                     items.map((item, i) => <Item key={i} item={item} />)
//                 }
//             </Carousel>
//             </Grid>
//         </Grid>
//     )
// } 
function Item(props) {
    return (
        <Grid container>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button> */}
            {/* <img src={webDev} style={{ margin: '4px' }} height='410px' alt='web-dev' /> */}
            <Grid item xs={6} >
                <img src={props.item.image} width='510px' height='710px' alt='customer' />
            </Grid>
            <Grid item xs={5} style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img width='120rem' src={quoteLeft} alt='left quote' />
                <Typography variant="body1" Alignment="justify">{props.item.desc}</Typography>
                <img src={quoteRight} width='120rem' alt='right quote' />
            </Grid>


            {/* <img src={softwareDev} style={{margin: '4px'}} height='410px' alt='web-dev' />
            <img src={gameDev} style={{margin: '4px'}} height='410px' alt='web-dev' />
            <img src={ui} style={{margin: '4px'}} height='410px' alt='web-dev' /> */}
        </Grid>
    )
}

export default function Services() {
    const items = [
        {
            name: "Random Name #1",
            image: `${Cust1}`,
            desc: "This is the easiest way to get project done. Outsourcing your weakness can save you and your company a lot of valuable time and help you focus on your strengths. The pricing is super reasonable considering there are people from all over the world competing."
            
        },
        {
            name: "Random Name #2",
            image: `${Cust3}`,
            desc: "The guys are good and will help to do your job well, for an adequate price and most importantly without cheating. It is hard to find such a useful site "
        },

    ]

    return (
        <Grid container p={4}>
            <Grid item xs={12} p={4}>
                <Carousel animation='slide' navButtonsAlwaysVisible duration={300}>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </Grid>
        </Grid>
    )
}  