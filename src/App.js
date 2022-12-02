import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import UploadProducts from './components/UploadProducts/UploadProducts';
import OrderList from './components/OrderList/OrderList';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/uploadPd' element={<PrivateRoute><UploadProducts></UploadProducts></PrivateRoute>}></Route>
        <Route path='/orders' element={<PrivateRoute><OrderList></OrderList></PrivateRoute>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
