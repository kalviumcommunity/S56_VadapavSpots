import React from 'react'
import Navbar from '../Components/Navbar'
import HomeImage from "../assets/HomeImage.png"
import "./Home.css"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div style={{width:"100%"}}>
        <Navbar showbutton={false} />

        <div className='flex home'>
            <div className='content'>
                <h1>"Taste the <br />tradition, feel the passion”</h1>
                <h4> Explore the city's iconic VadaPav destinations with us!</h4>
                <Link to={localStorage.getItem("loggedin") == 'true' ? "/locations" : "/login"}><button>EXPLORE</button></Link>
            </div>

            <div className='imgDiv'>
                <img src={HomeImage}/>
            </div>

        </div>

    </div>
  )
}

export default Home
