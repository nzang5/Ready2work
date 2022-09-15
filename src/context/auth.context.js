// src/context/auth.context.js

import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL||"https://dark-erin-panther-garb.cyclic.app" ;

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  
  const storeToken = (token) => {       //  <==  ADD
    localStorage.setItem('authToken', token);
  }
  
  useEffect(() => {    
  const authenticateUser = () => {           //  <==  ADD  
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      axios.get(
        `${API_URL}/auth/verify`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => {
        // If the server verifies that JWT token is valid  
        const user = response.data;
        console.log("hiii R.data", response.data)
       // Update state variables        
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);        
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) 
        // Update state variables         
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);        
      });      
    } 
  }
  authenticateUser(); 
},[])
  const removeToken = () => {                    // <== ADD
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
  }

  const logOutUser = () => {                   // <== ADD    
    // To log out the user, remove the token
    removeToken();
    // and update the state variables    
    setIsLoggedIn(false);
    setIsLoading(false);
    setUser(null);   
  }  
 
  
  // useEffect(() => {                                                   
  //   authenticateUser(); 
  // },[])


  return (                                                   
    <AuthContext.Provider 
      value={{ 
        setIsLoggedIn,
        setIsLoading,
        isLoggedIn,
        isLoading,
        user,
        setUser,
        storeToken,
        logOutUser,
        
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
