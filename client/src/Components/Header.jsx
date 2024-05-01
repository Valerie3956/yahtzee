import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"
import { ScoreContext } from "./ScoreContext"
import Auth from "./Auth"
import {UserContext} from '../Components/UserContext'


export default function Header() {

    const {color, toggleTheme} = useContext(ThemeContext)
    const {reset} = useContext(ScoreContext)
    const {logout} = useContext(UserContext)
    const token = localStorage.getItem("token")


    const change = color === "light"? "dark" :  "light"

    return (
        <div className = {`header-${color}`}>
            <h3>Yahtzee</h3>
   <Auth/>
   <div className = "headerBtn">
            <button onClick = {reset} className = {`roll-${color}`}>Reset Game</button>
            <button onClick = {toggleTheme} className = {`roll-${color}`}>{`Switch to ${change} theme`}</button>
            {token && <button onClick={logout} className = {`roll-${color}`}>Logout</button>}
   </div>
        </div>
    )
}