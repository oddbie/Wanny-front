import { React, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import validator from 'validator';

const Signup = () => {
  const emailCompareError = 'The email and confirmation email does not match.';
  const validEmailError = 'Email is not valid';

  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState('');
  const [pwd, setPwd] = useState('');

  const [validEmail, setValidEmail] = useState(true);
  const [emailMatched, setEmailMatched] = useState(true);

  const isValidEmail = (email) => {
    if (email === '' || validator.isEmail(email)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log('verifying', email + ' ' + emailVerify);
    if (
      emailVerify === '' ||
      !validEmail ||
      (email !== '' && emailVerify !== '' && email === emailVerify)
    ) {
      console.log('email match');
      setEmailMatched(true);
    } else {
      console.log('email not match');
      setEmailMatched(false);
    }
  }, [emailVerify]);

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
              error={!validEmail}
              margin='normal'
              required
              id='e-mail'
              label='Email'
              value={email}
              onChange={(e) => {
                setValidEmail(isValidEmail(e.target.value));
                setEmail(e.target.value);
              }}
              helperText={!validEmail ? validEmailError : ''}
            />
          </div>
          <div>
            <TextField
              error={!emailMatched}
              margin='normal'
              required
              id='e-mail-verify'
              label='Email-verify'
              value={emailVerify}
              onChange={(e) => {
                setEmailVerify(e.target.value);
              }}
              helperText={!emailMatched ? emailCompareError : ''}
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
              disabled={!validEmail || !emailMatched}
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
