// import { useState } from 'react'
import Nav from './Components/Navbar/Nav'
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}>

      </Route>
    </Routes>


      
    </>
  )
}

export default App
