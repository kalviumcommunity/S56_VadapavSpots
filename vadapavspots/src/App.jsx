import {useState} from "react"
import './App.css'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import AddSpot from './Pages/addSpot'
import UpdateSpot from './Pages/updateSpot'
import LoginPage from './Pages/LoginPage'
import {Routes , Route} from "react-router-dom"

function App() {

  // const [loggedin , setloggedin] = useState(localStorage.getItem("loggedin") ? localStorage.getItem("loggedin") : false)
  if (localStorage.getItem("loggedin") == null){
    localStorage.setItem("loggedin" , false)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/locations" element={<Locations />}/>
        <Route path="/addspot" element={<AddSpot />}/>
        <Route path="/updatespot/:id" element={<UpdateSpot/>}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
