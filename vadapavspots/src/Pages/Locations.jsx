import React from 'react'
import Navbar from '../Components/Navbar'
import data from "../DummyData.json"
import Card from '../Components/Card'
import "./Locations.css"

const Locations = () => {
  return (
    <div>
      <Navbar />
      <div  className='flex-cen' style={{flexDirection:"column"}}>

        <h1>LOCATIONS</h1>
        <div className='grid-cont'>
            {data.map((ele,i)=>{
                return <Card key={i} shopName={ele.shopName} rating={ele.rating} location={ele.location} timing={ele.timing} direction={ele.direction} image={ele.image}/>
            })}
        </div>
    </div>

    </div>
  )
}

export default Locations
