import './App.css';
import { Routes, Route } from 'react-router-dom'
import ProductPage from './views/ProductsPage';
import LandingPage from './views/LandingPage'
import DetailProduct from './views/DetailProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:slug" element={<DetailProduct />} />
      </Routes>
    </div>
  );
}

export default App;
