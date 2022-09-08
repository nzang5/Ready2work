import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";

function Navbar(){

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>
                <Link to="/">
                     Home
                 </Link>
                 <Link to="/jobpost">
                    Create a Job
                </Link>

            {isLoggedIn && (
          <>
                <Link to="/jobsearch">
                    Job Search page
                </Link>

                
             
                <button onClick={logOutUser}>Logout</button>
                <h2> Welcome back {user && user.name} !!😃</h2>
         </>    
      )}
      
            {!isLoggedIn && (
        <>    
            <Link to="login">
                <button>Login</button>
            </Link>
            
            <Link to="signup">
                <button>Sign-up</button>
            </Link>
            </>
      )}
        </nav>
    )
    }

export default Navbar;