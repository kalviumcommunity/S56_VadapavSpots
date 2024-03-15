import React , {useState} from 'react'
import LogoImage from "../assets/LogoImage.png"
import "./Navbar.css"
import {Link , useNavigate} from "react-router-dom"

const Navbar = ({showbutton}) => {

  const navigate = useNavigate()

  let handleLogin = () =>{
    if(sessionStorage.getItem("loggedin") == 'true'){
      let cookies = document.cookie.split("; ")
      cookies.forEach((el)=>{
        let cookie = el.split("=")[0]
        document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
      })
      console.log(document.cookie)
      sessionStorage.setItem("loggedin" , false)
      window.location.reload()
    }else{
      navigate('/login')
    }
  }

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
            {!showbutton && <button onClick={handleLogin}>{sessionStorage.getItem("loggedin") == 'true' ? "Logout" : "Login"}</button>}
            {showbutton && <Link to="/addspot"><button id='addItembtn'>+</button></Link>}
        </div>
        
    </div>
  )
}

export default Navbar
