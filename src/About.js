import React, { useEffect } from "react"
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./assets/styles/about.css"
import "./assets/styles/fade.css"

const About = () => {
  const navigate = useNavigate()
  const location = useLocation()

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
      <TransitionGroup location={location}>
        <CSSTransition key={location.key} classNames='fade' timeout={200}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>

      <Link to='/'>
        <button className='about-button'>Back to Home</button>
      </Link>
    </div>
  )
}

export default About
