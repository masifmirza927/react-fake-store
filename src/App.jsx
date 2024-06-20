import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './components/navbar/Navbar'

// pages
import About from "./pages/About";
import Contact from './pages/Contact';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Create from './pages/Create';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import Edit from './pages/Edit';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/details/:pid' element={<ProductDetail />} />
        <Route path='/product/update/:pid' element={<Edit />} />
        <Route path='/create' element={<Create />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  )
}

export default App
