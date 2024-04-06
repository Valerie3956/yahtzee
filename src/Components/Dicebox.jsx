import React, {useContext} from "react"
import {ThemeContext} from "./ThemeContext"
import {ScoreContext} from "./ScoreContext"
import Die from "./Die.jsx"


export default function Dicebox(props) {

const {numbers, setNumbers} = React.useContext(ScoreContext)

const [count, setCount] = React.useState(3)

    const die = numbers.map(x => {
        return (
            <Die
                number={x.value}
                id={x.id}
                isSelected={x.isSelected}
                handleClick={freeze}
            />
        )
    })

    function roll() {
        if (count >= 1) {

            setNumbers(arr => {
                return arr.map(x => {
                    if (x.isSelected === true) {
                        return (
                            { ...x })
                    } else {
                        return {
                            ...x,
                            value: (Math.floor(Math.random() * 6 + 1))
                        }
                    }
                }
                    //can I change my if statement into a ternary???
    
                )
            })
            setCount(count => count - 1)
        } else {
            console.log("out of turns")
        }
    }

    function freeze(id) {
        setNumbers(arr => {
            return arr.map(x => {
                if (x.id === id){
                return {
                    ...x,
                    isSelected: !x.isSelected
                }}
                return x
            }
            )
        })
    }

    const {color} = useContext(ThemeContext)

    return (
        < div className = {`container-${color}`}>
        <div className="dice">
            {die}
            <button className={`roll-${color}`} onClick={roll}>Roll</button>
        </div>
        </div>
    )
}

//separate my onClicks so that each individual die gets toggled
