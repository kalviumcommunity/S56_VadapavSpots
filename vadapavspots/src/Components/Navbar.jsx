import React from 'react'
import LogoImage from "../assets/LogoImage.png"
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = ({showbutton}) => {
  return (
    <div className='flex navbar'>
        <Link to="/" className='link'><div className='flex logoside'>
            <img src={LogoImage}/>
            <div>
                <h3>VADAPAV</h3>
                <h3>SPOTS</h3>
            </div>
        </div></Link>

        <div className='flex btns'>
            <h2>LOGIN</h2>
            <button>REGISTER</button>
            {showbutton && <Link to="/addspot"><button id='addItembtn'>+</button></Link>}
        </div>

    </div>
  )
}

export default Navbar
