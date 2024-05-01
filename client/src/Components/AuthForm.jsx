import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext"


export default function AuthForm(props){

    const {btnText, handleChange, handleSubmit, inputs : {username, password}, errMsg, logout} = props

    const {color} = useContext(ThemeContext)

const token = localStorage.getItem("token")


    return(
        <div className = "form">
            <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={username} 
          name="username" 
          onChange={handleChange} 
          placeholder="Username"
          className = {`input-${color}`}/>
        <input 
          type="text" 
          value={password} 
          name="password" 
          onChange={handleChange} 
          placeholder="Password"
          className = {`input-${color}`}/>
        <button className = {`roll-${color}`}>{ btnText }</button>
      {errMsg &&  <p>{errMsg}</p>}
      </form>
        </div>
    )
}