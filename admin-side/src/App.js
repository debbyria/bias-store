import './App.css';
import CreateProduct from './views/CreateProduct';
import FetchProducts from './views/FetchProducts';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';

import {
  Routes,
  Route,
  // Link 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FetchProducts />} />
        <Route path="/add" element={<CreateProduct />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </div>
  );
}

export default App;
