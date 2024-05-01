import React, {useContext} from "react";
import { ThemeContext } from "./ThemeContext";

export default function Score(props){

    const {color} = useContext(ThemeContext)

const disabled = props.isSelected? "true" : "false"

    return(
        <div className = {`scoreText-${disabled}-${color}`}>
            <div>

        <h4 className = "scoreText">{props.title}</h4>
        <h4 className = "scoreText">{props.desc}</h4>
            </div>
            <div className = "scoreBtn">
        <h3>{props.score}</h3>
      {props.button && <button className = {`selectBtn${disabled}-${color}`} isdisabled = {disabled} onClick = {props.handleClick}>Select</button>}
            </div>
        </div>
    )
}