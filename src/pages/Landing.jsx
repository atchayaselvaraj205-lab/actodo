import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"

function Landing()
{
    const data= useLocation()
    console.log(data.state.user)

    return(

    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* header create */}
        <Header name={data.state.user}></Header>
        {/* card create */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">

          <Card backgroundColor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
          <Card backgroundColor={"#FD6663"} title={"July 7"} subtitle={"15:03:24"}></Card>
          <Card backgroundColor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
        </div>
          {/* todo create component */}
          <TodoContainer></TodoContainer>

      </div>
    </div>

  )
    
}
export default Landing