import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './pages/frontpage';
import Signin from './pages/signin';
import Signup from './pages/signup';


function App() {
  return (
    <div className="App">
  
      <Navbar/>
      <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
