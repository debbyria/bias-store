import './App.css';
import CreateProduct from './views/CreateProduct';
import TableProduct from './views/TableProduct';
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
        <Route path="/" element={<TableProduct />} />
        <Route path="/add" element={<CreateProduct />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </div>
  );
}

export default App;
