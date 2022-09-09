
import axios from "axios";
import { useState } from "react";

 
function JobPost() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const API = "http://localhost:5005/jobs/create";

  const handleTitle = e => setTitle(e.target.value);
 
  const handleDescription = e => setDescription(e.target.value);
 
  const handleCompanyName = e => setCompanyName(e.target.value);

  const handleJobSubmit = ((e) => {
        e.preventDefault();
        
    axios
      .post(API, {title, description, companyName})
      .then((response) => {
        console.log('response.data', response.data);
        setJobs(response.data)
      });
    
  });

  return (
    <div>
    <div className="JobPostPage">
    
      <h1>Post your job</h1>

      <form onSubmit={handleJobSubmit}>
        <label>Title:</label>
        <input 
          type="text"
          name="title"
          value={title}
          onChange={handleTitle}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label>Company Name:</label>
        <input
          type="text"
          name="companyName"
          value={companyName}
          onChange={handleCompanyName}
        />
        <button type="submit">Send</button>
      </form>
     
    </div>
    <div>
      
    </div>
    </div>

  );
}


export default JobPost;