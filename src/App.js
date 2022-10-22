import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricePage from './pages/PricePage';
import './assets/tailwind/index.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/shipment-price' element={<PricePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
