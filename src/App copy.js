import React from 'react';
import './App.css';
import AppHeader from './Pages/appHeader';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import CompanyProfileContainer from './Pages/CompanyProfileContainer';
import { useMediaQuery } from 'react-responsive';
import ContactUsContainer from './Pages/ContactUsContainer'
import CompanyFooterContainer from './Pages/CompanyFooterContainer';
import CompanySpecs from './Pages/CompanySpecsContainer';
import ProductSpecsContainer from './Pages/ProductSpecsContainer';
import ProductsContainerV2 from './Pages/ProductsContainerV2';
import MinPageAboutUsContainer from './Pages/MinPageAboutUsContainer';
import HomeSeriesElevationContainer from './Pages/HomeSeriesElevationContainer';
import NoPitElevationsContainer from './Pages/NoPitElevations';
import ProductsElevationContainer from './Pages/ProductsElevationContainer';
import ProjectsContainer from './Pages/ProjectsContainer';
import SubmitQueryContainer from './Pages/SubmitQueryContainer';
import VideoBannerContainer from './Pages/VideoBannerContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Neuehaasdisplay mediu,sans-serif'
      // fontFamily: 'Quincy CF,Georgia,sans-serif;'
    },
  },
});

function App() {
  const isDeskTopDevice = useMediaQuery({
    query: "(min-device-width: 800px)",
  });

  return (
    <ThemeProvider theme={theme}>
 <>
      {/* C1 */}
      <AppHeader isDeskTopDevice={isDeskTopDevice} />
      {/* <Container maxWidth> */}
      {/* C2 */}
      {/* <ProductsContainer isDeskTopDevice={isDeskTopDevice} /> */}
      {/* <ProductsContainerV2 isDeskTopDevice={isDeskTopDevice}/> */}
      <MinPageAboutUsContainer isDeskTopDevice={isDeskTopDevice} />
      {/* C3 */}
      {/* <ProductSpecsContainer isDeskTopDevice={isDeskTopDevice} /> */}
      <HomeSeriesElevationContainer isDeskTopDevice={isDeskTopDevice} />
      {/* C4 */}
      {/* <NoPitElevationsContainer isDeskTopDevice={isDeskTopDevice} />  vvvvvvv */}
      {/* <Bigbanner isDeskTopDevice={isDeskTopDevice} /> */}
      {/* Product embracemnets/ eligance from booklet */}
      {/* <Bigbanner isDeskTopDevice={isDeskTopDevice}/> */}
      {/* C5 */}
      {/* <ProductsElevationContainer isDeskTopDevice={isDeskTopDevice} /> */}
      {/* <CompanyProfileContainer isDeskTopDevice={isDeskTopDevice} /> */}
      {/* C6 */}
      {/* <VideoBannerContainer isDeskTopDevice={isDeskTopDevice}/>  vvvvvvv */}
      {/* <ProjectsContainer isDeskTopDevice={isDeskTopDevice} />  vvvvvvv */}
      {/* <CompanySpecs isDeskTopDevice={isDeskTopDevice} /> */}
      {/* C7 */}
      {/* <SubmitQueryContainer isDeskTopDevice={isDeskTopDevice} />  vvvvvvv */}
      {/* <ContactUsContainer isDeskTopDevice={isDeskTopDevice} /> */}
      {/* Final Footer Details */}
      {/* </Container> */}
      {/* C8 */}
      {/* <CompanyFooterContainer isDeskTopDevice={isDeskTopDevice} />  vvvvvvv */}
    </>
    </ThemeProvider>
  );
}

export default App;
