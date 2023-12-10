import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import Box from '@mui/material/Box';
import homeSeriesmainImage from '../asserts/circuitImageForBanner.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BigBannerElevationContainer(props) {
  const theme = useTheme();

  return (
    <Grid sx={{ height: '58vh', paddingTop: '6rem', paddingBottom: '0rem', color: '#104c8a' }}>
      <Grid item sx={{ height: '48vh' }}>
        <Card>
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              sx={{ height: '47vh',  backgroundColor: '#000000c2' }}
              image={homeSeriesmainImage}
            />
            <Box
              className = 'cool'
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '98%',
                height: '85%',
                color: 'white',
                padding: '2% 1% 2% 1%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000000c2',
                WebkitTextStrokeWidth: '0.2px',
                WebkitTextStrokeColor: 'white'
              }}
            >
              <h1>
              TO BE THE CLIENT’S NO 1 CHOICE
              </h1>
              {/* <Typography variant='h2' sx={{fontFamily: 'Allerta Stencil'}}>TO BE THE CLIENT’S NO 1 CHOICE</Typography> */}
              <Typography variant='h4' sx={{fontFamily: 'Allerta Stencil',
              WebkitTextStrokeWidth: '0.8px',
                WebkitTextStrokeColor: 'crimson'}}> WINNING HEARTS ONE LIFT AT A TIME </Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>

  );
}

export default BigBannerElevationContainer;