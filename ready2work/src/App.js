import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import Login from './pages/login';
import Signup from './pages/signup';
import JobSearch from './pages/JobSearch';
import JobPost from './pages/JobPost';
import axios from 'axios';


function App() {

{/*const handdleCreateJob = ()=>{
axios.post("http://localhost:5005/jobs/create")
}
handdleCreateJob()*/}

  return (
    <div className="App">
  
      <Navbar/>
      <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/jobsearch" element={<JobSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobpost" element={<JobPost />} />
      </Routes>

    </div>
  );
}

export default App;
