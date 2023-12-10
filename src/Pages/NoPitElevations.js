import React, {useState} from 'react';
import { Grid, Box, Typography } from '@mui/material';
import nopitElevatioinImage from './../asserts/nopitElevatioinImage.jpg';
import { HeaderColor, GoldColor } from './Constants';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import tvuImage from './../asserts/tuvImg.png';
import tvuImage2 from './../asserts/tuv2.png';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubmitFormDialog from "../components/SubmitFormDialog";

function NoPitElevations(props) {

  function showLeftContainerForDeskTop() {

    return <Box sx={{ width: '50%', height: '100%' }}>

      <Box>
        <Typography variant='h4' >Brio's NEW GENERATION lifts</Typography>
      </Box>
      <Grid sx={{ display: 'flex', flexWrap: 'wrap', paddingTop: '6%' }}>

        <Grid item sx={{ height: '22%', width: '46%', padding: '1rem 4rem 1rem 0' }}>
          <Grid sx={{ display: 'flex' }}>
            <Grid item>
              <ChangeHistoryIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid item>
              <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Grid item>
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item sx={{ padding: '0.4rem 0 0.4rem 0.4rem' }}>
                      <Typography variant='h5'>No Pit</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item textAlign='start' color='white'>
                  <Typography variant='body1'>Our Home elevators do not require
                    a pit of more than 150 to 250mm</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ height: '22%', width: '46%', padding: '1rem 4rem 1rem 0' }}>
          <Grid sx={{ display: 'flex' }}>
            <Grid item>
              <ChangeHistoryIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid item>
              <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Grid item>
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item sx={{ padding: '0.4rem 0 0.4rem 0.4rem' }}>
                      <Typography variant='h5'>No Head Room</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item textAlign='start' color='white'>
                  <Typography variant='body1'>Headroom is meant for commercial
                    elevators. We require an FFL- Ceiling
                    of only 2500mm
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ height: '22%', width: '46%', padding: '1rem 4rem 1rem 0' }}>
          <Grid sx={{ display: 'flex' }}>
            <Grid item>
              <ChangeHistoryIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid item>
              <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Grid item>
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item sx={{ padding: '0.4rem 0 0.4rem 0.4rem' }}>
                      <Typography variant='h5'>No Machine Room</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item textAlign='start' color='white'>
                  <Typography variant='body1'>As per machine directive code,
                    Machine room should never be
                    placed inside the elevator shaft</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ height: '22%', width: '46%', padding: '1rem 4rem 1rem 0' }}>
          <Grid sx={{ display: 'flex', }}>
            <Grid item>
              <ChangeHistoryIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid item>
              <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Grid item>
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item sx={{ padding: '0.4rem 0 0.4rem 0rem', textAlign: 'start' }}>
                      <Typography variant='h5'>No Government License</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item textAlign='start' color='white'>
                  <Typography variant='body1'>No government license is required
                    as we consume only single phase
                    electricity power</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ height: '22%', width: '46%', padding: '1rem 4rem 1rem 0' }}>
          <Grid sx={{ display: 'flex', }}>
            <Grid item>
              <ChangeHistoryIcon sx={{ fontSize: 40 }} />
            </Grid>
            <Grid item>
              <Grid sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Grid item>
                  <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Grid item sx={{ padding: '0.4rem 0 0.4rem 0.4rem' }}>
                      <Typography variant='h5'>No AMC</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item textAlign='start' color='white'>
                  <Typography variant='body1'>Our patented technology allows
                    our client to feel absolutely safe
                    without routine maintenance</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  }

  function showRightContainerForDeskTop() {
    return <Box sx={{ width: '30%', height: '52%', paddingTop: '8%' }}>
      <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
        <Grid item>
          <Box >
            <img style={{ height: '15vh', width: '15vh' }} src={tvuImage} />
            {/* <img style={{ height: '15vh', width: '15vh', backgroundColor: 'white' }} src={tvuImage2} /> */}
            <Typography variant='h6'>TUV Certified <br /> and 100% imported</Typography>
          </Box>
        </Grid>
        <Grid item sx={{ paddingTop: '10vh' }} onClick={onFreeSiteCheckButtonCLick}>
          <Button variant="contained" sx={{ boxShadow: '10px 10px 5px #104c8a', 
          padding: '1rem 3.5rem 1rem 3.5rem', 
          // fontSize: '1.5rem', 
          borderRadius: '1.5rem',
           backgroundColor: 'white', 
           color: 'crimson' }}>
            <Typography variant='button' sx={{fontWeight: 'bold'}}>Get Quotation</Typography></Button>
        </Grid>
      </Grid>
    </Box>
  }

  function showForDeskTop() {

    return (
    <>
    <SubmitFormDialog
        open={openDialog}
        handleClose={onCloseFreeSiteCheckButtonCLick}
        buttonText="Get Quotation"
      />
 <Box sx={{ height: '95vh', 
    width: '100%', 
    dispaly: 'flex', 
    justifyContent: 'center', 
    textAlign: 'center', 
    paddingTop: '4rem',
    boxShadow: 'unset' }}>
      <Card style={{boxShadow: 'unset'}}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            sx={{ height: '95vh', boxShadow: 'unset' }}
            image={nopitElevatioinImage}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              color: GoldColor,
              backgroundColor: '#021f39f0',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              padding: '3rem 1rem 1rem 1rem'
            }}
          >
            {showLeftContainerForDeskTop()}
            {showRightContainerForDeskTop()}
          </Box>

        </Box>
      </Card>
    </Box >
    </>);
   
  }

  function showForMobile() {

    return <Box sx={{ height: 'auto', width: '100%', dispaly: 'flex', justifyContent: 'center', textAlign: 'center', paddingTop: '3rem' }}>
      <Card>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            sx={{ height: '100vh' }}
            image={nopitElevatioinImage}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '100%',
              height: 'auto',
              color: GoldColor,
              backgroundColor: '#021f39f0',
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem 0rem 1rem 0rem'
            }}
          >
            <Box>
              <Box>
                <Typography variant='h5' sx={{color: 'crimson'}}>Brio's NEW GENERATION lifts</Typography>
              </Box>
            </Box>

            <Box p='1rem'>
              <List>
                <ListItem >
                  <ListItemIcon>
                    <ChangeHistoryIcon sx={{ color: GoldColor, fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ color: 'white' }}>Our Home elevators do not require a pit of more than 150 to 250mm</Typography>
                      </React.Fragment>
                    }>
                    <Typography variant='h6' sx={{ color: GoldColor }}>No Pit</Typography>
                  </ListItemText>
                </ListItem>

                <ListItem >
                  <ListItemIcon>
                    <ChangeHistoryIcon sx={{ color: GoldColor, fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ color: 'white' }}>Our Home elevators do not require a pit of more than 150 to 250mm</Typography>
                      </React.Fragment>
                    }
                  >
                    <Typography variant='h6' sx={{ color: GoldColor }}>NO HEAD ROOM</Typography>
                  </ListItemText>
                </ListItem>

                <ListItem >
                  <ListItemIcon>
                    <ChangeHistoryIcon sx={{ color: GoldColor, fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ color: 'white' }}>Our Home elevators do not require a pit of more than 150 to 250mm</Typography>
                      </React.Fragment>
                    }>
                    <Typography variant='h6' sx={{ color: GoldColor }}>NO MACHINE ROOM</Typography>
                  </ListItemText>
                </ListItem>

                <ListItem >
                  <ListItemIcon>
                    <ChangeHistoryIcon sx={{ color: GoldColor, fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ color: 'white' }}>Our Home elevators do not require a pit of more than 150 to 250mm</Typography>
                      </React.Fragment>
                    }>
                    <Typography variant='h6' sx={{ color: GoldColor }}>NO GOVERNMENT LICENSE
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem >
                  <ListItemIcon>
                    <ChangeHistoryIcon sx={{ color: GoldColor, fontSize: 35 }} />
                  </ListItemIcon>
                  <ListItemText
                    secondary={
                      <React.Fragment>
                        <Typography sx={{ color: 'white' }}>Our Home elevators do not require a pit of more than 150 to 250mm</Typography>
                      </React.Fragment>
                    }>
                    <Typography variant='h6' sx={{ color: GoldColor }}>NO AMC
                    </Typography>
                  </ListItemText>
                </ListItem>

              </List>
            </Box>

          </Box>
        </Box>
      </Card>
    </Box >
  }

  const [openDialog, setOpenDialog] = useState(false);

    const onFreeSiteCheckButtonCLick = () => {
      setOpenDialog(true);
    };
  
    const onCloseFreeSiteCheckButtonCLick = () => {
      setOpenDialog(false);
    };
    
  return (
    <>
      {props.isDeskTopDevice && showForDeskTop()}
      {!props.isDeskTopDevice && showForMobile()}
    </>
  );
}

export default NoPitElevations;