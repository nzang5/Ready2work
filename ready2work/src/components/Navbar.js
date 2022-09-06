import React from 'react';
import { Link } from 'react-router-dom';


function Navbar(){


    return(
        <nav>
            <Link to="/"><h2>Logo</h2></Link>
            <Link to="login"><h2>Login</h2></Link>
            <Link to="signup"><h2>Sign-up</h2></Link>
        </nav>
    )
}

export default Navbar;