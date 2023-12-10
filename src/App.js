import React, {useEffect, useState} from 'react';
import './App.css';
import AppHeader from './Pages/appHeader';
import { useMediaQuery } from 'react-responsive';
import CompanyFooterContainer from './Pages/CompanyFooterContainer';
// import ProductSpecsContainer from './Pages/ProductSpecsContainer';
import MinPageAboutUsContainer from './Pages/MinPageAboutUsContainer';
import HomeSeriesElevationContainer from './Pages/HomeSeriesElevationContainer';
import NoPitElevationsContainer from './Pages/NoPitElevations';
import ProductsElevationContainer from './Pages/ProductsElevationContainer';
import SubmitQueryContainer from './Pages/SubmitQueryContainer';
import VideoBannerContainer from './Pages/VideoBannerContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Bigbanner from './Pages/BigBannerElevationContainer';
import ProductSpecsContainer from './Pages/ProductSpecsContainer';
import ReviewContainer from './Pages/ReviewsContainer';
import SubmitFormDialog from '../src/components/SubmitFormDialog';
import EliganceAndStyle from './Pages/EliganceAndStyleElevationContainer';
import { Box } from '@mui/material';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Didact Gothic',
      // fontSize: '48px'
      // fontFamily: 'Elena, serif'
      // fontFamily: 'Neuehaasdisplay mediu,sans-serif'
      // fontFamily: 'Quincy CF,Georgia,sans-serif'
      // fontFamily: 'DM Sans,Verdana,sans-serif'
    },
  },
  // typography: {
  //   fontFamily: [
  //     'DM Sans,Verdana,sans-serif',
  //     '-apple-system',
  //     'BlinkMacSystemFont',
  //     '"Segoe UI"',
  //     'Roboto',
  //     '"Helvetica Neue"',
  //     'Arial',
  //     'sans-serif',
  //     '"Apple Color Emoji"',
  //     '"Segoe UI Emoji"',
  //     '"Segoe UI Symbol"',
  //   ].join(','),
  // }
});

function App() {
  const isDeskTopDevice = useMediaQuery({
    query: "(min-device-width: 800px)",
  });

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem('shouldOpenPopUp') === "true") {
      setOpenDialog(true);
    } else {
      setOpenDialog(false);
    }
}, [window.sessionStorage.getItem('shouldOpenPopUp')]);

  const onFreeSiteCheckButtonCLick = () => {
    window.sessionStorage.setItem('shouldOpenPopUp', "true");
  }

  const onCloseFreeSiteCheckButtonCLick = () => {
    setOpenDialog(false);
    window.sessionStorage.setItem('shouldOpenPopUp', "false");
  }

  useEffect(() => {
    if (!window.sessionStorage.getItem('shouldOpenPopUp')) {
      onFreeSiteCheckButtonCLick();
    }
});

const handleScroll = () => {
  const position = window.pageYOffset;
  // setScrollPosition(position);
  // console.log(position); -- 2668
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <ThemeProvider theme={theme}>
      <>
      <SubmitFormDialog open={openDialog} handleClose={onCloseFreeSiteCheckButtonCLick} buttonText='Get Free Site Feasibility Check' isOpeningDialog={true}/>
        <AppHeader isDeskTopDevice={isDeskTopDevice} />
        <HomeSeriesElevationContainer isDeskTopDevice={isDeskTopDevice} />
        <MinPageAboutUsContainer isDeskTopDevice={isDeskTopDevice} />
        
        <div id="content">
        <ProductsElevationContainer isDeskTopDevice={isDeskTopDevice} />
        </div>
        <NoPitElevationsContainer isDeskTopDevice={isDeskTopDevice} />
        <VideoBannerContainer isDeskTopDevice={isDeskTopDevice} />
        {/* <ProductSpecsContainer isDeskTopDevice={isDeskTopDevice}/> */}
        <Bigbanner isDeskTopDevice={isDeskTopDevice} />
        <EliganceAndStyle isDeskTopDevice={isDeskTopDevice} />
        <ReviewContainer isDeskTopDevice={isDeskTopDevice} />
        <SubmitQueryContainer isDeskTopDevice={isDeskTopDevice} />
        <CompanyFooterContainer isDeskTopDevice={isDeskTopDevice} />
      </>

    </ThemeProvider>
  );
}

export default App;
