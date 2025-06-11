import React, { useState } from 'react'
import {userState} from 'react'

function index() {
   const [state,setState]=useState("");
    console.log("state",state);
    const[password,setPassword]=useState("");
    console.log("password", password);
    const[email,setEmail]=useState("");
    console.log("email", email);
  function handleState(event){
    setState(event.target.value);
  }
  function handlePass(event){
   setPassword(event.target.value);
  
  }
  function handleEmail(event){
   setEmail(event.target.value);
  }
  function handleSubmit(event){
    if (password.length < 8){
      alert("password must contain atleast 8 characters");
      return;
    }
    console.log("submitted")
    }
  return (
      <div>
    <h1>
    hey
    </h1>
<p>enter your name</p><input type= "text"onChange={handleState}/>
<p>enter your email</p><input type= 'text'onChange={handleEmail}/>
<button onClick={()=>setState("hello")}>.    {state}</button>
<div>

</div>
<h1>
<input type='text'onChange={handleState}/>
</h1>
  <p>enter your password</p><input type='password'onChange={handlePass}/>  

   <button onClick={handleSubmit}>Submit</button>    
  </div>  
  )
}

export default index