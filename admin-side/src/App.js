import './App.css';
import CreateProduct from './views/CreateProduct';
import TableProduct from './views/TableProduct';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import NavigationBar from './components/NavigationBar';
import EditProduct from './components/EditProduct'

import {
  Routes,
  Route,
  // Link 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<TableProduct />} />
        <Route path="/add" element={<CreateProduct />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/edit" element={<EditProduct />} />


      </Routes>
    </div>
  );
}

export default App;
