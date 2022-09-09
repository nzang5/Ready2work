
import axios from "axios";
import { useState } from "react";

 
function JobPost(props) {
  const [setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");

  const handleTitle = e => setTitle(e.target.value);
  const handleDescription = e => setDescription(e.target.value);
  const handleCompanyName = e => setCompanyName(e.target.value);

  const handleJobSubmit = ((e) => {
        e.preventDefault();
        
    axios
      .post("http://localhost:5005/jobs/create", {title, description, companyName})
      .then((response) => {
        console.log('response.data', response.data);
        setJobs(response.data)
      });

  setTitle("")
  setDescription("")
  setCompanyName("")
  });

  

  
  return (
    <div>
      <h3>List of Jobs</h3>
 
      
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
        <button type="submit">Post</button>
      </form>
    </div>
  
      <div className="formResults">
        <h1> {title} </h1>
        <h3> {companyName} </h3>
        <p>{description} </p>
        

      </div>

      
    </div>
  );
}

export default JobPost;