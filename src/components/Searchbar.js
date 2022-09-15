import React from "react";



function Searchbar({mySearch, setMySearch}){
    return(
  <div>
   <div className="bar">
     <input value={mySearch} className="searchbar" type="text" title="Search" placeholder="  Search for jobs in your area..." onChange= {(e)=>{ setMySearch(e.target.value)} } />
     <a href="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"> 
     <img className="voice" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png" title="Search by Voice" alt="blah"/>  
     </a>
   </div>

        </div>
    )
}

export default Searchbar;