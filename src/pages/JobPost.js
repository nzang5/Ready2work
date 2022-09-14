
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

 
function JobPost(props) {
  const [ jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");

  
  const API = "https://dark-erin-panther-garb.cyclic.app/jobs/create";
  const Navigate = useNavigate();

  const handleTitle = e => setTitle(e.target.value);
  const handleDescription = e => setDescription(e.target.value);
  const handleCompanyName = e => setCompanyName(e.target.value);

  const handleJobSubmit = ((e) => {
        e.preventDefault();
        
    axios
      .post(API, {title, description, companyName})
      .then((response) => {
        console.log('response.data', response.data);
        setJobs([...jobs,response.data])
        Navigate(`/jobsearch`);
      });
  });

  

  
  return (
    <div className="jobPostContainer">
      <h1 className="h1Form">Publish your job offer online</h1>
    <div className="postMainDiv">
    
    <div className="jobPostPage">
      <form className="formDivPost" onSubmit={handleJobSubmit}>
        <label className="labelPostForm">Job position:</label>
        <br/>
        <input className="jobPostForm"
          type="text"
          name="title"
          value={title}
          onChange={handleTitle}
        />
        <br/>
        <label className="labelPostForm">Company Name:</label>
        <br/>
        <input className="jobPostForm"
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleCompanyName}
        />
        <br/>
        <label className="labelPostForm">Description:</label>
        <br/>
        <textarea className="jobPostForm description"
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />
        <br/>
        <div className="divPostFormBtn">
        <button className="jobPostBtn" type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div> 
    {jobs && jobs.map((job => {
        return (
          <div>
            <h2> {job.title}</h2>
            <h3>{job.companyName}</h3>
            <p>Job description: {job.description}</p>
            
            <hr />
          </div>
        );
      }))
      }

    </div>
    

  );
}


export default JobPost;