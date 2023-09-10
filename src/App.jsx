// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from './Components/Navbar/Nav'
import Home from './Components/Home/Home';
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Support from "./Components/Support/Support";


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
      <Route path="/contact" element={<Contact/>}>

      </Route>
      <Route path="/support" element={<Support/>}>

      </Route>

    </Routes>
    <Footer/> 
    
      
    </>
  )
}

export default App
