import './App.css';
import CreateProduct from './components/CreateProduct';
import FetchProducts from './components/FetchProducts';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FetchProducts />} />
        <Route path="add" element={<CreateProduct />} />
      </Routes>
    </div>
  );
}

export default App;
