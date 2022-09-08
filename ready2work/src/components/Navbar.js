import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";

function Navbar(){

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>
        <div className='NavDiv'>
        <div className='elementsNav'>
                <Link className='link' to="/">
                     Home
                 </Link>

                 <Link className='link' to="/jobpost">
                    Create a Job
                </Link>

            {isLoggedIn && (
          <>
                <Link className='link' to="/jobsearch">Job Search page</Link>

                <p> <Link className='link' to="jobpost"> Post a Job </Link> </p>
             
                <button onClick={logOutUser}>Logout</button>
                {/*<h2> Welcome back {user && user.name} !!😃</h2>*/}
         </>    
      )}
      
            {!isLoggedIn && (
        <>    
           <p> <Link className='link' to="login"> Login </Link> </p>
            
           <p> <Link className='link' to="signup"> Sign-up </Link> </p>
            
            </>
      )}
      </div>
      </div>
        </nav>
    )
    }

export default Navbar;