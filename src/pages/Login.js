import * as React from 'react';

// 1. Below is the Material UI template for the "Modal" that pops up the login page)
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//2. These imports are to find out the current login state.
//3. Use axios to POST the data to the server
//4. Then, navigate the user to the Jobsearch page afterwards.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../context/auth.context';
import axios from "axios";


const API_URL = "https://dark-erin-panther-garb.cyclic.app" ;

const theme = createTheme();

 function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // eslint-disable-next-line 
    const [errorMessage, setErrorMessage] = useState(undefined);
    
    const navigate = useNavigate();
    const { storeToken, authenticateUser } = useContext(AuthContext);
  
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
  
//1. Prevents the form to do a GET request.
//2. Posts the Email & Password to the server (http://localhost:5005) 
//3. Generate a JWT Token
//4. Navigate the user to Jobsearch page
   
    const handleLoginSubmit = (e) => {

        e.preventDefault();
        const requestBody = { email, password };
     
        axios.post(`${API_URL}/auth/login`, requestBody)
          .then((response) => {
          
            console.log('JWT token', response.data.authToken );
    
            storeToken(response.data.authToken);
          
            authenticateUser();
            navigate('/jobsearch');                                
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
          
      };

  return (

    // complete material UI template login form
    // 1. The theme + inline CSS
    // 2. The form
    // 3. The button to submit the form above + inline CSS

    <ThemeProvider theme={theme}>
      <div component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          
          <h1>Login</h1>
            
    {/* beginning of the login form  */}
          <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              type="email"
                name="email"
                value={email}
                onChange={handleEmail}/>

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type ="password"
              id="password"
              value={password}
              onChange={handlePassword}/>
   {/* End of the login form */}
          
            
            <Button
              type="submit"
              fullWidth
              variant ="contained"
              sx={{ mt: 3, mb: 2 }}>
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  <p>Don't have an account? Sign Up</p>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
        }

export default SignIn
