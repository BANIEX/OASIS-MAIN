// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from './Components/Navbar/Nav'
import Home from './Components/Home/Home';
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/about" element={<About/>}>
      </Route>
      <Route path="/contact" element={<About/>}>

      </Route>
      <Route path="/support" element={<About/>}>
          
      </Route>

    </Routes>
    <Footer/> 
    
      
    </>
  )
}

export default App
