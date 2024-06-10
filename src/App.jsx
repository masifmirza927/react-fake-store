import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import headerBg from "./images/header-bg.avif"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header' style={{ backgroundImage: `url(${headerBg})` }}>
        <Navbar />
        <Header />
      </div>

    </>
  )
}

export default App
