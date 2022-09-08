import { useEffect, useState } from 'react';
import React from 'react';
import jtw_decode from 'jwt-decode'


function Googlebutton(){

    const [ user, setUser ] = useState({});

function handlecallbackResponse(response){
    console.log("JWT Token:" + response.credential);
    let userObject = jtw_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
}
useEffect(() => {
/* global google */
google.accounts.id.initialize({
  client_id: "270171014805-qhcu5lbdbn2pf69b8u383jf5n65coq75.apps.googleusercontent.com",
  callback: handlecallbackResponse
});

google.accounts.id.renderButton(
  document.getElementById("signInDiv"),
  {theme: "outline", size: "large" }
)
},[])


return(
    <div>

     <div id="signInDiv"></div> 
        {user &&
        <div>
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
        </div>
        }

    </div>
    

)


}
export default Googlebutton;