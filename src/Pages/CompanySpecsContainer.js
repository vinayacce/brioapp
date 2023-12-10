import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function afterSalesSupport() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><SupportAgentIcon sx={{ fontSize: 60 }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}><h3>After Sales Support</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>Hassel free support even after sale.</Grid>
    </Grid>
  </Box>
}

function taxSavings() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><AssignmentIcon sx={{ fontSize: 60 }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}><h3>Tax Saving</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>We provide tax-relief opportunity.</Grid>
    </Grid>
  </Box>
}

function downloadBroucher() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><DownloadIcon sx={{ fontSize: 60 }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}><h3>Downloads</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>Download Broucher.</Grid>
    </Grid>
  </Box>
}

function requestCallBack() {
  return <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: '40%', width: '23%', fontSize: '0.8rem', padding: '1%' }}>
    <Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center' }}><PhoneCallbackIcon sx={{ fontSize: 60 }} color="action" /></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}><h3>Request CallBack</h3></Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'center', color: '#00264d' }}>Our executive will get back to you.</Grid>
    </Grid>
  </Box>
}

function CompanySpecsContainer(props) {
  return (
    <Box sx={{ height: '15vh', border: '1px solid white', borderRadius: '1vh', backgroundColor: 'white', padding: '5rem' }}>
      
        <Grid sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Grid item sx={{ display: 'contents' }}>
            {afterSalesSupport()}
          </Grid>
          <Grid item>
          </Grid>
          <Grid item sx={{ display: 'contents' }}>
            {taxSavings()}
          </Grid>
          <Grid item>
          </Grid>
          <Grid item sx={{ display: 'contents' }}>
            {downloadBroucher()}
          </Grid>
          <Grid item>
          </Grid>
          <Grid item sx={{ display: 'contents' }}>
            {requestCallBack()}
          </Grid>
        </Grid>

    </Box>
  );
}

export default CompanySpecsContainer;