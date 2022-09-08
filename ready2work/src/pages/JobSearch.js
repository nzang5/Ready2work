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

    const [ jobs, setJobs ] = useState([]);
    
    useEffect(() => {
      
        axios.request(options)
        .then(response=> 
        {console.log(response.data)
        setJobs(response.data);})
        .catch(function (error) {
            console.error(error);
        },[]);
 
    })
    

        return(
            <div>
                {jobs.map((jobs, index) => {
        return (
          <div key={index}>
            <h2>name: {jobs.company_name}</h2>
            <h2>country: {jobs.title}</h2>

            <hr />
          </div>
        );
      })}



      </div>
  );
}

export default JobSearch;