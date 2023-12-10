import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Divider } from '@mui/material';
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { HeaderColor, GoldColor, emailId } from "./Constants";
import MailIcon from "@mui/icons-material/Mail";

function solutionsFor() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><SupportAgentIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant='h6'>Solutions For</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>Hassel free support even after sale.</Grid>
    </Grid>
  </Box>
}

function products() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><SupportAgentIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant='h6'>Products</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>Hassel free support even after sale.</Grid>
    </Grid>
  </Box>
}

function elevatorsAndDesigns() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><AssignmentIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant='h6'>Elevators And Designs</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>We provide tax-relief opportunity.</Grid>
    </Grid>
  </Box>
}

function company() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><DownloadIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><Typography variant='h6'>Company</Typography></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>Download Broucher.</Grid>
    </Grid>
  </Box>
}

function miscellaneous() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      {/* <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><PhoneCallbackIcon sx={{ fontSize: 60 }} color="action" /></Grid> */}
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><h3>Miscellaneous</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}>Our executive will get back to you.</Grid>
    </Grid>
  </Box>
}

function CompanyFooterContainer(props) {
  return (
    <Box >
      
            <Grid sx={{ height: '6vh', backgroundColor: '#565454', 
            color: 'white', display: 'flex', 
            justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
            <Grid item sx={{width: '6%'}}>
                <Grid sx={{display: 'flex'}}>
                <Grid item>
                  <YouTubeIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }} />
                </Grid>
                 <Grid item>
                  <FacebookIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }} />
                </Grid>
                <Grid item>
                  <InstagramIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }} />
                </Grid>
                <Grid item>
                  <LinkedInIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }} />
                </Grid>
                <Grid item>
                  <PinterestIcon sx={{ fontSize: '1.5rem', padding: '0.4rem' }} />
                </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{fontSize: '0.9rem', width: '80%', textAlign: 'center'}}>Copyrights ©2023 Brio Elevators. All Rights Reserved</Grid>   
            </Grid>
    </Box>
  );
}

export default CompanyFooterContainer;