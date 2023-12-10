import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import productVideo from "./../asserts/Gearless & Hydraulic final.mp4";
import { GoldColor, HeaderColor, SubHeaderColor } from "./Constants";
import Card from "@mui/material/Card";
import {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  CardActionArea,
} from "@mui/material";
import features from './../asserts/features.png';

function VideoBannerContainer(props) {
  return (
    <Grid
      sx={{
        flexDirection: "column",
        width: "100%",
        dispaly: "flex",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1rem 1rem 1rem",
        columnGap: '1rem'
      }}
    >
      <Grid item sx={{ borderRadius: "2rem", backgroundColor: "#faf6ed" }}>
        <Card sx={{ boxShadow: "none" }}>
        <CardMedia
              sx={{ height: '65vh' }}
              image={features}
            />
          {/* <Grid sx={{ display: "flex", flexDirection: "row"}}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "center",
                flex: "1 0 auto",
                // backgroundColor: '#f4f4f4'
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 2,
                  padding: "1rem",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Grid
                    sx={{
                      display: "flex",
                      columnGap: "1.5rem",
                      width: "100%",
                      justifyContent: "center",
                      paddingBottom: "1rem",
                    }}
                  >
                    <Grid
                      item
                      sx={{
                        width: "7%",
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
                        sx={{ paddingTop: "0.5rem", color: HeaderColor }}
                      >
                        Brio Elevators equiped with
                      </Typography>
                    </Grid>
                    <Grid item sx={{ width: "7%", alignContent: "center" }}>
                      <img
                        src={
                          "https://assets-global.website-files.com/6011ced336f3c77caf0e1dad/61b77d0cf185ea70e4ca17a0_crest-right.svg"
                        }
                        height="90%"
                        width="90%"
                      />
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  sx={{
                    paddingLeft: "0rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "2rem",
                      // backgroundColor: "green",,
                      color: GoldColor,
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6">
                      Advanced Door Control system
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    paddingLeft: "0rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "2rem",
                      // backgroundColor: "green",,
                      color: GoldColor,
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6">
                      Enhanced fault detection and reporting system
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    paddingLeft: "0rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "2rem",
                      // backgroundColor: "green",,
                      color: GoldColor,
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6">
                      Advanced Authentication system
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    paddingLeft: "0rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "2rem",
                      // // backgroundColor: "green",,
                      color: GoldColor,
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6">Staged Safety Gear</Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    paddingLeft: "0rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "2rem",
                      // backgroundColor: "green",,
                      color: GoldColor,
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6">
                      Multiple Layered Safety
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    paddingLeft: "0rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "2rem",
                      // backgroundColor: "green",,
                      color: GoldColor,
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6">
                      Magnetic Controls with Advanced Landing ( PMSM)
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    paddingLeft: "0rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "2rem",
                      // backgroundColor: "green",,
                      color: GoldColor,
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6">
                      Multi Beam Light Curtains
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    paddingLeft: "0rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      height: "2rem",
                      // backgroundColor: "green",,
                      color: GoldColor,
                      width: "100%",
                    }}
                  >
                    <Typography variant="h6">
                      Advanced Integrated controllers
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              sx={{ display: "flex", width: "60%", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  backgroundColor: '#104c8a63',
                  borderRadius: "1rem",
                }}
              >
                <CardMedia
                  component="iframe"
                  src={productVideo}
                  sx={{
                    height: "70vh",
                    width: "100%",
                    borderRadius: "1rem",
                    // border: "0rem solid #100100100100",
                    padding: '0.3rem'
                  }}
                  allow="autoPlay"
                />
              </Box>
            </Grid>
          </Grid> */}
        </Card>
      </Grid>
    </Grid>
  );
}

export default VideoBannerContainer;
