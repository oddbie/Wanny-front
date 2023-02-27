import { React, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState('');
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    console.log(email, emailVerify, pwd);
  }, [email, emailVerify, pwd]);

  const addUser = async () => {
    await axios
      .post('/api/member/register', {
        email: email,
        pw: pwd,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid container alignItems='center' justifyContent='center'>
      <div className='Signup'>
        <h1>This is Sign up</h1>
        <Box sx={{ width: 300, height: 450, p: 2, border: 1 }}>
          <div>
            <TextField
              margin='normal'
              required
              id='e-mail'
              label='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              margin='normal'
              required
              id='e-mail-verify'
              label='Email-verify'
              onChange={(e) => setEmailVerify(e.target.value)}
            />
          </div>
          <div>
            <TextField
              margin='normal'
              required
              id='password'
              type='password'
              label='Password'
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div>
            <Button
              variant='contained'
              sx={{ width: 150, marginTop: 3 }}
              onClick={addUser}
            >
              Sign up
            </Button>
          </div>
        </Box>
      </div>
    </Grid>
  );
};

export default Signup;
