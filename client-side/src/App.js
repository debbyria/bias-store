import './App.css';
import CardProduct from './components/CardProduct';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CardProduct />} />
      </Routes>
    </div>
  );
}

export default App;
