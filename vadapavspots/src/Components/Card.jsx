import React from 'react'
import Star from "../assets/Star.png"
import location from "../assets/Location.png"
import timing from "../assets/Time.png"
import share from "../assets/Share.png"
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <div className='imgdiv'>
            <img src={props.image} className='Mainimg'/>
        </div>
        <div className='contentdiv'>
            <h3>{props.shopName}</h3>
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
                <button className='dirbtn'>Directions</button>
                <button className='sharebtn flex-cen'><img src={share}/> Share</button>
            </div>
        </div>
    </div>
  )
}

export default Card
