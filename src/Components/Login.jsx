import { Alert, Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

import Avatar from '@mui/material/Avatar';

import CssBaseline from '@mui/material/CssBaseline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer/Footer'
import Navbar from './Navbar'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function Login() {

    const [email, setemail] = useState(null);
    const [pass, setpass] = useState(null);
    const [error, seterror] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: pass
        };
        try {
            const user = await axios.post('https://videos-backends.herokuapp.com/login', data);
            const token = user.data;
            localStorage.setItem('token', token);
            window.location="/"
        } catch (error) {
            seterror(error.response.data);
        }
    }; 

  return (
    <>
    <Navbar/>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh',  marginBottom:"5%" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://wallpaperaccess.com/full/2314950.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5}  elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: "rgba(255,255,255,0.5)"
            }}
          >
            <Avatar sx={{ m: 1,  }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography style={{color: "black"}} component="h1" variant="h5">
              Sign in
            </Typography>
            <h2 style={{color: "black"}} >Log In to your approved reinvokes account</h2>
            <form onSubmit={submitHandler} style={{color:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                {error && <Alert severity="error">{error}</Alert>} <br />
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setemail(e.target.value)}
                style={{backgroundColor: "rgba(255,255,255,0.3)", color: "white"}}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setpass(e.target.value)}
                style={{backgroundColor: "rgba(255,255,255,0.3)", color: "white"}}
              />
              <FormControlLabel
                control={<Checkbox style={{ color: "white"}} 
                svalue="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
            </form>
          </Box>
        </Grid>
      </Grid>

    </ThemeProvider>
    <Footer/>
    </>
  );
}
export default Login