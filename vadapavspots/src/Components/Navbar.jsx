import React from 'react'
import LogoImage from "../assets/LogoImage.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='flex navbar'>
        <div className='flex logoside'>
            <img src={LogoImage}/>
            <div>
                <h3>VADAPAV</h3>
                <h3>SPOTS</h3>
            </div>
        </div>

        <div className='flex btns'>
            <h2>LOGIN</h2>
            <button>REGISTER</button>
        </div>

    </div>
  )
}

export default Navbar
