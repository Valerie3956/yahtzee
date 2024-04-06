import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"

export default function Header() {

    const {color, toggleTheme} = useContext(ThemeContext)

    return (
        <div className = {`header-${color}`}>
            <h3>Not Yahtzee because I'm pretty sure that's copyrighted</h3>
            <button onClick = {toggleTheme} className = {`roll-${color}`}>Switch Theme</button>
        </div>
    )
}