import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function showSubmitForm() {
  return <Box container sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
    <Box border='3px solid #c9c5b7' borderRadius='3%' width='55vh'>
      <Grid sx={{ alignContent: 'center', alignItems: 'center' }}>
        <Grid item padding='5%'>
          <TextField
            variant="outlined" size="medium"
            id="filled-search"
            label="Name"
            type="search"
            fullWidth
          />
        </Grid>
        <Grid item padding='5%'>
          <TextField
            id="filled-search"
            label="Email Id"
            type="search"
            fullWidth
            variant="outlined" size="medium"
          />
        </Grid>
        <Grid item padding='5%'>
          <TextField
            id="filled-search"
            label="Phone Number"
            type="search"
            fullWidth
            variant="outlined" size="medium"
          />
        </Grid>
        <Grid item padding='5%'>
          <TextField
            id="outlined-textarea"
            label="Type query here...."
            placeholder="Type your query"
            maxRows={4}
            multiline
            fullWidth
          />
        </Grid>
        <Grid item padding='5%'>
          <Button variant="contained" fullWidth>Submit</Button>
        </Grid>
      </Grid>
    </Box>
  </Box>
}

function contactDetails() {
  return <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Grid>
      <Grid item paddingLeft='4vh'>
        <h2> Contact details</h2>
      </Grid>
      <Grid item paddingLeft='4vh'><img height='100px' src="https://www.transparentpng.com/thumb/telephone/yellow-old-phone-png-transparent-images--32.png" alt="yellow old phone png transparent images @transparentpng.com" /></Grid>
      <Grid item paddingLeft='2vh'><h1>9398113939</h1></Grid>
      <Grid item><b>book your FREE SITE inspection today only.</b></Grid>
    </Grid>
  </Box>
}

function ContactUsContainer(props) {
  return (
    <Grid sx={{ display: 'flex', justifyContent: 'space-evenly', border: '1px solid #ebe7df', borderRadius: '1vh', backgroundColor: '#ebe7df', padding: '1vh' }}>
      <Grid item sx={{ display: 'contents' }}>
        {contactDetails()}
      </Grid>
      <Grid item>
      </Grid>
      <Grid item sx={{ alignItems: 'center' }}>
        {showSubmitForm()}
      </Grid>
    </Grid>
  );
}

export default ContactUsContainer;