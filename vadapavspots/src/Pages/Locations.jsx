import React , {useEffect , useState} from 'react'
import Navbar from '../Components/Navbar'
import data from "../DummyData.json"
import Card from '../Components/Card'
import "./Locations.css"
import axios from "axios"

const Locations = () => {

  const [data , setData] = useState([])

  useEffect(()=>{
    axios.get("https://ayush-s56-vadapavspots.onrender.com/getdata")
      .then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
      
  },[])

  return (
    <div>
      <Navbar />
      <div  className='flex-cen' style={{flexDirection:"column"}}>

        <h1>LOCATIONS</h1>
        <div className='grid-cont'>
            {data.map((ele,i)=>{
                return <Card key={i} name={ele.name} rating={ele.rating} location={ele.location} timing={ele.timing} direction={ele.direction} imageUrl={ele.imageUrl}/>
            })}
        </div>
    </div>

    </div>
  )
}

export default Locations
