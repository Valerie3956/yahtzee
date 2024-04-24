import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

export default function Score(props){

    const {color} = useContext(ThemeContext)

const disabled = props.isSelected? "true" : "false"

    return(
        <div className = "score">
            <div className = "scoreText">

        <h4>{props.title}</h4>
        <h4>{props.desc}</h4>
            </div>
        <h3>{props.score}</h3>
      {props.button && <button className = {`selectBtn${disabled}-${color}`} isdisabled = {disabled} onClick = {props.handleClick}>Select</button>}
        </div>
    )
}