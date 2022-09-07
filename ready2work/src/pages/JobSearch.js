import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";

const options = {
    method: 'GET',
    url: 'https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': '8ce0e4d62dmsh944df266a00df01p126174jsn0198eac77e75',
      'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
    }
  };


function JobSearch(){

    const [ jobs, setJobs ] = useState();
    
    useEffect(() => {
      
        axios.request(options)
        .then(function (response) {console.log(response.data)
        setJobs(response.data);})
        .catch(function (error) {
            console.error(error);
        },[]);
      
        console.log(jobs)
 
    })

    return(
        <div>
            <h1>Job Search page</h1>
           <p>{jobs}</p>

        </div>
        )
}

export default JobSearch;