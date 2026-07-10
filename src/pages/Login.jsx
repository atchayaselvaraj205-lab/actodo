
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props)
{
    const navigate = useNavigate()
    const[enterusername,setenterusername]=useState()
    const[enterpassword,setenterpassword]=useState()
    
    const[ruser,setRuser]=useState(true)

    const users = props.users

    function handleUInput(event)
    {
      setenterusername(event.target.value)
    }

    function handlePInput(event)
    {
        setenterpassword(event.target.value)
    }

    function checkuser()
    {
        var userfound = false 

        users.forEach(function(item)
        {
            if(item.username === enterusername && item.password === enterpassword)
            {

                console.log("Login Successfull")
                userfound = true
                navigate("/landing",{state:{user:enterusername}})
            }
        })

        if(userfound===false)
        {
            console.log("login Failed")
            setRuser(false)
        }

    }

    
    
    return(
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi!</h1>
                {ruser? <p>I help you manage your activities after your Login :)</p>:<p className="text-red-500">please Signup before you Login</p>}
               

                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username"
                        onChange={handleUInput}></input>

                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password"
                        onChange={handlePInput}></input>

                
                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkuser}>
                        Login
                    </button>
                    <p>Don't have an account?<Link to="/Signup" className="underline text-blue-600">Signup</Link></p>

                </div>
            </div>
        </div>
    )
}

export default Login
    
