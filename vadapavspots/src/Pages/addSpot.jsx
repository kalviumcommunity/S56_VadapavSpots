import React , { useState }from 'react'
import Navbar from '../Components/Navbar'
import "./addSpot.css"
import {Link , useNavigate} from "react-router-dom"
import {toast  , ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const AddSpot = ({loggedin}) => {

    let showError = {
        name:false,
        rating:false,
        location:false,
        timing:false,
        image:false,
        dir:false
    }

    const [inputValues , setInput] = useState({name:"",rating:0,location:"",timing:"",image:"",dir:""})
    const navigate = useNavigate()

    let handleChange = (e) =>{
        setInput((prev) => ({...prev , [e.target.name] : e.target.value}))
    }

    let handleSubmit = (e) =>{
        e.preventDefault()

        if (inputValues.name == ""){
            showError.name = true
        }
        if (inputValues.rating == 0){
            showError.rating = true
        }
        if (inputValues.location == ""){
            showError.location = true
        }
        if (inputValues.timing == ""){
            showError.timing = true
        }
        if (inputValues.image == ""){
            showError.image = true
        }
        if (inputValues.dir == ""){
            showError.dir = true
        }

        if (showError.name==false && showError.rating==false && showError.location==false && showError.timing==false && showError.image==false && showError.dir==false){
            console.log(inputValues)
            axios.post("https://ayush-s56-vadapavspots.onrender.com/createdata" , {
                name : inputValues.name,
                rating : inputValues.rating,
                timing : inputValues.timing,
                location : inputValues.location,
                imageUrl : inputValues.image,
                direction : inputValues.dir
            }).then((res)=>{
                console.log(res)
                console.log("Submitted")
                showSuccessToast('Data Added Successfully')
                setTimeout(()=>{
                    navigate("/locations")
                },2000)
            }).catch((err)=>{
                console.log(err)
                showErrorToast("Some Error Occured in sending data..!!")
            })
        }else{
            showErrorToast("Complete Data is Required..!!")
        }
    }

    const showSuccessToast = (msg) => {
        toast.success(msg, {
          position: "top-center",
          autoClose:1000
        });
      };

    const showErrorToast = (msg) => {
        toast.error(msg, {
          position: "top-center",
          autoClose:1000
        });
      };

  return (
    <div>
      <Navbar showbutton={true} loggedin={loggedin}/>

        <div className='addspot-content flex'>
            <div className='addspot-content-div-cont flex'>
                <div className='addspot-content-1 flex'>
                    <h1>ADD SPOT</h1>

                    <form onSubmit={handleSubmit}>  
                        <div className='entry flex'>
                            <label>Name of Shop : </label>
                            <input type="text" name="name" onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Rating of Shop : </label>
                            <input type="number" name="rating" onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Location : </label>
                            <input type="text" name="location" onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Timing : </label>
                            <input type="text" name="timing" onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Image URL : </label>
                            <input type="text" name="image" onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Directions URL : </label>
                            <input type="text" name="dir" onChange={handleChange}/>
                        </div>

                        <div className='form-btns flex'>
                            <input type="submit" value="Add Spot" />
                            <Link to="/locations" ><button>CANCEL</button></Link>
                        </div>
                    </form>
                </div>
                <div className='addspot-content-2'>
                </div>
            </div>
        </div>

        <ToastContainer />

    </div>
  )
}

export default AddSpot
