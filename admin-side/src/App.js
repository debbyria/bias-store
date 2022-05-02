import './App.css';
import CreateProduct from './views/CreateProduct';
import TableProduct from './views/TableProduct';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import NavigationBar from './components/NavigationBar';
import EditProduct from './components/EditProduct'
import CategoryList from './views/CategoryList';

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
        <Route path="/edit/:slug" element={<EditProduct />} />
        <Route path="/categories" element={<CategoryList />} />

      </Routes>
    </div>
  );
}

export default App;
