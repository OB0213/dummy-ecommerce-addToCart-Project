import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    useEffect(()=>{
        let user=localStorage.getItem('user');
        if(!user)
        {
            navigate('/login');
        }

        
      

    },[])

    function mysubmit(e)
    {
        e.preventDefault();
        if(email==="omkarbhosale912@gmail.com"&&password==="omkar123")
        {
            localStorage.setItem("user",true);
            alert("User Logged in Successfully");
            navigate('/');
            window.location.reload();
           
        }
        else{
            alert("Please Enter Correct Details");
        }
    }
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center main'>
        <form className='formdata w-75 border ps-3 pe-3 pt-2 pb-2' onSubmit={mysubmit}>
            <h1 className='text-center title pt-3 pb-3'>Login</h1>

            <h5 className='emailtitle pb-2'>Enter the email:</h5>
            <div class="input-group mb-3 border">
  <span class="input-group-text border-0 bg-white px-2" id="basic-addon1">
  <i class="fa-solid fa-envelope"></i>
  </span>
  <input type="email" class="form-control border-0" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"  onChange={(e)=>setEmail(e.target.value)}/>
</div>
            <h5 className='emailtitle pb-2'>Enter the password:</h5>
            <div class="input-group mb-3 border">
  <span class="input-group-text border-0 bg-white px-2" id="basic-addon1">
  <i class="fa-solid fa-key"></i>
  </span>
  <input type="password" class="form-control border-0" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>setPassword(e.target.value)} />
</div>

            <input type='submit' value='submit' className='btn btn-primary d-block mx-auto'></input>
        </form>
      
    </div>
  )
}

export default Login
