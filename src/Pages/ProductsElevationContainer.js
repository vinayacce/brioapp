import React, {useState} from 'react';
import { Grid, Box, Typography, Button } from '@mui/material';
import { Paper } from '@mui/material'
import companyprofile from './../asserts/circuitImageForBanner.jpg';
import { HeaderColor, SubHeaderColor, GoldColor } from './Constants';
import CardMedia from '@mui/material/CardMedia';
import product1 from '../asserts/product1.jpg';
import product2 from '../asserts/product2.jpg';
import product3 from '../asserts/product3.jpg';
import product4 from '../asserts/product4.jpg';
import { styled } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import MobileStepper from '@mui/material/MobileStepper';
import ProductSpecsContainer from './ProductSpecsContainer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import homeSeriesmainImage from '../asserts/productsBG.jpg';
import Popover from '@mui/material/Popover';
import productSpec1 from '../asserts/spec - belt.jpg';
import productSpec2 from '../asserts/spec - rope.jpg';
import productSpec3 from '../asserts/spec- hydrallic copy.jpg';
import productSpec4 from '../asserts/spec - MRL.jpg';
import { useEffect } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const StyledBox = styled(Box)`
    ${({ theme }) => `
    position: relative;
    // border: 8px solid #80808070;
    box-Shadow: 0.6rem 0.9rem 0.6rem #104c8a78;
    cursor: pointer;
    // background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(['background-color', 'transform'], {
  duration: theme.transitions.duration.standard,
})};
    &:hover {
      // background-color: #104c8a78;
      box-Shadow: 0.6rem 0.9rem 0.6rem #104c8a;
      transform: scale(1.05);
      opasity: 29;
    }
    `}
  `;

const images = [
  {
    label: 'BRIO GEARLESS BELT',
    imgPath: `${product1}`
  },
  {
    label: 'BRIO GEARLESS ROPE',
    imgPath: `${product2}`
  },
  {
    label: 'BRIO HYDRAULIC',
    imgPath: `${product3}`
  },
  {
    label: 'BRIO MOBILITY SERIES',
    imgPath: `${product4}`
  }
];

const onDownload = () => {
  const link = document.createElement("a");
  link.download = `BrioElevatorsBrochure.pdf`;
  link.href = `${process.env.PUBLIC_URL + "/BrioElevatorsBrochure.pdf"}`;
  link.click();
};

