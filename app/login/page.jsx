"use client"

import { Button, Stack, TextField, Typography } from '@mui/material';
import { Box, Grid, colors } from '@mui/material';
import React, { useState } from 'react';
import assets from '../../assets'
import SigninForm from '../../components/SigninForm';
import SignupForm from '../../components/SignupForm';

export const ScreenMode = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP"
};

const SigninPage = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState("unset");
  const [width, setWidth] = useState(0);


  const [backgroundImage, setBackgroundImage] = useState(assets.images?.signinBg);
  const [currMode, setCurrMode] = useState(ScreenMode.SIGN_IN);


  const onSwitchMode = (mode) => {
    setWidth(100);

    const timeout1 = setTimeout(() => {
      setCurrMode(mode);
      setBackgroundImage(mode === ScreenMode.SIGN_IN ? assets.images.signinBg : assets.images.signupBg);
    }, 1100);

    const timeout2 = setTimeout(() => {
      setLeft("unset");
      setRight(0);
      setWidth(0);
    }, 1200);

    const timeout3 = setTimeout(() => {
      setRight("unset");
      setLeft(0);
    }, 2500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  };

  return (
    <>
      <div className='hidden md:block'>
        <Grid container sx={{ height: "100vh" }}>
          <Grid item xs={4} sx={{ position: "relative", padding: 3 }}>
            {
              currMode === ScreenMode.SIGN_IN ? (
                <SigninForm onSwitchMode={onSwitchMode} />
              ) : (
                <SignupForm onSwitchMode={onSwitchMode} />
              )
            }
            <Box sx={{
              position: "absolute",
              top: 0,
              left: left,
              right: right,
              width: `${width}%`,
              height: "100%",
              bgcolor: colors.grey[800],
              transition: "all 1s ease-in-out",
              display: { sx: 'hidden' }
            }} />
          </Grid>
          <Grid item xs={8} sx={{
            position: "relative",
            backgroundImage: `url(${backgroundImage.default.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}>
            <Box sx={{
              position: "absolute",
              top: 0,
              left: left,
              right: right,
              width: `${width}%`,
              height: "100%",
              bgcolor: colors.common.white,
              transition: "all 1s ease-in-out"
            }} />
          </Grid>
        </Grid>
      </div>
      <div className='block md:hidden'>
        <Box sx={{ position: "relative", padding: 3, height: '100vh' }}>
          {
            currMode === ScreenMode.SIGN_IN ? (
              <SigninForm onSwitchMode={onSwitchMode} />
            ) : (
              <SignupForm onSwitchMode={onSwitchMode} />
            )
          }
          <Box sx={{
            position: "absolute",
            top: 0,
            left: left,
            right: right,
            width: `${width}%`,
            height: "100%",
            backgroundImage: `url(${backgroundImage.default.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transition: "all 1s ease-in-out",
          }} />
        </Box>
      </div>
    </>
  );
};

export default SigninPage;