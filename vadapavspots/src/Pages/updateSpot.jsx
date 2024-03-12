import React , {useState , useEffect} from 'react'
import Navbar from '../Components/Navbar'
import "./addSpot.css"
import {Link , useNavigate , useParams} from "react-router-dom"
import {toast  , ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

const UpdateSpot = () => {
    
    const {id} = useParams() 
    const [inputValues , setInput] = useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://ayush-s56-vadapavspots.onrender.com/getdata").then((res)=>{
            let data = res.data.filter((el)=>{
                if(el._id === id){
                    return el
                }
            })
            setInput(data[0])
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    // console.log(inputValues)

    let handleChange = (e) =>{
        setInput((prev) => ({...prev , [e.target.name] : e.target.value}))
    }

    let handleSubmit = (e) =>{
        e.preventDefault()

        if (inputValues.name != "" && inputValues.rating != "" && inputValues.location != "" && inputValues.timing != "" && inputValues.imageUrl != "" && inputValues.direction != ""){
            axios.put(`https://ayush-s56-vadapavspots.onrender.com/updatespot/${id}`,{name:inputValues.name , rating:inputValues.rating , location:inputValues.location , timing:inputValues.timing , imageUrl:inputValues.imageUrl, direction:inputValues.direction})
                .then((el)=>{
                    console.log(el)
                    showSuccessToast("Data is updated..!!")
                    setTimeout(()=>{
                        navigate("/locations")
                    },1000)
                })
                .catch((err)=>{
                    console.log(err)
                    showErrorToast("Some Error Occured in sending data..!!")
                })
        }else{
            showErrorToast("Complete Information is required.!")
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
      <Navbar showbutton={true}/>

        <div className='addspot-content flex'>
            <div className='addspot-content-div-cont flex'>
                <div className='addspot-content-1 flex'>
                    <h1> UPDATE SPOT</h1>

                    <form onSubmit={handleSubmit}>  
                        <div className='entry flex'>
                            <label>Name of Shop : </label>
                            <input type="text" name="name" defaultValue={inputValues.name} onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Rating of Shop : </label>
                            <input type="number" step="any" name="rating" defaultValue={inputValues.rating} onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Location : </label>
                            <input type="text" name="location" defaultValue={inputValues.location} onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Timing : </label>
                            <input type="text" name="timing" defaultValue={inputValues.timing} onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Image URL : </label>
                            <input type="text" name="image" defaultValue={inputValues.imageUrl} onChange={handleChange}/>
                        </div>

                        <div className='entry flex'>
                            <label>Directions URL : </label>
                            <input type="text" name="dir" defaultValue={inputValues.direction} onChange={handleChange}/>
                        </div>

                        <div className='form-btns flex'>
                            <input type="submit" value="Update" />
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

export default UpdateSpot
