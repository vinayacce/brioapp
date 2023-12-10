import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
import companyprofile from './../asserts/circuitImageForBanner.jpg';
import { HeaderColor, SubHeaderColor, GoldColor } from './Constants';
// import CardMedia from '@mui/material/CardMedia';
import homeSeriesmainImage from '../asserts/homeseriesImage1.jpg';
import metalshaftliftImage from '../asserts/metalshaftlift.jpg';
import massonaryliftImage from '../asserts/massonarylift.jpg';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Button from '@mui/material/Button';
import productVideo from '../asserts/Video 5.mp4';
import SwapVerticalCircleOutlinedIcon from '@mui/icons-material/SwapVerticalCircleOutlined';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function HomeSeriesElevationContainer(props) {

  const StyledBox = styled(Box)`
    ${({ theme }) => `
    position: relative;
              border: 8px solid #80808070;
              boxShadow: 10px 10px 10px #104c8a8a;
    cursor: pointer;
    background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
    &:hover {
      background-color: '${GoldColor}';
      transform: scale(1.05);
      // opasity: 20;
    }
    `}
  `;

  return (
    <Grid container sx={{ width: '100%', dispaly: 'flex', justifyContent: 'space-between', padding: '8rem 15rem 8rem 15rem', textAlign: 'center', color: HeaderColor }}>
      <Grid item sx={{ width: '60%', height: 'auto', padding: '10.5rem 12rem 0vh 0rem' }}>
        <Grid>
          <Grid item>
            <SwapVerticalCircleOutlinedIcon sx={{ color: GoldColor, fontSize: '4rem' }} />
            <Typography variant='h4' sx={{ padding: '2% 3% 1% 3%' }}> Home lifts at their best22 </Typography>
            <Typography variant='h6' sx={{ padding: '3% 3% 1% 3%' }}>
              Providing Lift products right from small home lifts to large lifts for commercial buildings and public utility
            </Typography>
          </Grid>
          {/* image 1 */}
          <Grid item>
            <Box sx={{ position: 'relative', backgroundColor: HeaderColor }} p='0% 10% 1.6% 10%'>
              {/* <video height="650vh" width='100%' controls autoplay>
                <source src={productVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video> */}
              <Card>
                <Box sx={{ position: 'relative', height: '80vh' }}>
                  {/* <CardMedia
                    sx={{ height: '90vh' }}
                    // image={nopitElevatioinImage}
                  /> */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      width: '100%',
                      height: '100%',
                      // bgcolor: 'rgba(0, 0, 0, 0.54)',
                      color: GoldColor,
                      backgroundColor: '#021f39f0',
                      // padding: '2% 1% 2% 1%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      padding: '3% 1% 1% 1%'
                    }}
                  >
                    
                    {/* <Box sx={{ width: '50%', height: '92%' }}>

              <Box>
                <Typography variant='h5'>Brio's NEW GENERATION lifts</Typography>
              </Box>
              <Grid sx={{ display: 'flex', flexWrap: 'wrap', paddingTop: '8%' }}>

                <Grid item sx={{ height: '20vh', width: '46vh', paddingRight: '6vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>No Pit</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>Our Home elevators do not require
                            a pit of more than 150 to 250mm</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ height: '20vh', width: '46vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>NO HEAD ROOM</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>Headroom is meant for commercial
                            elevators. We require an FFL- Ceiling
                            of only 2500mm
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ height: '20vh', width: '46vh', paddingRight: '7vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>NO MACHINE ROOM</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>As per machine directive code,
                            Machine room should never be
                            placed inside the elevator shaft</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ height: '20vh', width: '46vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>NO GOVERNMENT LICENSE</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>No government license is required
                            as we consume only single phase
                            electricity power</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ height: '20vh', width: '46vh' }}>
                  <Grid sx={{ display: 'flex', }}>
                    <Grid item>
                      <ChangeHistoryIcon sx={{ fontSize: 40 }} />
                    </Grid>
                    <Grid item>
                      <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Grid item>
                          <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Grid item sx={{ padding: '1vh' }}>
                              <Typography variant='h5'>NO AMC</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item textAlign='start' color='white'>
                          <Typography variant='h6'>Our patented technology allows
                            our client to feel absolutely safe
                            without routine maintenance</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

              </Grid>
            </Box>
            <Box sx={{ width: '30%', height: '52%', paddingTop: '8%' }}>

              <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                <Grid item>
                  <Box >
                    <img style={{ height: '15vh', width: '15vh' }} src={tvuImage} />
                    <Typography variant='h6'>TUV Certified <br /> and 100% imported</Typography>
                  </Box>
                </Grid>
                <Grid item sx={{ paddingTop: '10vh' }}>
                  <Button variant="contained" sx={{ height: '8vh', paddingRight: '3vh', paddingLeft: '3vh', fontSize: '1rem', fontWeight: 'bold', backgroundColor: 'white', color: HeaderColor }}>Book an Appointment</Button>
                </Grid>
              </Grid>

            </Box> */}
                    <Typography variant='h6'>Why to choose Brio HomeLift ?</Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
            <Grid sx={{ paddingTop: '10vh' }}>
              <Grid item>
                <Button variant="contained" sx={{ boxShadow: '10px 10px 5px #3930306e', padding: '0.9rem', fontSize: '1rem', borderRadius: '1.5rem' }}>
                  <Typography variant='button'>Download Broucher</Typography></Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ width: '40%' }}>
        <Grid>
          {/* image 2 */}
          <Grid item sx={{ paddingBottom: '13%' }}>
            <StyledBox sx={{
              position: 'relative',
              border: '8px solid #80808070',
              boxShadow: '10px 10px 10px #104c8a8a'
            }}>
              <CardMedia
                sx={{ height: '60vh' }}
                image={massonaryliftImage}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: '98%',
                  padding: '2% 1% 2% 1%',
                  textAlign: 'start'
                }}
              >
                <Box sx={{ backgroundColor: GoldColor }}>
                  <Typography variant="h5" sx={{ paddingLeft: '2%', color: 'white' }}>With Masonary Shaft</Typography>
                </Box>
              </Box>
            </StyledBox>
          </Grid>
          {/* image 3 */}
          <Grid item>
            <StyledBox sx={{
              position: 'relative',
              border: '8px solid #80808070',
              boxShadow: '10px 10px 10px #104c8a8a'
            }}>
              <CardMedia
                sx={{ height: '60vh' }}
                image={metalshaftliftImage}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  width: '98%',
                  padding: '2% 1% 2% 1%',
                  textAlign: 'start'
                }}
              >
                <Box sx={{ backgroundColor: GoldColor }}>
                  <Typography variant="h5" sx={{ paddingLeft: '2%', color: 'white' }}>With Metal Shaft</Typography>
                </Box>
              </Box>
            </StyledBox>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomeSeriesElevationContainer;