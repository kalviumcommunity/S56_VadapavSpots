import './App.css'
import Home from './Pages/Home'
import Locations from './Pages/Locations'
import {Routes , Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/locations" element={<Locations />}/>
      </Routes>
    </div>
  )
}

export default App
