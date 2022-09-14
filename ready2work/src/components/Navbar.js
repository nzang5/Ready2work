import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";
import logo from "./logoSimple-CutOut.png"
import BasicModal from './LoginModal';
import SignupModal from './SignupModal';



function Navbar(){
        // eslint-disable-next-line
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <nav>
        <div className='NavDiv'>
        <div className='logoDiv'>
        <img className='logo' alt="logo" src={logo}></img>
        </div>
        <div className='elementsNav'>

                <Link className='link' to="/">
                     Home
                 </Link>

                 


                

            {isLoggedIn && (
          <>
                <Link className='link' to="/jobsearch">Job Search page</Link>

              
               <Link className='link' to="/jobpost">Post a Job</Link>
                <Link className='link' to="/about">About</Link>
                <Link className='link' to="/"><button className='LogOutBtn' onClick={logOutUser}>Logout</button></Link>
                {/*<h2> Welcome back {user && user.name} !!😃</h2>*/}
         </>    
      )}
      
            {!isLoggedIn && (
        <>    
           <p> <BasicModal/> </p>
           <p> <SignupModal /> </p>
            
            </>
      )}
      </div>
      </div>
        </nav>
    )
    }

export default Navbar;