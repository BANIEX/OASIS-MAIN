// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Nav from './Components/Navbar/Nav'
import Home from './Components/Home/Home';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home/>}>

      </Route>
    </Routes>
    
      
    </>
  )
}

export default App
