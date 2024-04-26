import React from "react";

export default function AuthForm(props){

    const {btnText, handleChange, handleSubmit, inputs : {username, password}, errMsg} = props






    return(
        <div>
            <form onSubmit={handleSubmit} className = "form">
        <input 
          type="text" 
          value={username} 
          name="username" 
          onChange={handleChange} 
          placeholder="Username"/>
        <input 
          type="text" 
          value={password} 
          name="password" 
          onChange={handleChange} 
          placeholder="Password"/>
        <button className = "button">{ btnText }</button>
      {errMsg &&  <p>{errMsg}</p>}
      </form>
        </div>
    )
}