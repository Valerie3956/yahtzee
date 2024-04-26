import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"
import { ScoreContext } from "./ScoreContext"
import Auth from "./Auth"


export default function Header() {

    const {color, toggleTheme} = useContext(ThemeContext)
    const {reset} = useContext(ScoreContext)

    return (
        <div className = {`header-${color}`}>
            <h3>Yahtzee</h3>
   <Auth/>
            <button onClick = {reset} className = {`roll-${color}`}>Reset Game</button>
            <button onClick = {toggleTheme} className = {`roll-${color}`}>Switch Theme</button>
        </div>
    )
}