import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='header' id='header'>
        <div className='hP' id='hP'>
            <div className='hC-1' id='hC-1'>
                <h3>Hello! I am</h3>
                <h1>Chinthoju Shiva Kumar</h1>
            </div>
            <div className='hC-2' id='hC-2'>
                <h2>I am into <span className='span'>Full Stack Developer </span></h2>
            </div>
            <div className='hC-3' id='hC-3'>
                  <a href='#header-2'><button className='btn btn-primary'>About Me</button></a>
            </div>
        </div>
    </div>
  )
}

export default Home