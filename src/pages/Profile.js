import React, { useEffect } from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react"; 
import { useState } from "react";
import axios from "axios";



function Profile(){
    const { user, setUser, storedToken } = useContext(AuthContext);
    const [description, setDescription] = useState("");
    const handleDescription = e => setDescription(e.target.value);
    useEffect(()=>{
        axios.get(
            `${process.env.REACT_APP_API_URL}/auth/profile`,
            { headers: { Authorization: `Bearer ${storedToken}`} }
        )
        .then((foundUser)=>{
            setUser(foundUser.data)
            console.log("foundUser", foundUser.data)
        })
        .catch(err=>{console.log(err)})
    },[setUser,storedToken])
    
    const handleSubmit = ((e) => {
        e.preventDefault();
        const email = user.email;
       console.log("description", {description, email})
       
       axios
      .put(`${process.env.REACT_APP_API_URL}/auth/profile`, {description, email})
      .then((response) => {
        console.log(response)
        setUser(response.data)
      })
      .catch(err=>{console.log(err)})
    })
  return (
    <div>
    <h2 className='h2ProfilePage'> Welcome back {user && user.name} !!😃</h2>
    
    <div className='profileMainDiv'>
    
    <div className='profileFromDiv'>
    
    <p>{user && user.description}</p>
    <form onSubmit={handleSubmit}>
    <input className="profileDescription"
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