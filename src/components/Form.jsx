import React from 'react'
import Validacion from './Validacion.js';

export default function Form(props) {

  

  const {userData, setUserData} = React.useState({ 
    username: "", 
    password: "",
});

  const {errors, setErrors} = React.useState({ 
    username: "", 
    password: "",
});


function handleInputChange(event){
  setErrors(
    Validacion({
      ...userData,
      [event.target.name]: event.target.value,

    })
  )
  
  
  setUserData({
    ...userData,
    [event.target.name]: event.target.value,
  });
}

function handleSubmit(event){
  event.preventDefault();
  props.login(userData);
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input 
        type="email" 
        name="username" 
        placeholder='asdfg@ddd.com' 
        value={userData.username} 
        onChange={handleInputChange}/>

        <p>{errors.username && errors.username}</p>

      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        name="password" 
        value={userData.password}
        onChange={handleInputChange}/>

        <p>{errors.password && errors.password}</p>
    
      <button type='submit'> Login </button>
      </form>
    </div>
  )
}
