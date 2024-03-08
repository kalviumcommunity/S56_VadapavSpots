import {useState} from "react"
import './App.css'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import AddSpot from './Pages/addSpot'
import UpdateSpot from './Pages/updateSpot'
import LoginPage from './Pages/LoginPage'
import {Routes , Route} from "react-router-dom"

function App() {

  const [loggedin , setloggedin] = useState(false)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home loggedin={loggedin} setloggedin={setloggedin}/>}/>
        <Route path="/locations" element={<Locations  loggedin={loggedin}/>}/>
        <Route path="/addspot" element={<AddSpot  loggedin={loggedin}/>}/>
        <Route path="/updatespot/:id" element={<UpdateSpot  loggedin={loggedin}/>}/>
        <Route path="/login" element={<LoginPage  loggedin={loggedin} setloggedin={setloggedin}/>} />
      </Routes>
    </div>
  )
}

export default App
