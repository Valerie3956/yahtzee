import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"



export default function Die(props){

    const {color} = useContext(ThemeContext)

    const change = props.isSelected? "selected" : "number"

    return(
        <div>
        <h1 data-testid = {props.id} className = {`${change}-${color}`} onClick = {() => props.handleClick(props.id)}>{props.number}</h1>
        </div>
    )
}