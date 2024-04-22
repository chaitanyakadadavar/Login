import "./index.css"
import { SiTicktick } from "react-icons/si";
import React, {useState} from "react" ;
function Popup (props){

    const [msg,setMsg] = useState(true);
    let popup = props.popup
    console.log(popup)

    const render = ()=>{
        setMsg(false)
    }
    return  (
        <div>
        {msg ? (

        <div className="overlay bg-blend-lighten">
         <div className="w-80 h-80 rounded-md mt-40 text-center  border border-gray-400 bg-white  mx-auto">   
        <h1 className="m-4 mt-12 text-2xl font-bold text-blue-700 ">Your Logged In Successfully</h1>
        <SiTicktick className="h-12 w-12 mx-auto" />
        <button className="border-0 rounded-md bg-gradient-to-tr from-purple-500 to-pink-500 h-10 w-20 text-white p-1.5 mt-12" onClick={render}>Okay</button>
        </div>
        </div>
    ): ""}
    </div>
    ) 
}


export default Popup ;