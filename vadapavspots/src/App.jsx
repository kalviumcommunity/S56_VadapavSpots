import './App.css'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import AddSpot from './Pages/addSpot'
import UpdateSpot from './Pages/updateSpot'
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/locations" element={<Locations />}/>
        <Route path="/addspot" element={<AddSpot />}/>
        <Route path="/updatespot/:id" element={<UpdateSpot />}/>
      </Routes>
    </div>
  )
}

export default App
