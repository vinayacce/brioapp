import React from 'react';
import { Grid, Box } from '@mui/material';
import companyprofile from './../asserts/companyprofile.jpg';
import { Paper } from '@mui/material'

function showImage(isDeskTopDevice) {
  if (isDeskTopDevice) {
    return <>
      <Grid xs sx={{ width: '50vh', height: '100%', backgroundColor: 'white', padding: '1vh' }}>
        <Box sx={{ height: '66%', padding: '10vh 15vh 15vh 15vh', fontSize: '1rem', color: '#00264d' }}>
          <h2>Company Profile</h2>
          <>Brio Elevators!! India's Leading Certified Elevator Company, Head quartered in Hyderabad, it operates all over India . We're Globally connected to the foremost Manufacturers of Mobility Solutions, Renowned for their Safety, Quality, and Cutting-edge Technology.
            Discover our Premium MR Elevators, MRL Elevators, Hydraulic Elevators, and Belt Elevators – all are TÜV Certified for your peace of mind. Experience Innovation in every ride, tailored to your preferences, and enhance your day-to-day living. Elevate your Home Living with Brio Elevators. Your vertical journey starts here.
          </>
        </Box>
      </Grid>
      <Grid xs sx={{ height: '100%', backgroundColor: 'white', padding: '1vh' }}>
        {/* <Box sx={{ backgroundColor: 'yellow', height: '100%' }}> */}
        <Paper sx={{ height: '100%', backgroundImage: `url(${companyprofile})`, backgroundSize: 'cover', borderRadius: '1vh' }} />
        {/* </Box> */}
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

function CompanyProfileContainer(props) {
  return (
    <Grid container sx={{ height: '75vh', alignItems: 'center', color: '#00264d', paddingTop: '6%' }}>
      {showImage(props.isDeskTopDevice)}
    </Grid>
  );
}

export default CompanyProfileContainer;