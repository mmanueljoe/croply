import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'

function App() {
  return (
    <>
    <div className='main-container'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Routes>
    </div>
    </>
  )
}

export default App
