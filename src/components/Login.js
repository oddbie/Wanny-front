import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Grid container alignItems='center' justifyContent='center'>
      <div className='Login'>
        <h1>This is Login Page</h1>
        <Box sx={{ width: 300, height: 450, p: 2, border: 1 }}>
          <div>
            <TextField margin='normal' required id='e-mail' label='Email' />
          </div>
          <div>
            <TextField
              margin='normal'
              required
              id='password'
              type='password'
              label='Password'
            />
          </div>
          {/* TODO: save email checkbox, forget password */}
          <Button variant='contained' sx={{ width: 150, marginTop: 3 }}>
            Sign in
          </Button>
          <Divider sx={{ p: 3 }}>or</Divider>
          <div>
            <Button
              variant='outlined'
              sx={{ width: 200, fontFamily: 'Roboto', fontSize: 14 }}
            >
              Sign in with Google
            </Button>
          </div>
          <div>
            <Button
              variant='outlined'
              sx={{ width: 200, marginTop: 2, marginBottom: 2 }}
            >
              Sign in with Apple
            </Button>
          </div>
          {/* TODO: Google Icon, Apple Icon */}
          <div>
            Need an account? <Link to='/signup'>Sign up</Link>
          </div>
        </Box>
      </div>
    </Grid>
  );
};

export default Login;
