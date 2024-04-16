import './App.css';
import image from "./image.png"
import image2 from "./image2.png"
import React, {useState, useEffect} from "react" ;
import axios from "axios"
import Loading from './Loading';
import { data } from 'autoprefixer';




function App() {
  const [username,setName] = useState("");
  const [password,setPassword] = useState("");
  const[errors, setErrors] =useState([])
  let err="";
  const[loading,setloading]=useState(false);
  const[message, setMessage]=useState("");
  
  
 
 
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
   setloading(true);


   const error = Validate();
   setErrors(error)
   setName("")
   setPassword("")
   setloading(true);

   
    
   
     try {
     const response = await axios.post('https://30fe-2401-4900-1cc4-177a-d94b-9393-c201-ede5.ngrok-free.appcd /verify-password', {
       username: username,
       password: password
     });

     
     console.log(loading);
 
     //console.log(response.data)
     if(response.ok){
      alert("Login successful");
     } else {
      alert("Invalid username or password");
     }
  } catch (error) {
     console.error('Error:', error);
     alert('sucessful login');
   }   setloading(false);
}
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
 
   return(
    <div> 
      {loading?(<Loading/>):(
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
    <p className='err'>{err}</p>
    <p className='mr-30 ab'>Have not any account?</p>
    <p className='ml-30 text'>Sign Up</p>
     </div>
     </div>
     {message &&<p>{message}</p>}
     </form >
 )}
     </div>
    ) 
}

export default App;
