import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
const Nav = (p) => (
  <section id="nav" className={p.top ? 'top' : ''}>
    <nav>
      <Link id="logo" to="/">bng</Link>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </section>
)

export default Nav
