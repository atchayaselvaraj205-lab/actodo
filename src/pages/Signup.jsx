
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup(props) {

    const users= props.users 
    const setusers = props.setusers
    const navigate= useNavigate()

    const[enterusername,setenterusername]=useState()
    const[enterpassword,setenterpassword]=useState()
    const[enterconfirmpassword,setenterconfirmpassword]=useState("")

     function handleUInput(event)
    {
      setenterusername(event.target.value)
    }

    function handlePInput(event)
    {
        setenterpassword(event.target.value)
    }
    function addUser()
    {
        setusers([...users,{username:enterusername,password:enterpassword}])
        
        navigate('/Login')
        }
    

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi!</h1>
                <p>I help you manage your activities after you login :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username"
                        onChange={handleUInput}></input>

                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password"
                        onChange={handlePInput}></input>

                    <input type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="confirm password"
                        onChange={(event)=>setenterconfirmpassword(event.target.value)}></input>

                    <button onClick={addUser} className="bg-[#FCA201] w-24 p-1 rounded-md">
                        Sign up
                    </button>
                    <p>Already have an account?<Link to="/Login" className="underline text-blue-600">Login</Link></p>

                </div>
            </div>
        </div>

    )
}
export default Signup