function showProductsForDesktop(props,handlePopoverOpen, 
  handlePopoverClose,
  anchorEl,
  anchorEl1,
  anchorEl2,
  anchorEl3,
  anchorEl4) {

  return <Grid id="productsCont" sx={{ display: 'flex', flexDirection: 'column', paddingTop: '4rem' }}>

    <Grid item>
      <Grid sx={{ flexDirection: 'column', width: '100%', dispaly: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <Grid item>

          <Grid sx={{ display: 'flex', columnGap: '1.5rem', width: '100%', justifyContent: 'center', padding: '2rem' }}>
            <Grid item sx={{ width: '3%', alignContent: 'center', transform: 'rotateY(180deg)' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' color='#104c8a' />
            </Grid>
            <Grid item>
              <Typography variant='h4' sx={{ paddingTop: '0.5rem', color: GoldColor }}>Our Products</Typography>
            </Grid>
            <Grid item sx={{ width: '3%', alignContent: 'center' }}>
              <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' />
            </Grid>
          </Grid>

          <Typography variant='h6' sx={{ color: HeaderColor, padding: '0 2.5rem 0 2.5rem', color: SubHeaderColor }}>"Our extensive product lineup ensures that we provide an
            <span style={{ fontWeight: 'bold' }}> accessibility solution</span> tailored to every home. Just as each unit is uniquely crafted to user specifications,
            our diverse product range is meticulously designed to cater to the individual needs of every customer.
            As one of the rare companies in India, we deliver elevator solutions across multiple segments, including <span style={{ fontWeight: 'bold' }}>Home Elevators,
              Platform Lifts, and MRL Elevators </span>, encompassing a comprehensive spectrum. Our home lifts are exclusively <span style={{ fontWeight: 'bold' }}>manufactured in Italy</span>,
            adhering to  <span style={{ fontWeight: 'bold' }}>European Standards</span>, guaranteeing an optimal and luxurious solution for your residence." </Typography>
        </Grid>
        <Grid item>

          <Card>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                sx={{ height: '143vh', backgroundColor: 'white', opacity: 0.12 }}
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
                  // padding: '2% 1% 2% 1%',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center'
                }}
              >
                <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '5rem 0rem 5rem 0rem' }}>
                  {/* Prod - 1 */}
                  <Grid item sx={{ height: '51%', width: '60%' }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '1rem 3rem 1rem 1rem' }}>
                      <Grid item>
                        <StyledBox>
                          <CardMedia
                            sx={{ height: '31rem', width: '15rem', borderRadius: '0.7rem' }}
                            image={product1}
                            // onMouseEnter={(e) => {handlePopoverOpen(e, "product1")}}
                            onMouseLeave={(e) => { handlePopoverClose(e, "product1") }}
                            onClick={(e) => { handlePopoverOpen(e, "product1") }}
                          />
                        </StyledBox>

                        <Popover
                          id="mouse-over-popover"
                          sx={{
                            pointerEvents: 'none',
                            backgroundColor: '#3930306e',
                            height: 'auto',
                            overflow: 'scroll'
                          }}
                          open={anchorEl1}
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'center',
                            horizontal: 'left',
                          }}
                          onClose={handlePopoverClose}
                          disableRestoreFocus
                          onRequestClose={handlePopoverClose}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold',  color: 'crimson'  }}> Technical Specifications
                            </Typography>
                          </Box>
                          <Box p='1rem' sx={{ maxWidth: '60vh' }}><Typography variant='body2'>Elevate your expectations with our cutting-edge Belt technology and rivet-less shaft,
                            setting our elevators apart globally. While competitors struggle to meet current home elevator
                            standards like MD 2006 42 EC and EN 81-41, our elevators not only meet but exceed them. With the
                            ability to easily update and diagnose, we confidently dominate the Home Elevator Industry.</Typography></Box>
                          <img height='400vh' width='400vh' src={productSpec1} />
                        </Popover>
                      </Grid>
                      <Grid item sx={{ padding: '2.5rem 0.5rem 1rem 0.5rem', width: '100%' }}>
                        <Typography variant='h6' sx={{ color: HeaderColor, boxShadow: '2px 2px 20px #E09900' }}>BRIO <b>GEARLESS BELT</b></Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* Prod - 2 */}
                  <Grid item sx={{ height: '51%', width: '60%', paddingTop: '13rem' }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '1rem 3rem 1rem 1rem' }}>
                      <Grid item>
                        <StyledBox>
                          <CardMedia
                            sx={{ height: '31rem', width: '15rem', borderRadius: '0.5rem' }}
                            image={product2}
                            // onMouseEnter={(e) => {handlePopoverOpen(e, "product2")}}
                            onMouseLeave={(e) => { handlePopoverClose(e, "product2") }}
                            onClick={(e) => { handlePopoverOpen(e, "product2") }}
                          />
                        </StyledBox>

                        <Popover
                          id="mouse-over-popover"
                          sx={{
                            pointerEvents: 'none',
                            backgroundColor: '#3930306e',
                            height: 'auto',
                            overflow: 'scroll'
                          }}
                          open={anchorEl2}
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'center',
                            horizontal: 'left',
                          }}
                          onClose={handlePopoverClose}
                          disableRestoreFocus

                        >
                          <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}><Typography variant='h5' sx={{ fontWeight: 'bold', color: 'crimson' }}> Technical Specifications</Typography></Box>
                          <Box p='1rem' sx={{ maxWidth: '60vh' }}><Typography variant='body2'>BRIO Gearless unique traction lift solution that complies with lifts Directive
                            2014/33/EU. Installation can be customized to any architectural need and design,
                            even special and challenging projects. It is an elegant and, above all, truly convenient solution,
                            allowing for perfect fitting within any existing or new building.</Typography></Box>
                          <img height='400vh' width='400vh' src={productSpec2} />
                        </Popover>
                      </Grid>
                      <Grid item sx={{ padding: '2.5rem 0.5rem 1rem 0.5rem', width: '100%' }}>
                        <Typography variant='h6' sx={{ color: HeaderColor, boxShadow: '2px 2px 20px #E09900' }}>BRIO <b>GEARLESS ROPE</b></Typography></Grid>
                    </Grid>
                  </Grid>
                  {/* Prod - 3 */}
                  <Grid item sx={{ height: '51%', width: '60%' }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '1rem 3rem 1rem 1rem' }}>
                      <Grid item>
                        <StyledBox>
                          <CardMedia
                            sx={{ height: '31rem', width: '15rem', borderRadius: '0.5rem' }}
                            image={product3}
                            // onMouseEnter={(e) => {handlePopoverOpen(e, "product3")}}
                            onMouseLeave={(e) => { handlePopoverClose(e, "product3") }}
                            onClick={(e) => { handlePopoverOpen(e, "product3") }}
                          />
                        </StyledBox>

                        <Popover
                          id="mouse-over-popover"
                          sx={{
                            pointerEvents: 'none',
                            backgroundColor: '#3930306e',
                            height: 'auto',
                            overflow: 'scroll'
                          }}
                          open={anchorEl3}
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'center',
                            horizontal: 'left',
                          }}
                          onClose={handlePopoverClose}
                          disableRestoreFocus
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'center', color: HeaderColor, padding: '1rem' }}><Typography variant='h5' sx={{ fontWeight: 'bold',  color: 'crimson'  }}> Technical Specifications</Typography></Box>
                          <Box p='1rem' sx={{ maxWidth: '60vh' }}>
                            <Typography variant='body1'> Indulge in opulence with our Brio
                              Imported Hydraulic Technology, a versatile lift designed for an array of applications.
                              Powered by established and dependable hydraulic technology, this system ensures a
                              seamless and reliable experience.</Typography></Box>
                          <img height='400vh' width='400vh' src={productSpec3} />
                        </Popover>
                      </Grid>
                      <Grid item sx={{ padding: '2.5rem 0.5rem 1rem 0.5rem', width: '100%' }}>
                        <Typography variant='h6' sx={{ color: HeaderColor, boxShadow: '2px 2px 20px #E09900' }}>BRIO <b>HYDRAULIC</b></Typography></Grid>
                    </Grid>
                  </Grid>
                  {/* Prod - 4 */}
                  <Grid item sx={{ height: '51%', width: '60%', paddingTop: '13rem' }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '1rem 3rem 1rem 1rem' }}>
                      <Grid item>
                        <StyledBox>
                          <CardMedia
                            sx={{ height: '31rem', width: '15rem', borderRadius: '0.5rem' }}
                            image={product4}
                            // onMouseEnter={(e) => {handlePopoverOpen(e, "product4")}}
                            onMouseLeave={(e) => { handlePopoverClose(e, "product4") }}
                            onClick={(e) => { handlePopoverOpen(e, "product4") }}
                          />
                        </StyledBox>

                        <Popover
                          id="mouse-over-popover"
                          sx={{
                            pointerEvents: 'none',
                            backgroundColor: '#3930306e',
                            height: 'auto',
                            overflow: 'scroll'
                          }}
                          open={anchorEl4}
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'center',
                            horizontal: 'left',
                          }}
                          onClose={handlePopoverClose}
                          disableRestoreFocus
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'center', color: HeaderColor, padding: '1rem' }}><Typography variant='h5' sx={{ fontWeight: 'bold', color: 'crimson'  }}> Technical Specifications</Typography></Box>
                          <Box p='1rem' sx={{ maxWidth: '60vh' }}>
                            <Typography variant='body1'> Our extensive product lineup ensures that we provide an accessibility solution tailored to
                              every home. Just as each unit is uniquely crafted to user specifications, our diverse product range is meticulously designed
                              to cater to the individual needs of every customer. </Typography></Box>
                          <img height='400vh' width='400vh' src={productSpec4} />
                        </Popover>
                      </Grid>
                      <Grid item sx={{ padding: '2.5rem 0.5rem 1rem 0.5rem', width: '100%' }}>
                        <Typography variant='h6' sx={{ color: HeaderColor, boxShadow: '2px 2px 20px #E09900' }}>BRIO <b>MOBILITY SERIES</b></Typography></Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>

        </Grid>
      </Grid>
    </Grid>

    <Box padding='0rem'>
      <ProductSpecsContainer isDeskTopDevice={props.isDeskTopDevice} />
    </Box>

    <Grid item sx={{ display: 'flex', justifyContent: 'end', width: '100%', padding: '2rem 3rem 1rem 0rem' }}>
      <Button variant="contained"
        sx={{
          width: '20%',
          boxShadow: '10px 10px 5px #3930306e',
          padding: '0.9rem',
          fontSize: '1rem',
          borderRadius: '1.5rem',
          backgroundColor: 'crimson'
        }}
        onClick={onDownload}>
        Download Broucher
      </Button>
    </Grid>

  </Grid>
}


