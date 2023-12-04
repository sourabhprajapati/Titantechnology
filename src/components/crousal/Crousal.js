import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
// import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import "./crousal.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
const Crousal = () => {
  return (
    <>
      <Carousel fade>
        {/* <Carousel.Item interval={1000}>
          
            <img
             
              className="d-block w-100 "
              src={img1}
              alt="First slide"
            />
         </Carousel.Item> */}
        {/* <Box sx={{ position: "absolute", top: {xl:180,lg:180,md:50,sm:30,xs:30}, left: {xl:140,lg:140,md:140,sm:100,xs:100} }}>
            <ThemeProvider theme={theme}>
              <Typography variant="h5" color="white">
                TODAY TALENT,TOMORROW'S SUCCESS
              </Typography>
              <Typography
                variant="h1"
                color="white 
            "
                sx={{ mt: 3, fontWeight: "bold" }}
              >
                The Future is Bright
              </Typography>
              <Button variant="contained" sx={{ p: {xl:2,lg:2,md:2,sm:1,xs:1}, fontWeight: 100, mt: {xl:4 ,lg:4 ,md:2 ,sm:1 ,xs:1 } ,size:{xl:"large",lg:"large",md:"medium",sm:"small",xs:"small"}}}>
                FREE CONSULTATION
              </Button>
            </ThemeProvider>
          </Box> */}

        <Carousel.Item interval={1000}>
          <img
            height={{ height: "100vh" }}
            className="d-block w-100 "
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: {
            xl: "flex",
            lg: "flex",
            md: "block",
            sm: "block",
            xs: "block",
          },
          position:"relative"
        }}
       
      >
        <Box
          sx={{
            width: {
              xl: "50vw",
              lg: "50vw",
              md: "85vw",
              sm: "85vw",
              xs: "85vw",
            },
            height: {
              xl: "100vh",
              lg: "100vh",
              md: "50vh",
              sm: "50vh",
              xs: "50vh",
            },
            display: "flex",
            flexDirection:"column",
            justifyContent: { xl: "center", lg: "center" },
            ml: 6,
            mt: { xs: 4, sm: 4, md: 4 },
          }}
        >
          <Typography
            variant="h6"
            color="#0788CA"
            sx={{
              fontWeight: { xl: 700, lg: 700, md: 800, sm: 800, xs: 800 },
              fontSize: {
                xl: "1.5vw",
                lg: "1.5vw",
                md: "2vw",
                sm: "2.5vw",
                xs: "3vw",
              },
              lineHeight: "1.5vw",
            }}
          >
            TITANTECHNOLOGY MISSION & VISION
          </Typography>
          <Typography
            variant="h3"
            color="black"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xl: "3vw",
                lg: "3vw",
                md: "4vw",
                sm: "4.5vw",
                xs: "5vw",
              },
              lineHeight: {
                xl: "4vw",
                lg: "4vw",
                md: "5vw",
                sm: "6vw",
                xs: "6.5vw",
              },
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="h3"
            color="#0788CA"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xl: "3vw",
                lg: "3vw",
                md: "4vw",
                sm: "4.5vw",
                xs: "5vw",
              },
              lineHeight: {
                xl: "1.5vw",
                lg: "1.5vw",
                md: "3vw",
                sm: "2.5vw",
                xs: "2.5vw",
              },
            }}
          >
            Successful Business
          </Typography>
          <Typography
            variant="p"
            color="black"
            sx={{
              fontWeight: { xl: 500, lg: 500, md: 600, sm: 600, xs: 600 },
              fontSize: {
                xl: "1.5vw",
                lg: "1.5vw",
                md: "2vw",
                sm: "2.5vw",
                xs: "3vw",
              },
              lineHeight: {
                xl: "1.5vw",
                lg: "1.5vw",
                md: "3vw",
                sm: "3vw",
                xs: "3.5vw",
              },
              mt: 1,
            }}
          >
            Distinctively re-engineer revolutionary meta-services and premium
            architectures. Intrinsically incubate intuitive opportunities and
            real-time potentialities. Appropriately communicate one-to-one
            technology after plug-and-play networks.
          </Typography>
          <Button
            variant="contained"
            sx={{
              p: { xl: 2, lg: 2, md: 2, sm: 2, xs: 2 },
              mr: { xl: 50, lg: 50, md: 80, sm: 50, xs: 30 },
              mt: 3,
              fontWeight: 100,
            }}
            size="large"
          >
            READ MORE
          </Button>
        </Box>
         
      </Box>
    </>
  );
};

export default Crousal;
