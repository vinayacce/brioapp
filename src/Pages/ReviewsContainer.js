import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
// import companyprofile from './../asserts/bigbanner.png';
import { HeaderColor, SubHeaderColor, GoldColor } from './Constants';
import StoreIcon from '@mui/icons-material/Store';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Avatar from '@mui/material/Avatar';

var deskTopitems = [
  {
    name: "chandramouli ",
    description: "Exceptional service! The elevator installation was smooth, and the team at Brio Elevators ensured every detail was perfect. Highly recommend their professionalism and expertise."
  },
  {
    name: "Ajith Kumar",
    description: "Long-distance peace of mind for elderly parents! they maintain my parents' elevator needs seamlessly, allowing me to focus on my work abroad. Their professionalism and reliability shine through, providing comfort for my elderly parents. highly recommended"
  },
  {
    name: "Manoj",
    description: "Outstanding customer care! provided a hassle-free experience from start to finish. The team's attention to safety and efficiency sets them apart. A reliable choice for all your elevator needs."
  },
  {
    name: "Harish Reddy",
    description: "Flawless elevator repair and service ,swiftly diagnosed and fixed the issue. Their commitment to customer satisfaction is evident in every interaction. Highly recommended for their expertise , we took 3 years AMC from Brio"
  },
  {
    name: 'MD Karunya Infra',
    description: "Stunning craftsmanship! i have bought an MRL elevator asked them to install in 2 months ,not only impressed with their meticulous installation and design focus but also set a new standard in on-time delivery, sales expertise, and top-notch CRM. Elevate your expectations, this company excels in every aspect!"
  }
]

var mobileitems = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!"
  },
  {
    name: "Random Name #11",
    description: "Hello World!"
  }
  ,
  {
    name: "Random Name #2",
    description: "Probably the most random thing you have ever seen!"
  },
  {
    name: "Random Name #22",
    description: "Hello World!"
  }
  ,

  {
    name: "Random Name #2",
    description: "Probably the most random thing you have ever seen!"
  },
  {
    name: "Random Name #22",
    description: "Hello World!"
  }
  ,

  {
    name: "Random Name #2",
    description: "Probably the most random thing you have ever seen!"
  },
  {
    name: "Random Name #22",
    description: "Hello World!"
  }
  ,

  {
    name: "Random Name #2",
    description: "Probably the most random thing you have ever seen!"
  },
  {
    name: "Random Name #22",
    description: "Hello World!"
  }

]

function Item(props) {
  return (
    <Box sx={{ height: '28vh', width: '100%' }}>

      <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: '2rem' }}>
        <Grid item>
          <Typography variant='h6'>"{props.item.description}"</Typography>
        </Grid>

        <Grid item>
          <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', columnGap: '1rem' }}>
            <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar src="/broken-image.jpg" />
            </Grid>
            <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'crimson' }}>
              <Typography variant='h6' sx={{fontStyle: 'italic'}}> - {props.item.name}</Typography>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  )
}

function showTransmission(isDeskTopDevice, deskTopitems, mobileitems) {
  if (!isDeskTopDevice) {
    return mobileitems.map((item, i) => <Item key={i} item={item} />)
  } else {
    return deskTopitems.map((item, i) => <Item key={i} item={item} />)
  }
}

function ReviewsContainer(props) {
  return (
    <Grid sx={{
      paddingTop: '4rem',
      color: HeaderColor,
      flexDirection: 'column',
      height: '75vh',
      width: '100%',
      dispaly: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      backgroundColor: '#faf6ed'
    }}>
      <Grid item sx={{ padding: '0rem 3rem 3rem 3rem' }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', color: GoldColor }}>What our customers are saying</Typography>
        {/* <Typography variant='h3' sx={{ fontWeight: '2rem' }}>Our Happy Customers</Typography> */}
        <Grid sx={{ display: 'flex', columnGap: '1.5rem', width: '100%', justifyContent: 'center', paddingBottom: '2rem' }}>
            <Grid item sx={{ width: '3%', alignContent: 'center', transform: 'rotateY(180deg)' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' color='#104c8a' />
            </Grid>
            <Grid item>
              <Typography variant='h3' sx={{fontWeight: '2rem', paddingTop: '0.5rem', color: HeaderColor }}>Our Happy Customers</Typography>
            </Grid>
            <Grid item sx={{ width: '3%', alignContent: 'center' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' />
            </Grid>
          </Grid>
      </Grid>
      <Grid item>
        <Grid sx={{ height: '28vh', paddingTop: '1vh', paddingLeft: '25vh', paddingRight: '25vh' }}>
          <Grid item sx={{ height: '28vh', padding: '0.5vh' }}>
            <Carousel
              autoPlay
              interval={2000}
              duration={500}
              animation={"slide"}
              next={() => {/* Do stuff */ }}
              prev={() => {/* Do other stuff */ }}
            >
              {showTransmission(props.isDeskTopDevice, deskTopitems, mobileitems)}
            </Carousel>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default ReviewsContainer;