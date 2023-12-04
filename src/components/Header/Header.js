import React, { useState } from "react";
import "./header.css";
import Box from "@mui/material/Box";
import Logo from "./logo/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import IconButton from "@mui/material/IconButton";
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider';
import { margin } from "@mui/system";

const Header = () => {
  const [isDraweropen, setisDraweropen] = useState(false);
  return (
    <>
      <Box
        sx={{
          height: {
            xs: "8vh",
            sm: "8vh",
            md: "8vh",
            lg: "13vh",
            xl: "13vh",
          },
          backgroundColor: "white",
          position: "sticky",
          top: 0,
          zIndex: 4,
          display: "flex",
          justifyContent: {
            xs: "space-between",
            sm: "space-between",
            md: "space-between",
            lg: "center",
            xl: "center",
          },
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="hii" className="logo" />
        <IconButton size="large" edge="start" color="inherit" aria-label="logo" onClick={()=>setisDraweropen(true)}>
          <MenuIcon
            sx={{
              display: {
                xs: "flex-end",
                sm: "flex-end",
                md: "block",
                lg: "none",
                xl: "none",
              },
            }}
           
          />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={isDraweropen}
          onClose={() => setisDraweropen(false)}
        >
          <Box  width="300px" height="100vh" role="presentation">
              <Box sx={{height:"70px",backgroundColor:"#EDF3F6"}}>
                   <img src={Logo} alt="" srcset="" height="70px" width="150px"  />
              </Box>
             <Typography variant="h6" color="black"  p="20px">Home</Typography>
             <Divider/>
             <Typography variant="h6" color="black"  p="20px">About</Typography>
             <Divider/>
             <Typography variant="h6" color="black"  p="20px">Solution</Typography>
             <Divider/>
             <Typography variant="h6" color="black"  p="20px">Services</Typography>
             <Divider/>
             <Typography variant="h6" color="black" p="20px">Industry</Typography>
             <Divider/>
             <Typography variant="h6" color="black"  p="20px">Product</Typography>
             <Divider/>
             <Typography variant="h6" color="black"  p="20px">Our Client</Typography>
             <Divider/>
             <Typography variant="h6" color="black"  p="20px">Carees</Typography>
             <Divider/>
             <Typography variant="h6" color="black"  p="20px">Contact</Typography>
             <Divider/>

          </Box>
        </SwipeableDrawer>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Solution</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Industry</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Our Client</a>
              </li>
              <li>
                <a href="#">Carees</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </Box>
      </Box>
    </>
  );
};

export default Header;
