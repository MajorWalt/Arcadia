import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TheVilla from './pages/TheVilla';
import TheHostel from './pages/TheHostel';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villa" element={<TheVilla />} />
        <Route path="/hostel" element={<TheHostel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;