import React from "react";
import pic from "../components/annie-spratt-dWYU3i-mqEo-unsplash (1).jpg";
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";

function Frontpage(){
    const { isLoggedIn } = useContext(AuthContext);

    return(
        <>
        {!isLoggedIn && (
        <div className="frontPage">
        <div className="frontElements">
        
            <h1 className="h1 textFront">Looking for a job?</h1>
            <h2 className="h2 textFront">Find the right one for you:</h2>
            <div class="bar barFront">  
                <input class="searchbar searchFront" type="text" title="Search" placeholder="  Search for jobs in your area..."/>
                <button className="searchBtn" onClick="./signup">Search</button>   
            </div>
            </div>
            
            <div alt="front pic" className="picFront" style={{backgroundImage: `url(${pic})`}} ></div>
            
          
        </div>
        )}
        </>
    )
}

export default Frontpage;