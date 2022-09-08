import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './pages/Frontpage';
import Login from './pages/login';
import Signup from './pages/signup';
import JobSearch from './pages/JobSearch';


function App() {
  return (
    <div className="App">
  
      <Navbar/>
      <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/jobsearch" element={<JobSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
