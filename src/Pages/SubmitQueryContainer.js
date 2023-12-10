import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Paper } from '@mui/material'
// import companyprofile from './../asserts/bigbanner.png';
import { HeaderColor, SubHeaderColor, GoldColor } from './Constants';
import nopitElevatioinImage from './../asserts/contactus.jpg';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PlaceIcon from '@mui/icons-material/Place';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function SubmitQueryContainer(props) {
  return (
    <Box sx={{ height: '88vh', width: '100%', dispaly: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '6rem' }}>
      <Card>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            sx={{ height: '88vh' }}
            image={nopitElevatioinImage}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '100%',
              height: '90%',
              // bgcolor: 'rgba(0, 0, 0, 0.54)',
              color: GoldColor,
              // color: 'white',
              // backgroundColor: '#021f39f0',
              backgroundColor: '#000000cf',
              // padding: '2% 1% 2% 1%',
              display: 'flex',
              flexDirection: 'row',
              // justifyContent: 'space-around',
              padding: '3rem 1rem 1rem 1rem',
              // opacity: '0.99'
            }}
          >
            <Box sx={{ width: '65%', height: '92%' }}>
              <Typography variant='h4' sx={{color: 'crimson'}}>
                Contact us for further information
              </Typography>
              <Box sx={{ padding: '3rem 1rem 1rem 3rem' }}>

                <input
                  type='text'
                  placeholder='Name'
                  style={{ height: '2rem', width: '74vh', fontSize: '1rem', padding: '0.2rem', borderRadius: '0.5rem' }} />

                <Box sx={{ padding: '10px' }} />
                 <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

                  <Grid item>
                    <input
                      type='text'
                      placeholder='Contact Number'
                      style={{ height: '2rem', width: '35vh', fontSize: '1rem', padding: '0.2rem', borderRadius: '0.5rem' }} />
                  </Grid>
                  <Box sx={{ padding: '8px' }} />
                  <Grid item>

                    <input
                      type='text'
                      placeholder='City'
                      style={{ height: '2rem', width: '35vh', fontSize: '1rem', padding: '0.2rem', borderRadius: '0.5rem' }} />
                  </Grid>
                </Grid>

                <Box sx={{ padding: '10px' }} />
                <input
                  type='email'
                  placeholder='Email Id'
                  style={{ height: '2rem', width: '74vh', fontSize: '1rem', padding: '0.2rem' , borderRadius: '0.5rem'}} />
                <Box sx={{ padding: '10px' }} />
                <textarea name="message" placeholder='Enter your query' 
                style={{ fontSize: '1.1rem', height: '16vh', width: '75vh', borderRadius: '0.5rem' }} />

                <Box sx={{ padding: '1rem' }} />
                {/* <input name='Submit' type='submit' style={{ height: '6vh', width: '36vh', fontSize: '1.4rem' }} /> */}
                <Button variant="contained" sx={{ width: '50%', boxShadow: '10px 10px 5px #3930306e', padding: '0.5rem', fontSize: '1rem', borderRadius: '1.5rem', backgroundColor: 'crimson' }}>
                  Submit
                </Button>
              </Box>
            </Box>

            {/* right container */}
            <Box sx={{ width: '100%', height: '92%' }}>

              <Box pt='1rem'>

                <Typography variant='h5' fontWeight='bold'>
                  Brio Head Quarters :
                </Typography>
                <br />
                <Typography variant='h6' color='white'>
                  6st Floor, Plot Number 17, <br />Road Number 7, Near Jubilee Hills Metro Station<br /> Rd no. 5, Hyderabad, Telangana, 500033
                </Typography>

              </Box>

              <Box sx={{ paddingTop: '11vh' }}>
                <Typography variant='h5' fontWeight='bold'> We are currenlty operating at </Typography>
                <Box sx={{ padding: '2vh 15vh 5vh 15vh' }}>
                  <TableContainer sx={{ maxHeight: '92%', border: 'unset' }}>
                    <Table>
                      <TableRow>
                        <>
                          <TableCell sx={{ border: 'unset', padding: '2px' }}>
                            <PlaceIcon sx={{ fontSize: 30, color: 'crimson' }} />
                          </TableCell>
                          <TableCell sx={{ border: 'unset', padding: '2px' }}>
                            <Typography variant='h5' color='white'>Hyderabad</Typography>
                          </TableCell>
                        </>

                        <>
                          <TableCell sx={{ border: 'unset', padding: '2px' }}>
                            <PlaceIcon sx={{ fontSize: 30, color: 'crimson'  }} />
                          </TableCell>
                          <TableCell sx={{ border: 'unset', padding: '2px' }}>
                            <Typography variant='h5' color='white'>Vijayawada</Typography>
                          </TableCell>
                        </>

                        <>
                          <TableCell sx={{ border: 'unset', padding: '2px' }}>
                            <PlaceIcon sx={{ fontSize: 30, color: 'crimson'  }} />
                          </TableCell>
                          <TableCell sx={{ border: 'unset', padding: '2px' }}>
                            <Typography variant='h5' color='white'>Bangalore</Typography>
                          </TableCell>
                        </>

                        <>
                          <TableCell sx={{ border: 'unset', padding: '2px' }}>
                            <PlaceIcon sx={{ fontSize: 30,color: 'crimson'  }} />
                          </TableCell>
                          <TableCell sx={{ border: 'unset', padding: '2px' }}>
                            <Typography variant='h5' color='white'>Chennai</Typography>
                          </TableCell>
                        </>
                      </TableRow>

                      {/* <TableRow>
                      <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <PlaceIcon sx={{ fontSize: 30 }} />
                        </TableCell>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <Typography variant='h5'>Vijayawada</Typography>
                        </TableCell>
                      </TableRow> */}

                      {/* <TableRow>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <PlaceIcon sx={{ fontSize: 30 }} />
                        </TableCell>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <Typography variant='h5'>Bangalore</Typography>
                        </TableCell>
                      </TableRow> */}

                      {/* <TableRow>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <PlaceIcon sx={{ fontSize: 30 }} />
                        </TableCell>
                        <TableCell sx={{ border: 'unset', padding: '2px' }}>
                          <Typography variant='h5'>Chennai</Typography>
                        </TableCell>
                      </TableRow> */}
                    </Table>
                  </TableContainer>
                </Box>

              </Box>
              <Box sx={{ padding: '20px' }} />
              <Box>
                <Typography variant='h5' fontWeight='bold'>
                  All India Contact Number
                </Typography>
                <Typography variant='h3' color='white'>
                  +91-9398113939
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box >
  );
}

export default SubmitQueryContainer;