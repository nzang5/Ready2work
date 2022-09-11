import React from "react";
import Axios from 'axios';
import { useState, useEffect } from "react";
import Searchbar from "../components/Searchbar";
import Container from '@mui/material/Container';

import { Default } from 'react-awesome-spinners'

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
      async function getAllJobs(){
        try{
        let apiData = await Axios.request(options)
        let dbData = await Axios.get("http://localhost:5005/jobs/jobsList")
        console.log("db data", dbData )
        let allData = [...dbData.data, ...apiData.data.data]
        setJobs(allData)
        setLoading(false)}
       catch(err){console.log(err)}
      }
      getAllJobs()
      

    }, []);
    
if(loading === true){
   return (
   <div className="spinnerDiv">
   <Default />
   </div>
   )
}
        return(
            <div>
            <h1 className="findjobs">Find jobs</h1>
            <br></br>
            <Searchbar/>
                      
                {jobs.map((job => {
        return (
          
          <div>
          <Container maxWidth="md">
            <h2>{job.title}</h2>
            <h3>{job.company_name}</h3>
            <p> Location: {job.location}</p>
             <a href={job.url}>Apply Here</a>
            <p>Job description: {job.description}</p>  
          </Container>       
          </div>

                );
      }))
                }

     


      </div>
  );
}

export default JobSearch;