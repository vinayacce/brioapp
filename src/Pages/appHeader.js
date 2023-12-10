import React, { useRef, useState } from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import mainimage from "./../asserts/MainPageIamges.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import companyLogo from "./../asserts/companylogo.svg";
import tuv from "./../asserts/tuvImg.png";
import tuv2 from "./../asserts/tuv2.png";
import Button from "@mui/material/Button";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SubmitFormDialog from "../components/SubmitFormDialog";
import { css, keyframes } from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { HeaderColor, GoldColor, emailId } from "./Constants";
import MailIcon from "@mui/icons-material/Mail";
import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';
import './duck.scss';

const styles = {
  paperContainer: {
    backgroundImage: `url(${mainimage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "97vh",
    width: "100%",
  },
};

const onHeaderItemsHover = {
  "&:hover": {
    color: GoldColor,
    cursor: "pointer",
  },
};

const animateBg = keyframes`
  0% { background-position: 0% 0%; }
  50% { background-position: 50% 0%; }
`;

const animatedGradient = {
  animation: css`
    ${animateBg} 1s linear infinite
  `,
  backgroundImage:
    "linear-gradient(90deg,#71c66c,#ff8000,#db5779,#71c66c,#ff8000)",
  backgroundSize: "100% 0%",
};

export default function AppHeader(props) {
  const [openDialog, setOpenDialog] = useState(false);

  const onFreeSiteCheckButtonCLick = () => {
    setOpenDialog(true);
  };

  const onCloseFreeSiteCheckButtonCLick = () => {
    setOpenDialog(false);
  };

  const [headerStyles, setHeaderStyles] = useState({
    display: "flex",
    padding: "1% 3% 1% 3%",
    justifyContent: "space-between",
    maxHeight: { xs: "4%", sm: "8%", md: "12%" },
    backgroundColor: "#faf6ed",
    alignItems: "center",
    position: "fixed",
    top: "0px",
    color: "#104c8a",
    width: "100%",
    zIndex: 999,
    boxShadow:
      "0 8px 18px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  });

  function showFloatButton() {
    return window.scrollY > 30;
  }

  const myRef = useRef(null);
  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  const scrollTo = (ref) => {
    if (myRef && myRef.current /* + other conditions */) {
      myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Submit Form Dialig */}
      <SubmitFormDialog
        open={openDialog}
        handleClose={onCloseFreeSiteCheckButtonCLick}
        buttonText="Get Free Site Feasibility Check"
      />
      <Box ref={myRef}>
        <Paper style={styles.paperContainer}>
          <Grid sx={{ height: "95vh" }}>

            {/* Header */}
            <Grid sx={headerStyles}>
              <Grid item>
                <img
                  src={companyLogo}
                  alt="BigCo Inc. logo"
                  style={{ width: "70%" }}
                />
              </Grid>
              <Grid item>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    columnGap: { xs: 2, sm: 4, md: 6 },
                  }}
                >
                  <Grid item sx={onHeaderItemsHover} onClick={executeScroll}>
                    <Typography variant="h6" sx={{fontWeight: 'bold'}}>Home</Typography>
                  </Grid>
                  <Grid item sx={onHeaderItemsHover} onClick={() => window.scrollTo({ top: 2668, behavior: "smooth" })}>
                    <Typography variant="h6" sx={{fontWeight: 'bold'}}>Products</Typography>
                  </Grid>
                  <Grid item sx={onHeaderItemsHover}>
                    <Grid sx={{ display: "flex",  color: 'crimson'  }}>
                      <Grid item>
                        <CallIcon
                          sx={{ fontSize: 30, paddingRight: "0.5rem" }}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="h5">
                          <b>+91-9398113939</b>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/*Main Heading */}
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                height: { xs: "100%", sm: "100%", md: "100%" },
                alignItems: "center",
                flexDirection: "column",
                color: "white",
              }}
            >
              <Grid
                item
                sx={{
                  backgroundColor: "#3930306e",
                  padding: "1.4% 12% 1.4% 12%",
                  boxShadow: "1px 1px 25px",
                }}
              >
                <Grid sx={{ display: "flex", justifyContent: "center" }}>
                  <Grid item sx={{ paddingRight: "0.8vh" }}>
                    <FormatQuoteIcon
                      sx={{ transform: "rotate(180deg)", color: GoldColor }}
                    />
                  </Grid>
                  <Grid item>
                    {/* <Typography sx={{ fontFamily: 'Fredericka the Great', fontSize: '2.7rem' }}>
                      BRIO, ELEVATES YOUR EXPECTATIONS
                    </Typography> */}
                    <Typography className='shineText' sx={{ fontFamily: 'Fredericka the Great', fontSize: '2.7rem' }}>
                      BRIO, ELEVATES YOUR EXPECTATIONS
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item padding="2%">
                <Button
                  sx={{ boxShadow: "10px 10px 5px #3930306e" }}
                  variant="contained"
                  onClick={onFreeSiteCheckButtonCLick}
                >
                  <Typography variant="body1">
                    Get Free Site Feasibility Check
                  </Typography>
                </Button>
              </Grid>
            </Grid>

            {/* Text with image */}
            <Grid sx={{
              display: 'flex',
              justifyContent: 'end',
              alignItems: 'center',
              position: 'absolute',
              bottom: '0',
              right: '0',
              paddingRight: '2%',
              width: { xs: '100%', sm: '80%', md: '55%' },
            }}>
              <Grid item sx={{ padding: '4% 3% 4% 7%', color: 'black' }}>
                <Box sx={{ border: '1.2px solid #0000009c', padding: '3px 16px 3px 16px', background: '#f0f1f27a', boxShadow: '10px 10px 5px #3930306e' }}><Grid>
                  <Grid item>
                    <Typography> Certified Home Elevators</Typography>
                  </Grid>
                  <Grid item>
                    <Typography> <b>at affortable cost from ITALY</b></Typography>
                  </Grid>
                </Grid>
                </Box>
              </Grid>
              <Grid item>
                <Box><img style={{ width: '76px' }} src={tuv} /></Box>
              </Grid>
            </Grid>
          </Grid>
          {showFloatButton() && (
            <Fab
              sx={{
                position: "fixed",
                bottom: 30,
                right: 40,
                backgroundColor: "grey",
                height: "1rem",
                width: "2.3rem",
              }}
              color="blue"
              onClick={executeScroll}
            >
              <UpIcon sx={{ height: "1rem", width: "1rem" }} />
            </Fab>
          )}

          {
            showFloatButton() && (

              <Fab
                sx={{
                  position: "fixed",
                  bottom: 280,
                  right: -35,
                  backgroundColor: 'crimson',
                  height: "2.5rem",
                  width: "7rem",
                  transform: 'rotate(90deg)',
                  borderRadius: '0'
                }}
                color="blue"
                onClick={onFreeSiteCheckButtonCLick}
                variant="extended"
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: "white" }}>Enquiry</Typography>
              </Fab>)
          }

        </Paper>
        <Box
          sx={{
            height: "16vh",
            backgroundColor: "#f4f4f4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid item sx={{ padding: "1rem" }}>
              <Grid sx={{ display: 'flex', columnGap: '1rem', width: '100%', justifyContent: 'center' }}>
                <Grid item sx={{ width: '10%', alignContent: 'center', transform: 'rotateY(180deg)' }}>
                  <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' color='#104c8a' />
                </Grid>
                <Grid item>
                  <Typography variant='h6' sx={{ paddingTop: '0.5rem', color: GoldColor, fontWeight: 'bold' }}>THE FIRST INDO - ITALIAN ELEVATOR COMPANY</Typography>
                </Grid>
                <Grid item sx={{ width: '10%', alignContent: 'center' }}>
                  <img src={'https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg'} height='90%' width='90%' />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