// function showProductsForMobile() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return <Grid sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>

//     <Grid item>
//       <Grid sx={{ flexDirection: 'column', width: '100%', dispaly: 'flex', justifyContent: 'center', textAlign: 'center' }}>
//         <Grid item>
//           <Typography variant='h4' sx={{ color: HeaderColor, padding: '2rem' }}>Our Products</Typography>
//           <Typography variant='h6' sx={{ color: HeaderColor }}>Brio employs Advanced Safety Gears designed for high speeds and  advanced energy saving VVVF
//             elevator system. The elevator has sensors that use Multiple
//             Infrared Beams to watch the whole doorway. </Typography>
//         </Grid>
//         <Grid item sx={{ paddingTop: '1.5rem' }}>
//           <Box sx={{
//             maxWidth: 400,
//             flexGrow: 1,
//             borderRadius: '0.5rem',
//             boxShadow: '8px 8px 5px #3930306e',
//             borderBottom: '2px solid #3930301f',
//             borderRight: '2px solid #39303008',
//             borderLeft: '2px solid #39303008'
//           }}>
//             <AutoPlaySwipeableViews
//               axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//               index={activeStep}
//               onChangeIndex={handleStepChange}
//               enableMouseEvents
//             >
//               {images.map((step, index) => (
//                 <div key={step.label}>
//                   {Math.abs(activeStep - index) <= 2 ? (
//                     <Box
//                       component="img"
//                       sx={{
//                         height: '65vh',
//                         display: 'block',
//                         overflow: 'hidden',
//                         width: '100%',
//                       }}
//                       src={step.imgPath}
//                       alt={step.label}
//                     />
//                   ) : null}
//                   <Paper
//                     square
//                     sx={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       textAlign: 'center',
//                       height: 'auto',
//                       width: '100%',
//                       justifyContent: 'center',
//                       paddingTop: '1.5rem',
//                       paddingBottom: '1.5rem'
//                     }}
//                   >
//                     <Typography variant='h6' sx={{ color: GoldColor, fontWeight: 30 }}>{images[activeStep].label}</Typography>
//                   </Paper>
//                 </div>
//               ))}
//             </AutoPlaySwipeableViews>
//             <MobileStepper
//               steps={maxSteps}
//               position="static"
//               activeStep={activeStep}
//               nextButton={
//                 <Button
//                   size="small"
//                   onClick={handleNext}
//                   disabled={activeStep === maxSteps - 1}
//                 >
//                   {/* Next */}
//                   {theme.direction === 'rtl' ? (
//                     <KeyboardArrowLeft />
//                   ) : (
//                     <KeyboardArrowRight />
//                   )}
//                 </Button>
//               }
//               backButton={
//                 <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//                   {theme.direction === 'rtl' ? (
//                     <KeyboardArrowRight />
//                   ) : (
//                     <KeyboardArrowLeft />
//                   )}
//                   {/* Back */}
//                 </Button>
//               }
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Grid>

