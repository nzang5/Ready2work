import React from "react";
import Axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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
    
    const [ jobs, setJobs ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
      Axios.request(options)
      .then((response) => {
        console.log(response.data.data);
      const apiData = response.data.data;
      setJobs(apiData);
      setLoading(false)
      })
      .catch((err) => console.log(err));
    }, []);
    
if(loading === true){
  return <p>Loading...</p>
}
        return(
            <div>
            <h1>List of jobs</h1>
            <br></br>

                {jobs.map((job => {
        return (
          <div>
            <h2> {job.title}</h2>
            <h3>{job.company_name}</h3>
            <p> Location: {job.location}</p>
             <Link to="/{job.url}">Apply here</Link>
            <p>Job description: {job.description}</p>
            
            <hr />
          </div>
        );
      }))
      }

     


      </div>
  );
}

export default JobSearch;