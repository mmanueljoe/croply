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
import LearnMore from './pages/LearnMore/LearnMore';
import BuyerHome from './pages/BuyerHome/BuyerHome';
import BuyerMarketplace from './pages/BuyerMarketplace/BuyerMarketplace';
import FarmerResources from './pages/FarmerResources/FarmerResources';
import FarmerListing from './pages/FarmerListing/FarmerListing';
import { Trials } from './pages/trials';
import { Cropadvisory } from './pages/cropadvisory';


import { LanguageProvider } from './data/LanguageContext';

function App() {
  return (
    <LanguageProvider> {/* ✅ Wrap everything with the LanguageProvider */}
      <div className='main-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />

          {/* Farmer signup/login */}
          <Route path='/sign/farmer' element={<FamerSignUp />} />
          <Route path='/login/farmer' element={<FarmerLogin />} />

          {/* Buyer signup/login */}
          <Route path='/sign/buyer' element={<BuyerSignUp />} />
          <Route path='/login/buyer' element={<BuyerLogin />} />

          {/* Farmer dashboard */}
          <Route path="/farmer/dashboard" element={<FarmerDashboard />}>
            <Route index element={<FarmerHome />} />
            <Route path="listings" element={<FarmerListing />} />
            <Route path="market-prices" element={<h1>Market Prices</h1>} />
            <Route path="resources" element={<FarmerResources />} />
            <Route path="community" element={<h1>Community</h1>} />
            <Route path="Trials" element={<Trials />} />
            <Route path="Cropadvisory" element={<Cropadvisory />} />
          </Route>

          {/* Buyer dashboard */}
          <Route path="/buyer/dashboard" element={<BuyerDasboard />}>
            <Route index element={<BuyerHome />} />
            <Route path='orders' element={<h1>Orders</h1>} />
            <Route path='market-prices' element={<h1>Market Prices</h1>} />
            <Route path='marketplace' element={<BuyerMarketplace />} />
            <Route path='resources' element={<h1>Resources</h1>} />
            <Route path='community' element={<h1>Community</h1>} />
          </Route>

          {/* Learn more */}
          <Route path='/learn-more' element={<LearnMore />} />
        </Routes>
      </div>
    </LanguageProvider>
  );
}

export default App;