//     <Grid item sx={{ display: 'flex', justifyContent: 'center', padding: '4rem 1rem 4rem 1rem', width: '100%' }}>
//       <Button variant="contained" sx={{
//         width: '100%',
//         boxShadow: '10px 10px 5px #3930306e',
//         padding: '0.9rem 1.5rem 0.9rem 1.5rem',
//         fontSize: '1rem',
//         borderRadius: '1.5rem'
//       }}>
//         Download Broucher
//       </Button>
//     </Grid>

//   </Grid>
// }

function ProductsElevationContainer(props) {

  const [anchorEl, setAnchorEl] =   useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [anchorEl4, setAnchorEl4] = useState(null);
  
  const handlePopoverOpen = (e, name) => {

    setAnchorEl(e.currentTarget);
    switch (name) {
      case "product1":
        setAnchorEl1(true);
        setAnchorEl2(false);
        setAnchorEl3(false);
        setAnchorEl4(false);

        break;
      case "product2":
        setAnchorEl1(false);
        setAnchorEl2(true);
        setAnchorEl3(false);
        setAnchorEl4(false);
        break;
      case "product3":
        setAnchorEl1(false);
        setAnchorEl2(false);
        setAnchorEl3(true);
        setAnchorEl4(false);
        break;
      case "product4":
        setAnchorEl1(false);
        setAnchorEl2(false);
        setAnchorEl3(false);
        setAnchorEl4(true);
        break;
      default:
        break;
    }
  };
  const handlePopoverClose = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setAnchorEl1(false);
    setAnchorEl2(false);
    setAnchorEl3(false);
    setAnchorEl4(false);
  };

  return (
    <>{props.isDeskTopDevice && showProductsForDesktop(props, 
    handlePopoverOpen, 
    handlePopoverClose,
    anchorEl,
    anchorEl1,
    anchorEl2,
    anchorEl3,
    anchorEl4
     )}
      {/* {!props.isDeskTopDevice && showProductsForMobile()} */}
      </>
  );
}

export default ProductsElevationContainer;