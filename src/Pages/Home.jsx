import React from 'react'
import "../styles/styles.css"
import PNG from '../images/me.png'

const Home = () => {
  return (
    <>
    <div id="heading">
        <h3>Software Developer</h3>
        <h1 className='heading'>Hi, I'm <span>Andrew Johnson</span> From Washington State.</h1>
    </div>

    <img src={PNG} id="IMG" alt="USER"/>
      
    </>
  )
}

export default Home