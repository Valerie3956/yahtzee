import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"



export default function Die(props){

    const {color} = useContext(ThemeContext)

    return(
        <div>
        <h1 className = {`number-${color}`} onClick = {() => props.handleClick(props.id)}>{props.number}</h1>
        </div>
    )
}