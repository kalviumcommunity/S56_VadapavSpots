import {useState , useEffect} from "react"
import './App.css'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import AddSpot from './Pages/addSpot'
import UpdateSpot from './Pages/updateSpot'
import LoginPage from './Pages/LoginPage'
import {Routes , Route} from "react-router-dom"
import axios from "axios"

function App() {

  // const [loggedin , setloggedin] = useState(localStorage.getItem("loggedin") ? localStorage.getItem("loggedin") : false)
  if (localStorage.getItem("loggedin") == null){
    localStorage.setItem("loggedin" , false)
  }
  const [users , setUsers] = useState([])

  function getusers(){
    axios.get("https://ayush-s56-vadapavspots.onrender.com/getusers")
      .then((res)=>{
        setUsers(res.data)
      })

  }

  useEffect(()=>{
    getusers()
  } , [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/addspot" element={<AddSpot />}/>
        <Route path="/updatespot/:id" element={<UpdateSpot/>}/>
        <Route path="/login" element={<LoginPage users={users}/>} />
      </Routes>
    </div>
  )
}

export default App
