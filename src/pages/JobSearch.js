import React from "react";
import Axios from 'axios';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import { Default } from 'react-awesome-spinners'
import Searchbar from "../components/Searchbar";

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
    
    const [mySearch, setMySearch] = useState("");
  /*const updateSearchList = (e) => {
    console.log("value", e.target.value)
    console.log("jooobs", jobs)
   /* const jobsCopy = [...jobs]
    console.log("jooobs", jobs)
    const inputSearch = mySearch.toLowerCase();
    const filteredJob = jobsCopy.filter(job => job.title.includes(inputSearch))
    console.log("****JOB****", filteredJob)
    setJobs(filteredJob)*/
   
    useEffect(() => {
      async function getAllJobs(){
        try{
        let apiData = await Axios.request(options)
        let dbData = await Axios.get("https://localhost:5005/jobs/jobsList")
        
        let allData = [...dbData.data, ...apiData.data.data]
        console.log("allData", allData)
        setJobs(allData)
        setLoading(false)}
       catch(err){console.log(err)}
      }
      getAllJobs()
      

    }, [])
    
   
    ;
    
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
            <Searchbar mySearch={mySearch} setMySearch={setMySearch}/>
                  
                {jobs && jobs.filter(element=>{
                  return(element.title.toLowerCase().includes(mySearch.toLowerCase()) || element.description.toLowerCase().includes(mySearch.toLowerCase()))
                })
                

                .map((job, index) => {
        return (
          
          <div className="jobSearchMainDiv">
          <Container className="jobSearchContainer" maxWidth="md">
          <Link className="titleJob" to={`/jobpost/edit/${job._id}`}> <h2 >{job.title}</h2></Link>
            <h3 key={index}>{job.company_name}</h3>
            <p>Location: {job.location}</p>
             <br/>
            <label>Job Description:</label>
            <p>{job.description.replace(/<[^>]*>/g, '')}</p>
            <a href={job.url}>Apply Here</a>  
          </Container>       
          </div>

                );
      })
                }

     


      </div>
  );
}

export default JobSearch;



