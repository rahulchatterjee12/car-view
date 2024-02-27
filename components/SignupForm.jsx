import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import React, { useState } from 'react';
import { ScreenMode } from '@/constants';
import { ID, account } from '@/app/appwrite';


const SignupForm = ({ onSwitchMode }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  async function login(email, password) {
    try {

      const v = await account.createEmailPasswordSession(email, password);
      console.log(v)
      setLoggedInUser(await account.get());
    }
    catch (e) {
      console.log(e)
    }
  }

  const register = async (email, password, name) => {
    // await account.create(ID.unique(), email, password, name);
    login(email, password);
  };


  const onSubmit = (e) => {
    e.preventDefault()
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    register(email, password, name);
  }

  // console.log(loggedInUser)
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        color: colors.grey[800],
      }}
    >
      <Stack spacing={5} sx={{
        width: "100%",
        maxWidth: "500px"
      }}>
        <Stack>
          <Typography variant='h4' fontWeight={600} color={colors.grey[800]}>
            Create an account
          </Typography>
          <Typography color={colors.grey[600]}>
            Create an Account to Rent your car.
          </Typography>
        </Stack>

        <form onSubmit={onSubmit}>
          <Stack spacing={4}>
            <Stack spacing={2}>
              <Stack spacing={1}>
                <Typography color={colors.grey[800]}>Name</Typography>
                <TextField name='name' required placeholder='Enter Your name' />
              </Stack>
              <Stack spacing={1}>
                <Typography color={colors.grey[800]}>Email</Typography>
                <TextField name='email' type='email' required placeholder='Enter Your Email' />
              </Stack>
              <Stack spacing={1}>
                <Typography color={colors.grey[800]}>Password</Typography>
                <TextField type='password' name='password' required placeholder='Enter Your Password' inputProps={{ minLength: 8, }} />
              </Stack>
            </Stack>
            <Button
              variant='contained'
              size='large'
              type='submit'
              sx={{
                bgcolor: colors.grey[800],
                "&:hover": {
                  bgcolor: colors.grey[600]
                }
              }}
            >
              Sign up
            </Button>
          </Stack>
        </form>

        <Stack direction="row" spacing={2}>
          <Typography>Already have an account?</Typography>
          <Typography
            onClick={() => onSwitchMode(ScreenMode.SIGN_IN)}
            fontWeight={600}
            sx={{
              cursor: "pointer",
              userSelect: "none"
            }}
          >
            Sign in
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SignupForm;