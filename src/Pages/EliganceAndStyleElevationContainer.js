import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { GoldColor, HeaderColor } from "./Constants";
import { CardMedia, Card, CardActionArea, CardContent } from "@mui/material";
import eligance1 from "../asserts/cabin1.png";
import eligance2 from "../asserts/cabin2.png";
import eligance3 from "../asserts/cabin3.png";
import eligance4 from "../asserts/cabin4.png";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)`
  ${({ theme }) => `
    position: relative;
    // border: 8px solid #80808070;
    box-Shadow: 0.6rem 0.9rem 0.6rem #104c8a78;
    cursor: pointer;
    // background-color: ${theme.palette.primary.main};
    transition: ${theme.transitions.create(["background-color", "transform"], {
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

function EliganceAndStyleElevationContainer(props) {
  return (
    <Box sx={{ height: "100vh", padding: "0rem 5rem 10rem 5rem" }}>
      <Grid
        sx={{
          display: "flex",
          columnGap: "1.5rem",
          width: "100%",
          justifyContent: "center",
          padding: "8rem 4rem 0rem 4rem",
        }}
      >
        <Grid
          item
          sx={{
            width: "3%",
            alignContent: "center",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={
              "https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg"
            }
            height="90%"
            width="90%"
            color="#104c8a"
          />
        </Grid>
        <Grid item>
          <Typography
            variant="h4"
            sx={{ paddingTop: "0.5rem", color: GoldColor }}
          >
            Elegance and Style
          </Typography>
        </Grid>
        <Grid item sx={{ width: "3%", alignContent: "center" }}>
          <img
            src={
              "https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg"
            }
            height="90%"
            width="90%"
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="body1"
          sx={{
            width: "70%",
            color: HeaderColor,
            textAlign: "center",
            padding: "0.5rem 1rem 2rem 1rem",
            // fontWeight: 'bold'
          }}
        >
          The special models Crystal Clear with <span style={{fontWeight: 'bold'}}>Swarovski crystals, Liberty with
          Trend mosaics, Leather and Art, add exclusive style and elegance</span>,
          while enhancing any environment.
        </Typography>
      </Box>
      <Grid
        sx={{
          display: "flex",
          width: "auto",
          justifyContent: "center",
          border: "1px solid white",
          padding: "3rem 0rem 3rem 0rem",
          columnGap: 6,
          backgroundColor: "#f4f4f4",
        }}
      >
        <Grid item sx={{ display: "contents", padding: "2rem" }}>
          <Card
            sx={{
              maxWidth: 160,
              boxShadow: "none",
              backgroundColor: "#f4f4f4",
            }}
          >
            <CardMedia component="img" height="350" image={eligance1} />
            <Box sx={{ textAlign: "center", flexDirection: "column" }} pt= '1rem'>
              <span>
                <Typography
                  variant="h6"
                  sx={{ color: 'crimson', fontWeight: 'bold' }}
                >
                  
                  <span> Classic </span>{" "}
                </Typography>
              </span>
            </Box>
          </Card>
        </Grid>
        {/* <Grid item sx={{ display: 'contents', padding: '2rem' }}>
          <Box sx={{ height: '100%', width: '3%' }}></Box>
        </Grid> */}
        <Grid item></Grid>
        <Grid item sx={{ display: "contents" }}>
          {/* {EnergyEffecient()} */}
          <Card
            sx={{
              maxWidth: 160,
              boxShadow: "none",
              backgroundColor: "#f4f4f4",
            }}
          >
            <CardMedia component="img" height="350" image={eligance2} />
            <Box sx={{ textAlign: "center", flexDirection: "column" }} pt= '1rem'>
              <span>
                <Typography
                  variant="h6"
                  sx={{ color: 'crimson', fontWeight: 'bold' }}
                >
                  
                  <span> Pro-Cabin </span>{" "}
                </Typography>
              </span>
            </Box>
          </Card>
        </Grid>
        {/* <Grid item sx={{ display: 'contents', padding: '2rem' }}>
          <Box sx={{ height: '100%', width: '3%' }}></Box>
        </Grid> */}
        <Grid item></Grid>
        <Grid item sx={{ display: "contents" }}>
          {/* {AutomatedResuceDevice()} */}
          <Card
            sx={{
              maxWidth: 160,
              boxShadow: "none",
              backgroundColor: "#f4f4f4",
            }}
          >
            <CardMedia component="img" height="350" image={eligance3} />
            <Box sx={{ textAlign: "center", flexDirection: "column" }} pt= '1rem'>
              <span>
                <Typography
                  variant="h6"
                  sx={{ color: 'crimson', fontWeight: 'bold' }}
                >
                  
                  <span> Glass Cabin </span>{" "}
                </Typography>
              </span>
            </Box>
          </Card>
        </Grid>
        <Grid item sx={{ display: "contents", padding: "2rem" }}>
          <Box sx={{ height: "100%" }}></Box>
        </Grid>
        <Grid item sx={{ display: "contents" }}>
          {/* {ProgressiveSafetyGear()} */}
          <Card
            sx={{
              maxWidth: 160,
              boxShadow: "none",
              backgroundColor: "#f4f4f4",
            }}
          >
            <CardMedia component="img" height="350" image={eligance4} />
            <Box sx={{ textAlign: "center", flexDirection: "column" }} pt= '1rem'>
              <span>
                <Typography
                  variant="h6"
                  sx={{ color: 'crimson', fontWeight: 'bold' }}
                >
                  
                  <span> Elegance </span>{" "}
                </Typography>
              </span>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default EliganceAndStyleElevationContainer;
