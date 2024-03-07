import React from 'react'
import Star from "../assets/Star.png"
import location from "../assets/Location.png"
import timing from "../assets/Time.png"
import share from "../assets/Share.png"
import "./Card.css"
import {Link} from "react-router-dom"
import axios from 'axios'

const Card = (props) => {

    
    let handleDelete = () =>{
        console.log(props.id)
        axios.delete(`https://ayush-s56-vadapavspots.onrender.com/deletespot/${props.id}`)
        .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)    
            })
    }

  return (
    <div className='card'>
        <div className='imgdiv'>
            <img src={props.imageUrl} className='Mainimg'/>
        </div>
        <div className='contentdiv'>
            <h3>{props.name}</h3>
            <div className='flex-cen rating'>
                <h4>{props.rating} </h4>
                <img src={Star}/>
                <h4>(3299)</h4>
            </div>
            <div className='flex-cen loctim'>
                <div className='flex-cen location'>
                    <img src={location}/>
                    <h4>{props.location}</h4>
                </div>
                <div className='flex-cen timing'>
                    <img src={timing}/>
                    <h4>{props.timing}</h4>
                </div>
            </div>
            <div className='flex-cen buttons'>
                <Link to={`/updatespot/${props.id}`} ><button className='dirbtn'>Update</button></Link>
                <button className='sharebtn flex-cen' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Card
