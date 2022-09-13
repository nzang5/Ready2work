import React from "react";
import { Link } from "react-router-dom";
// import Axios from "axios";
// import { useParams, useNavigate  } from "react-router-dom";
// import { useState, useEffect } from "react";

// const API_URL = "http://localhost:5005";


function SinglePost(){
 
//     const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [companyName, setCompanyName] = useState("");
    

//     const { jobId } = useParams();
//     const navigate = useNavigate();  



    // useEffect(() => {
    // Axios
    // .get(`${API_URL}/jobs/jobslist/${jobId}`)
    // .then((response) => {
    //     const oneJob = response.data;
    //     setTitle(oneJob.title);
    //     setDescription(oneJob.description);
    //     setCompanyName(oneJob.companyName)
    //   })
    //   .catch((error) => console.log(error));
    // },[jobId])


   

    

    return(
<div>

<h1>SinglePost</h1>


<button><Link to={`/jobpost/edit/:jobId`}>Edit/Delete Post </Link></button>
     
       
      </div>
    
    
         )
}

export default SinglePost;