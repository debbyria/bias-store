import './App.css';
import CreateProduct from './views/CreateProduct';
import TableProduct from './views/TableProduct';
import LoginPage from './views/LoginPage';
import RegisterPage from './views/RegisterPage';
import EditProduct from './components/EditProduct'
import CategoryList from './views/CategoryList';
import HomePage from './views/HomePage';
import RequireAuth from './components/RequireAuth';

import {
  Routes,
  Route,
  // Link 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RequireAuth> <HomePage /> </RequireAuth>}>
          <Route path="/" element={<TableProduct />} />
          <Route path="add" element={<CreateProduct />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="edit/:slug" element={<EditProduct />} />
          <Route path="categories" element={<CategoryList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
