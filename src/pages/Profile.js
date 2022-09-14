import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react"; 

const Profile = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
    <h2> Welcome back {user && user.name} !!😃</h2>
    </div>
  )
}

export default Profile