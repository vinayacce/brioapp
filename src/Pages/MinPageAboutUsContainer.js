import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
import companyprofile from './../asserts/contactus.jpg';
import { GoldColor, HeaderColor, SubHeaderColor } from './Constants';
import stamp from './../asserts/Stamp.png';
import { CardActions, CardContent, CardMedia, CardHeader, CardActionArea } from '@mui/material';
import productVideo from './../asserts/productVideo.mp4';


function MinPageAboutUsContainer(props) {
  return (
    <Box p='0rem 0rem 0rem 0rem' maxHeight='90vh'>
      <Grid container sx={{
        width: '100%',
        dispaly: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '2rem 2rem 4rem 2rem',
        backgroundColor: '#faf6ed',
        // borderRadius: '2rem'
      }}>

        <Grid item sx={{ paddingBottom: '2rem',width: '100%', textAlign: 'center' }}>

          <Grid sx={{ display: 'flex', columnGap: '1.5rem', width: '100%', justifyContent: 'center', paddingBottom: '2rem' }}>
            <Grid item sx={{ width: '3%', alignContent: 'center', transform: 'rotateY(180deg)' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' color='#104c8a' />
            </Grid>
            <Grid item>
              <Typography variant='h4' sx={{ paddingTop: '0.5rem', color: GoldColor }}>About Us</Typography>
            </Grid>
            <Grid item sx={{ width: '3%', alignContent: 'center' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' />
            </Grid>
          </Grid>
       
        </Grid>

        <Grid item sx={{ height: '100%', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <Grid sx={{ display: 'flex', columnGap: '1rem' }}>

            {/* <Grid item sx={{ width: '13%', alignContent: 'center', transform: 'rotateY(180deg)' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='100%' width='60%' color= '#104c8a' />
            </Grid> */}

            <Grid item sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center', width: '70%' }}>
              <Box sx={{ width: '70%' }}>
                {/* <img src={stamp} height='80%' width='63%' /> */}
                <CardMedia component="iframe" src={productVideo} sx={{ height: '45vh', width: '80vh', borderRadius: '0.8rem' }} allow="autoPlay" />
              </Box>
            </Grid>

            <Grid item sx={{ paddingTop: '2rem', overflowX: 'hidden', maxHeight: { xs: '55vh', sm: '20vh', md: '43vh' }, width: { sx: '100%', sm: '100%', md: '70%' }, textAlign: 'start' }}>
           
            <Typography sx={{ color: SubHeaderColor, fontSize: '1.2rem' }}>
                When you choose <span style={{fontWeight: 'bold'}}>Brio Elevators</span>, you're adding safety and luxury to your home. It makes your living experience truly Sophisticated.
                Our Home Elevators blend the <span style={{fontWeight: 'bold'}}>beautiful designs</span> of India and Italy to create a stylish and captivating experience. You can choose from various <span style={{fontWeight: 'bold'}}>customization options</span>, including colors, textures, and upholstery, to perfectly match your home.
                We have a special line of <span style={{fontWeight: 'bold'}}>Home Elevators</span> called the Home, <span style={{fontWeight: 'bold'}}>Mobility Series</span> made using Top Notch Elevator Technology. These Elevators come in many different configurations to suit almost any need.
                {/* Our Home and Mobility Series elevators are super energy-efficient and quieter than a silent room. We've combined this advanced technology with our careful engineering and love for Italian design to create an Environmentally-friendly and seamlessly integrated solution for your home. Safety and comfort are our top priorities, and you won't find a combination like ours anywhere else. */}
              </Typography>
            
            </Grid>

            {/* <Grid item sx={{ width: '13%', alignContent: 'center' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='100%' width='60%' />
            </Grid> */}

          </Grid>
        </Grid>


      </Grid>
    </Box>

  );
}

export default MinPageAboutUsContainer;