import React , {useState} from 'react'
import Navbar from '../Components/Navbar'
import {Link, useNavigate} from "react-router-dom"
import {toast  , ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./LoginPage.css"
import axios from "axios"

const LoginPage = () => {

    const [username , setUserName] = useState("")
    const [pass , setpass] = useState("")
    const navigate = useNavigate()

    let handleLogin = () =>{
        if (username != "" && pass != ""){
            axios.post("https://ayush-s56-vadapavspots.onrender.com/auth" , {username: username , password : pass}).then((el)=>{
                // console.log(el.data)
                document.cookie = `token=${el.data}; expires=Sun, 1 January 9999 12:00:00 UTC`
            })
            showSuccessToast("Login Successful.!!")
            setTimeout(()=>{
                localStorage.setItem("loggedin" , true)
                navigate("/")
            },1500)        
            document.cookie = `userName=${username}; expires=Sun, 1 January 9999 12:00:00 UTC;`
            document.cookie = `password=${pass}; expires=Sun, 1 January 9999 12:00:00 UTC;`
            // console.log(document.cookie)
        }else{
            showErrorToast("UserName and Password is Required..!!")
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
    <div className='login-page'>
        <Navbar/>

        <div className='flex main-cont'>
            <div className=' flex login-cont'>
                <h1>Login Page</h1>
                <div className='flex login-entry'>
                    <label>Enter UserName : </label>
                    <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div className='flex login-entry'>
                    <label>Enter Password : </label>
                    <input type="password"  onChange={(e)=>setpass(e.target.value)}/>
                </div>
                <div className='flex login-btns'>
                    <button className='login-btn' onClick={handleLogin}>Login</button>
                    <Link to="/"><button className='cancel-btn'>Cancel</button></Link>
                </div>
            </div>
        </div>

        <ToastContainer />

    </div>
  )
}

export default LoginPage
