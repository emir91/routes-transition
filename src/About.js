import React, { useEffect } from "react"
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"

import "./assets/styles/about.css"

const About = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/about/shops")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='about-wrapper'>
      <div className='about-tabs'>
        <NavLink to='/about/shops' className='about-tab'>
          Shops
        </NavLink>
        <NavLink to='/about/products' className='about-tab'>
          Products
        </NavLink>
      </div>
      <Outlet />
      <Link to='/'>
        <button className='about-button'>Back to Home</button>
      </Link>
    </div>
  )
}

export default About
