import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./header.css"

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <h1>FacePrep</h1>
          <div className='Avtar'>
            <Avatar style={{ backgroundColor: "blue" }}>A</Avatar>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header