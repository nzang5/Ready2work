import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import SignIn from './pages/Login';
import Signup from './pages/signup';
import JobSearch from './pages/JobSearch';
import JobPost from './pages/JobPost';
import EditJobPost from "./pages/EditJobPost";



function App() {



  return (
    <div className="App">
  
      <Navbar/>
      <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/jobsearch" element={<JobSearch />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobpost" element={<JobPost />} />
          <Route path="/jobpost/edit/:jobId" element={ <EditJobPost /> } />
    </Routes>

    </div>
  );
}

export default App;
