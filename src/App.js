import Header from "./components/Header";
import Card from "./components/Card";
import TodoContainer from "./components/TodoContainer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";

function App() {

  const[users,setusers]=useState(
        [
        {
            username:"Atchaya",
            password:"123"
        },
        {
          username:"sebin",
          password:"sep19"
        }
    ]
    )

  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/Login' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/Signup' element={<Signup  users={users} setusers={setusers}/>}></Route>
    <Route path='/Landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App;
