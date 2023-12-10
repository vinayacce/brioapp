import React from 'react';
import { Grid, Box } from '@mui/material';
import { Paper } from '@mui/material'
// import companyprofile from './../asserts/bigbanner.png';

function showImage(isDeskTopDevice) {
  if (isDeskTopDevice) {
    return <>
      <Grid xs sx={{ width: '100vh', height: '30vh', backgroundColor: 'white', border: '1px solid grey' }}>
      {/* <Paper sx={{ height: '100%', backgroundImage: `url(${companyprofile})`, backgroundSize: 'cover', borderRadius: '1vh' }} /> */}
      
      </Grid>
    </>
  } else {
   return <Grid xs sx={{ width: '100vh', height: '50vh', backgroundColor: 'white', padding: '1vh' }}>
      <Box sx={{ backgroundColor: 'yellow', height: '100%' }}>
        About Company
      </Box>
    </Grid>
  }
}

function BigbannerContainer(props) {
  return (
    <Grid container sx={{ height: '35vh', alignItems: 'center' }}>
      {showImage(props.isDeskTopDevice)}
    </Grid>
  );
}

export default BigbannerContainer;