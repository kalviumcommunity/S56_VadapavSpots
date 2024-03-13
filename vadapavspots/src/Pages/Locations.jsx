import React , {useEffect , useState} from 'react'
import Navbar from '../Components/Navbar'
import data from "../DummyData.json"
import Card from '../Components/Card'
import "./Locations.css"
import axios from "axios"

const Locations = () => {

  const [data , setData] = useState([])
  const [users , setUsers] = useState([])
  const [curruser , setCurrUser] = useState("All")

  function getData(){
    axios.get("https://ayush-s56-vadapavspots.onrender.com/getdata")
      .then((res)=>{
        let filteredData = curruser == "All" ? res.data : res.data.filter((el)=>{
          return el.created_by === curruser
        })
        setData(filteredData)
      })
      .catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    axios.get("https://ayush-s56-vadapavspots.onrender.com/getusers")
      .then((res)=>{
        setUsers(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    getData()
  },[curruser])

  return (
    <div>
      <Navbar showbutton={true} />
      <div  className='flex-cen' style={{flexDirection:"column"}}>
        <div className='head-div'>
          <h1>LOCATIONS</h1>
          <select className='userlist' onChange={(e)=>setCurrUser(e.target.value)}>
            <option value="All">All</option>
            {users.map((el , i)=>{
              return <option key={i} value={el.name}>{el.name}</option>
            })}
          </select>
        </div>
        <div className='grid-cont'>
            {data.length == 0 ? "No Data Found" : data.map((ele,i)=>{
                return <Card key={i} getData={getData} id={ele._id} name={ele.name} rating={ele.rating} location={ele.location} timing={ele.timing} direction={ele.direction} imageUrl={ele.imageUrl}/>
            })}
        </div>
    </div>

    </div>
  )
}

export default Locations
