// src/pages/SignupPage.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


// 1. Below is the Material UI template for the "Modal" that pops up the login page)
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const API_URL = process.env.REACT_APP_API_URL||"https://dark-erin-panther-garb.cyclic.app" ;

const theme = createTheme();




function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
      // eslint-disable-next-line 
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  
  const handleSignupSubmit = (e) => {

    e.preventDefault();
    
    const requestBody = { email, password, name };
 
    
    axios.post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })

  };

  



  
  return (
    <ThemeProvider theme={theme}>
      <div component="main" maxwidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
      <h1>Sign Up</h1>

      <Box component="form" onSubmit={handleSignupSubmit} noValidate sx={{ mt: 1 }}>
        <label>Email:</label>
        <TextField 
        margin="normal"
              required
              fullWidth
          label="Email Address"
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />

        <label>Password:</label>
        <TextField 
        margin="normal"
              required
              fullWidth
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Name:</label>
        <TextField 
        margin="normal"
              required
              fullWidth
          label="Name"    
          type="text"
          name="name"
          value={name}
          onChange={handleName}
        />

        <Button type="submit" 
              fullWidth
              variant ="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign Up
              </Button>

              <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  <p>Already have account? Login!</p>
                </Link>
              </Grid>
            </Grid>
              </Box>
              </Box>
              </div>
              </ThemeProvider>
  )
        }

     
  


export default Signup;
