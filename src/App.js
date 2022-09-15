import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import SignIn from './pages/Login';
import Signup from './pages/signup';
import JobSearch from './pages/JobSearch';
import JobPost from './pages/JobPost';
import EditJobPost from "./pages/EditJobPost";
import About from './pages/About';
import Profile from './pages/Profile';


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
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
    </Routes>

    </div>
  );
}

export default App;
