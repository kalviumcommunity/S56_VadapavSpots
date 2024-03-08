import React , {useState} from 'react'
import Navbar from '../Components/Navbar'
import {Link, useNavigate} from "react-router-dom"
import {toast  , ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./LoginPage.css"

const LoginPage = ({loggedin , setloggedin}) => {

    const [username , setUserName] = useState("")
    const [pass , setpass] = useState("")
    const navigate = useNavigate()

    let handleLogin = () =>{
        if (username != "" && pass != ""){
            document.cookie = `userName=${username}; expires=Sun, 1 January 9999 12:00:00 UTC;`
            document.cookie = `password=${pass}; expires=Sun, 1 January 9999 12:00:00 UTC;`
            console.log(document.cookie)
            showSuccessToast("Login Successful.!!")
            setTimeout(()=>{
                navigate("/")
                setloggedin(true)
            },1500)        
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
        <Navbar loggedin={loggedin}/>

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
