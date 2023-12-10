import React, { useState } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { HeaderColor, GoldColor } from './Constants';
import metalshaftliftImage from '../asserts/metalshaftlift.jpg';
import massonaryliftImage from '../asserts/massonarylift.jpg';
import Button from '@mui/material/Button';
import SwapVerticalCircleOutlinedIcon from '@mui/icons-material/SwapVerticalCircleOutlined';
import { styled } from '@mui/material/styles';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubmitFormDialog from '../components/SubmitFormDialog';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import homeSeriesmainImage from '../asserts/vectee.jpg';
function HomeSeriesElevationContainer(props) {

  const StyledBox = styled(Box)`
    ${({ theme }) => `
    position: relative;
              border: 8px solid #80808070;
              boxShadow: 10px 10px 10px #104c8a8a;
    cursor: pointer;
    background-color: '${GoldColor}';
    transition: ${theme.transitions.create(['background-color', 'transform'], {
    duration: theme.transitions.duration.standard,
  })};
    &:hover {
      background-color: ${theme.palette.primary.main};
      transform: scale(1.05);
      // opasity: 20;
    }
    `}
  `;

  function forMobile() {
    return <Box paddingTop='12rem'>
      <Grid container sx={{ width: '100%', dispaly: 'flex', justifyContent: 'space-between', textAlign: 'center', color: HeaderColor }}>

        <Grid item sx={{ width: '100%', height: 'auto' }}>
          <Grid>
            <Grid item>
              <SwapVerticalCircleOutlinedIcon sx={{ color: GoldColor, fontSize: '4rem' }} />
              <Typography variant='h4' sx={{ padding: '0rem 2rem 1rem 2rem', color: GoldColor }}> Home lifts at their best </Typography>
              <Typography variant='h6' sx={{ padding: '0rem 2rem 1rem 2rem'}}>
                <Box sx={{color: GoldColor}}>Providing Lift products right from small home lifts to large lifts for commercial buildings and public utility</Box>
              </Typography>
            </Grid>
            {/* image 1 */}
            <Grid item sx={{ padding: '0rem 0rem 1rem 0rem' }}>
              <Box sx={{ position: 'relative', backgroundColor: '#021f39f0' }} p='0.5rem'>
                <Typography variant='h5' sx={{ color: GoldColor, padding: '0.2rem' }}>Why to choose Brio HomeLift ?</Typography>
                <Box p='0.5rem'>
                  <List>
                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Architect Friendly</Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Compact, Quiet And Easy To Install</Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Power Consumption Like Any
                          Household Electrical Appliance</Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Connects To Any Electrical 230v
                          Outlet
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Custom Interior Cabin With Expert
                          Suggestion
                        </Typography>
                      </ListItemText>
                    </ListItem>


                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Reduced Maintenance Costs</Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>5-year Warranty
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Customised Product
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Imported From  Italy
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>No Civil Work
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>360 Degree Panoramic View
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Just Plug & Go
                        </Typography>
                      </ListItemText>
                    </ListItem>

                    <ListItem disablePadding>
                      <ListItemIcon>
                        <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: 'white' }} >
                        <Typography variant='h6'>Stand Alone Structure
                        </Typography>
                      </ListItemText>
                    </ListItem>

                  </List>
                </Box>
              </Box>
              <Grid sx={{ paddingTop: '6vh' }}>
                <Grid item>
                  <Button variant="contained" sx={{ boxShadow: '10px 10px 5px #3930306e', padding: '0.9rem', fontSize: '1rem', borderRadius: '1.5rem' }}>
                    <Typography variant='button'>Download Broucher</Typography></Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>

  }

  function showLeftContainer(prop) {
    const { onCLick } = prop;
    return <Grid item sx={{ width: '65%', height: 'auto', padding: '5rem 10rem 0vh 0rem' }}>
      <Grid>
        <Grid item>
          <SwapVerticalCircleOutlinedIcon sx={{ color: 'crimson', fontSize: '4rem' }} />
          {/* <Typography variant='h3' sx={{ padding: '1rem 3rem 1rem 3rem' }}> Home lifts at their best </Typography> */}
          <Grid sx={{ display: 'flex', columnGap: '1.5rem', width: '100%', justifyContent: 'center', paddingBottom: '2rem' }}>
            <Grid item sx={{ width: '7%', alignContent: 'center', transform: 'rotateY(180deg)' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' />
            </Grid>
            <Grid item>
              <Typography variant='h3' sx={{ paddingTop: '0.5rem', color: GoldColor }}>Home lifts at their best</Typography>
            </Grid>
            <Grid item sx={{ width: '7%', alignContent: 'center' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' />
            </Grid>
          </Grid>
          <Typography variant='h6' sx={{ padding: '0rem 3rem 1rem 3rem' }}>
            Providing Lift products right from small <span style={{fontWeight: 'bold'}}>home lifts</span> to large lifts for <span style={{fontWeight: 'bold'}}>commercial buildings</span> and public utility
          </Typography>
        </Grid>
        {/* image 1 */}
        <Grid item>
          <Box sx={{ position: 'relative', backgroundColor: '#021f39f0', border: '0.3rem solid #ffc445a8' }} p='2.5rem'>
            <Typography variant='h4' sx={{ color: GoldColor }}>Why to choose Brio HomeLift ?</Typography>
            <Box p='1.6rem'>
              <List>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Architect Friendly</Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Compact, Quiet And Easy To Install</Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Power Consumption Like Any
                      Household Electrical Appliance</Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Connects To Any Electrical 230v
                      Outlet
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Custom Interior Cabin With Expert
                      Suggestion
                    </Typography>
                  </ListItemText>
                </ListItem>


                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Reduced Maintenance Costs</Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>5-year Warranty
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Customised Product
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Imported From  Italy
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>No Civil Work
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>360 Degree Panoramic View
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor, transform: 'rotate(180deg)' }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Just Plug & Go
                    </Typography>
                  </ListItemText>
                </ListItem>

                <ListItem disablePadding>
                  <ListItemIcon>
                    <ArrowDropDownCircleIcon sx={{ color: GoldColor }} />
                  </ListItemIcon>
                  <ListItemText sx={{ color: 'white' }} >
                    <Typography variant='h6'>Stand Alone Structure
                    </Typography>
                  </ListItemText>
                </ListItem>

              </List>
            </Box>
          </Box>
          <Grid sx={{ paddingTop: '6vh' }}>
            <Grid item>
              {/* <Button variant="contained" sx={{ boxShadow: '10px 10px 5px #3930306e', padding: '0.9rem', fontSize: '1rem', borderRadius: '1.5rem' }} onClick={onCLick}>
                <Typography variant='button'>Download Broucher</Typography></Button> */}
              <Button variant="contained" sx={{ backgroundColor: 'crimson', width: '50%', boxShadow: '10px 10px 5px #3930306e', padding: '0.9rem', fontSize: '1rem', borderRadius: '1.5rem' }} onClick={onCLick}>
                Download Broucher
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  }

  function showRightContainer() {
    return <Grid item sx={{ width: '32%' }}>
      <Grid>
        {/* image 2 */}
        <Grid item sx={{ paddingBottom: '6rem' }}>
          <StyledBox sx={{
            position: 'relative',
            border: '8px solid #80808070',
            boxShadow: '10px 10px 10px #104c8a8a'
          }}>
            <CardMedia
              sx={{ height: '70vh' }}
              image={massonaryliftImage}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '98%',
                padding: '0.5rem 0.2rem 0.5rem 0.2rem',
                textAlign: 'start'
              }}
            >
              <Box sx={{ backgroundColor: GoldColor }}>
                <Typography variant="h5" sx={{ paddingLeft: '2rem', color: 'white' }}>With Masonary Shaft</Typography>
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
              sx={{ height: '70vh' }}
              image={metalshaftliftImage}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                width: '98%',
                padding: '0.5rem 0.2rem 0.5rem 0.2rem',
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
  }

  function forDeskTop(prop) {
    return <Box sx={{ width: '100%', padding: '3rem 0rem 0rem 0rem' }}>
      <Card>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            sx={{ height: '190vh' }}
            image={homeSeriesmainImage}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              // bgcolor: 'rgba(0, 0, 0, 0.54)',
              color: 'white',
              padding: '2% 1% 2% 1%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}
          >
            <Grid container sx={{
              width: '100%',
              dispaly: 'flex',
              justifyContent: 'space-between',
              padding: '0rem 8rem 0rem 8rem',
              textAlign: 'center',
              color: HeaderColor
            }}>

              {/* DeskTop */}
              {props.isDeskTopDevice && showLeftContainer(prop)}
              {props.isDeskTopDevice && showRightContainer(prop)}
            </Grid>
          </Box>
        </Box>
      </Card>
    </Box>

  }

  const [openDialog, setOpenDialog] = useState(false);

  const onCLick = () => {
    setOpenDialog(true);
  }

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `BrioElevatorsBrochure.pdf`;
    link.href = `${process.env.PUBLIC_URL + "/BrioElevatorsBrochure.pdf"}`;
    link.click();
  };

  const onCloseCLick = () => {
    setOpenDialog(false);
    onDownload();
  }

  return (
    <>
      {/* Submit Form Dialig */}
      <SubmitFormDialog open={openDialog} handleClose={onCloseCLick} buttonText='Download Broucher' />
      {!props.isDeskTopDevice && forMobile({ onCLick })}
      {props.isDeskTopDevice && forDeskTop({ onCLick })}
    </>
  );
}

export default HomeSeriesElevationContainer;