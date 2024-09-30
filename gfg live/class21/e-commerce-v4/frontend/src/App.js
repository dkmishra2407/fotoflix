import './App.css';
import AllProducts from './pages/AllProducts';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Show from './pages/Show';
import Layout from './components/layout/Layout';
import UserCart from './pages/UserCart';

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/login" element={ <Login/>} />
        <Route path="/register" element={ <SignUp/>} />
        <Route path="/products" element={ <AllProducts/>} />
        <Route path="/products/:productId" element={<Show />} />
        <Route path="/cart" element={<UserCart/> } />
      </Routes>
    </Layout>
  )
}

export default App;
