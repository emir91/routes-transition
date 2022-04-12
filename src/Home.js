import React from "react"
import { Link } from "react-router-dom"

import "./assets/styles/home.css"

const Home = () => {
  return (
    <div className='home-wrapper'>
      <h1 className='home-heading'>Welcome to Sync Routes Example</h1>
      <Link to='/about'>
        <button className='home-button'>About</button>
      </Link>
    </div>
  )
}

export default Home
