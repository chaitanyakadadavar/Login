import './index.css';
import image from "./image.png"
import image2 from "./image2.png"
import React, {useState, useEffect} from "react" ;
import axios from "axios"
import Loading from "../Loading";
import Popup from '../Popup';





function Home() {
  const [username,setName] = useState("");
  const [password,setPassword] = useState("");
  const[errors, setErrors] =useState([])
  const[loading,setLoading]=useState(false);
  const [popup, setPopup] = useState(false);
  
  
 
 
  const onName = (event)=>{
   setName(event.target.value);
   errors.email="";
  }
  const onPassword = (event)=>{
   setPassword(event.target.value);
   errors.password="";
  }
  const handleSubmit = async (e) => {
   e.preventDefault();
   setLoading(true);
   setPopup(true)

   const Validate = () => {
    const error = {};

    if(!username) {
       error.email ="Email is Required";
    
    }else {
         error.email ="";
    }

    if(!password) {
       error.password = "Password is Required";
    }else if  (password.length <8){
       error.password = "Password not Matched";
    }else {
      error.password = "";
    } 
     return error;
   }

   const error = Validate();
   setErrors(error)
   setName("")
   setPassword("")
   
     try {
     const response = await axios.post('https://30fe-2401-4900-1cc4-177a-d94b-9393-c201-ede5.ngrok-free.appcd /verify-password', {
       username: username,
       password: password
     });

     
 
     //console.log(response.data)
  } catch (error) {
     console.error('Error:', error);
}
    setLoading(false);
   
  }
   return(
        <div> 
      {loading ?(<Loading/>):(
     <form onSubmit={handleSubmit} name='login'>
  

     <div className='flex flex-row ' > 
     <div className='container'>
 <div className='left'>
   <div className='flex flex-row justify-evenly'>
   <img className='a' src={image} alt='logo'/>
   <h1 className='text-white mt-9 text-4xl italic ml-9'>AMS</h1>
   </div>
     <div className='flex flex-row justify-between'>
         <img  className= 'b'src={image2} alt='img'/>
         </div>
         </div>
         </div>
     <div className="card">
    <h1 className='heading'>Log In</h1>
    <div className='mr-40'>
    <input type="email" value={username} placeholder='Email or phone number'onChange={onName} className="input" /> 
    {errors.email && <div className='error'>{errors.email}</div>}
    <input type="Password" value={password} onChange={onPassword} placeholder='password' className="input mt-9 "/> 
    {errors.password && <div className='error'>{errors.password}</div>}
    </div>
    <p className='p'>Forgot password</p> <br/>
    <button className='button' type="submit">Login</button>
    <p className='mr-30 ab'>Have not any account?</p>
    <p className='ml-30 text'>Sign Up</p>
     </div>
     </div>
     </form >
 )}
    {popup && <Popup popup={popup}/>}

     </div>
    ) 
}

export default Home;
