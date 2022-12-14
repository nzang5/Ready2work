import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";  
import axios from "axios";
 
const API_URL = process.env.REACT_APP_API_URL ||"https://dark-erin-panther-garb.cyclic.app" ;

 
function EditJobPost(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  
  const { jobId } = useParams();
  const navigate = useNavigate();
  
 
  useEffect(() => {
    axios
      .get(`${API_URL}/jobs/jobslist/${jobId}`)
      .then((response) => {
        const oneJob = response.data;
        setTitle(oneJob.title);
        setDescription(oneJob.description);
        setCompanyName(oneJob.companyName)
      })
      .catch((error) => console.log(error));
    
  }, [jobId]);         
 // This effect will run after the initial render and each time
 // the id coming from URL parameter `jobsId` changes
  
 const handleFormSubmit = (e) => {                     // <== ADD
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, description, companyName };
 
    // Make a PUT request to update the project
    axios
      .put(`${API_URL}/jobs/jobslist/${jobId}`, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/jobsearch`)
      });
  };

  const deleteJob = () => {                    //  <== ADD
    // Make a DELETE request to delete the project
    axios
      .delete(`${API_URL}/jobs/jobslist/${jobId}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/jobsearch");
      })
      .catch((err) => console.log(err));
  }; 

  return (
    <div className="EditJobPost">
      <h3 className="h3EditJob">Edit the Job post</h3>
      <div className="editJobDiv">
      <form className="formEditJob"  onSubmit={handleFormSubmit}>
        <label className="labelPostForm" >Title:</label>
        <br/>
        <input className="inputEditJobForm"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <label className="labelPostForm">Description:</label>
        <br/>
        <textarea
        className="inputEditJobForm"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br/>

        <label className="labelPostForm">Company Name:</label>
        <br/>
        <textarea
        className="inputEditJobForm"
          name="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <br/>
        <div className="btnsFormEdit">
        <input
         className="editBtnProfile" type="submit" value="Submit" />
         
         <button className="editBtnProfile deleteEditJob" onClick={deleteJob}>Delete Job post</button>
         </div>
      </form>
      
      
      </div>
    </div>
  );
}
 
export default EditJobPost;