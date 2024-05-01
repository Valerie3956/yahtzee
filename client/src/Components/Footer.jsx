import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer(){

    const {color} = useContext(ThemeContext)

    return(
        <div className = {`footer-${color}`}>
                      <a href = "https://github.com/Valerie3956/yahtzee" className = {`repoLink-${color}`}>
            <FontAwesomeIcon icon={faGithub} />
</a>
        </div>
    )
}