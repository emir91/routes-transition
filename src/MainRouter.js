import React from "react"
import { Route, Routes } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Products from "./Products"
import Shops from "./Shops"

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}>
        <Route path='/about/shops' element={<Shops />} />
        <Route path='/about/products' element={<Products />} />
      </Route>
    </Routes>
  )
}

export default MainRouter
