import './App.css';
import { Routes, Route } from 'react-router-dom'
// import CardProduct from './components/CardProduct';
import LandingPage from './views/LandingPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
