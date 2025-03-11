import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import FamerSignUp from './pages/FarmerSignUp/FamerSignUp';
import FarmerLogin from './pages/FarmerLogin/FarmerLogin';
import FarmerHome from './pages/FarmerHome/FarmerHome';
import FarmerDashboard from './components/FarmerDashboard/FarmerDashboard';
import BuyerSignUp from './pages/BuyerSignUp/BuyerSignUp';
import BuyerLogin from './pages/BuyerLogin/BuyerLogin';
import BuyerDasboard from './components/BuyerDashboard/BuyerDasboard';

function App() {
  return (
    <>
      <div className='main-container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<h1>About</h1>} />

            {/* farmer signup/login */}
            <Route path='/sign/farmer' element={<FamerSignUp />} />
            <Route path='/login/farmer' element={<FarmerLogin />} />

            {/* buyer signup/login */}
            <Route path='/sign/buyer' element={<BuyerSignUp />} />
            <Route path='/login/buyer' element={<BuyerLogin />} />

            {/* farmer dashboard */}
            <Route path="/farmer/dashboard" element={<FarmerDashboard />}>
              <Route index element={<FarmerHome />} />
              <Route path="listings" element={<h1>Listing</h1>} />
              <Route path="market-prices" element={<h1>Market Prices</h1>} />
              <Route path="resources" element={<h1>Resources</h1>} />
              <Route path="community" element={<h1>Community</h1>}/>
            </Route>

            {/* buyer dashboard */}
            <Route path="/buyer/dashboard" element={<BuyerDasboard />}>
                <Route index element={<h1>Home</h1>} />
                <Route path='orders' element={<h1>Orders</h1>} />
                <Route path='market-prices' element={<h1>Market Prices</h1>}/>
                <Route path='resources' element={<h1>Resources</h1>}/>
                <Route path='community' element={<h1>Community</h1>} />
            </Route>
          </Routes>
      </div>
    </>
  )
}

export default App
