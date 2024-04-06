import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"


export default function Footer(){

    const {color} = useContext(ThemeContext)

    return(
        <div className = {`footer-${color}`}>
            <h3>Some Awesome Footer here</h3>

        </div>
    )
}