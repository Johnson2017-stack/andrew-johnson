import React from 'react'
import {Link, useMatch, useResolvedPath} from 'react-router-dom'

const Nav = () => {
  return (
    <>
  <nav className="nav">
    <Link to="/home" className='site-title'>
      Johnson .
      </Link>
    <ul>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/portfolio">Portfolio</CustomLink>
      <CustomLink to="/contact">Contact</CustomLink>
    </ul>

  </nav>

</>
  )
}

function CustomLink({ to, children, ...props}) {
 const resolvedPath = useResolvedPath(to)
 const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
  <li className={isActive === to ? "active" : ""} >
    <Link to={to} {...props}>
      {children}
    </Link>
  </li>
  )
}

export default Nav