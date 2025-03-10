import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'
import FamerSignUp from './pages/FarmerSignUp/FamerSignUp';
import FarmerLogin from './pages/FarmerLogin/FarmerLogin';
import FarmerHome from './pages/FarmerHome/FarmerHome';
import FarmerDashboard from './components/FarmerDashboard/FarmerDashboard';

function App() {
  return (
    <>
    <div className='main-container'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />

          {/* farmer signup/login */}
          <Route path='/sign/farmer' element={<FamerSignUp />} />
          <Route path='/sign/buyer' element={<FarmerLogin />}/>

          {/* farmer dashboard */}
          <Route path="/dashboard/farmer" element={<FarmerDashboard />} />
          <Route path='/dashboard/farmer/home' element={<FarmerHome />} />
        </Routes>
    </div>
    </>
  )
}

export default App
