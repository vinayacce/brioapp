import { Grid, Box } from '@mui/material';

function showImage(isDeskTopDevice) {
  if (isDeskTopDevice) {
    return <>
      <Grid xs sx={{ width: '50vh', height: '50vh', backgroundColor: 'white', padding: '1vh' }}>
        <Box sx={{ backgroundColor: 'yellow', height: '100%' }}>
          About Company
        </Box>
      </Grid>
      <Grid xs sx={{ height: '50vh', backgroundColor: 'white', padding: '1vh' }}>
        <Box sx={{ backgroundColor: 'yellow', height: '100%' }}>
          Image
        </Box>
      </Grid>
    </>
  } else {
   return <Grid xs sx={{ width: '100vh', height: '50vh', backgroundColor: 'white', padding: '1vh' }}>
      <Box sx={{ backgroundColor: 'yellow', height: '100%' }}>
        About Company
      </Box>
    </Grid>
  }
}

function AboutContainer(props) {
  return (
    <Grid container sx={{ height: '50vh', backgroundColor: 'orange', alignItems: 'center', padding: '1vh' }}>
      {showImage(props.isDeskTopDevice)}
    </Grid>
  );
}

export default AboutContainer;