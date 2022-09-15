import React, { useEffect } from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react"; 
import { useState } from "react";
import axios from "axios";
import foto from "../components/Screenshot 2022-09-13 at 20.47.43.png";



function Profile(){
    const { user, setUser } = useContext(AuthContext);
    const [description, setDescription] = useState("");
    const handleDescription = e => setDescription(e.target.value);
    useEffect(()=>{
      const storedToken = localStorage.getItem('authToken');

        axios.get(
            `${process.env.REACT_APP_DEPLOYMENT_URL}/auth/profile`,
            { headers: { Authorization: `Bearer ${storedToken}`} }
        )
        .then((foundUser)=>{
            setUser(foundUser.data)
            console.log("foundUser", foundUser.data)
        })
        .catch(err=>{console.log(err)})
    },[setUser])
    
    const handleSubmit = ((e) => {
        e.preventDefault();
        const email = user.email;
       console.log("description", {description, email})
       
       axios
      .put(`${process.env.REACT_APP_DEPLOYMENT_URL}/auth/profile`, {description, email})
      .then((response) => {
        console.log(response)
        setUser(response.data)
      })
      .catch(err=>{console.log(err)})
    })
  return (
    <div className="profileContainer">
    <h2 className='h2ProfilePage'> Welcome back {user && user.name} !!😃</h2>
    
    <div className='profileMainDiv'>
    <img alt='Nash' className='profilePic' src={foto}></img>
    <div className='profileFromDiv'>
    <div className="displayedText">
    <p className='textProfile'>{user && user.description}</p>
    </div>
    <form onSubmit={handleSubmit}>
    <textarea className="profileDescription"
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />
   <button className="ProfileUpdateBtn" type="submit">Update Profile</button>
  </form>
  </div>
    </div>
    </div>
)}


export default Profile