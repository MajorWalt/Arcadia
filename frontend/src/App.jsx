import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TheVilla from './pages/TheVilla';
import TheHostel from './pages/TheHostel';
import TheRoom from './pages/TheRoom';
import TheRooms from './pages/TheRooms';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/villa" element={<TheVilla />} />
        <Route path="/hostel" element={<TheHostel />} />
        <Route path="/room" element={<TheRoom />} />
        <Route path="/rooms" element={<TheRooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;