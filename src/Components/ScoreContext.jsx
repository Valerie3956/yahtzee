import React, { useState } from "react"
import { useEffect } from "react"

const ScoreContext = React.createContext()

function ScoreContextProvider(props) {

    //states

    const [numbers, setNumbers] = React.useState([
        {
            value: 1,
            isSelected: false,
            id: 1
        },
        {
            value: 2,
            isSelected: false,
            id: 2
        },
        {
            value: 3,
            isSelected: false,
            id: 3
        },
        {
            value: 4,
            isSelected: false,
            id: 4
        },
        {
            value: 5,
            isSelected: false,
            id: 5
        },
    ])

    const [score, setScore] = React.useState(0)

    const [acesValue, setAcesValue] = React.useState({
        value: 0,
        isSelected: false
    })
    const [twosValue, setTwosValue] = React.useState({
        value: 0,
        isSelected: false
    })
    const [threesValue, setThreesValue] = React.useState({
        value: 0,
        isSelected: false
    })
    const [foursValue, setFoursValue] = React.useState({
        value: 0,
        isSelected: false
    })
    const [fivesValue, setFivesValue] = React.useState({
        value: 0,
        isSelected: false
    })
    const [sixesValue, setSixesValue] = React.useState({
        value: 0,
        isSelected: false
    })
    const [subtotalUpper, setSubtotalUpper] = React.useState(0)
    const [bonus, setBonus] = React.useState(0)
    const [totalUpper, setTotalUpper] = React.useState(0)

    const [threeOfAKindValue, setThreeOfAKindValue] = React.useState({
        value: 0,
        isSelected: false
    })

    const [fourOfAKindValue, setFourOfAKindValue] = React.useState({
        value: 0,
        isSelected: false
    })

    const [fullHouseValue, setFullHouseValue] = React.useState({
        value: 0,
        isSelected: false
    })

    const [yahtzeeValue, setYahtzeeValue] = React.useState({
        value: 0,
        isSelected: false,
        count: 0
    })

    const [chanceValue, setChanceValue] = React.useState({
        value: 0,
        isSelected: false
    })

    useEffect(() => {
        aces()
        twos()
        threes()
        fours()
        fives()
        sixes()
        subtotalUpperFunc()
        upperBonus()
        totalUpperFunc()
        threeOfAKind()
        fourOfAKind()
        fullHouse()
        yahtzee()
        chance()
    }, [numbers])

    //aces


    function aces() {
        if (acesValue.isSelected === false) {
            const acesCount = numbers.reduce((final, val) => {
                if (val.value === 1) {
                    final++
                }
                return final
            }, 0)
            setAcesValue(prevValue => {
                return {
                    ...prevValue,
                    value: acesCount
                }
            })

        }
    }


    //twos

    function twos() {
        if (twosValue.isSelected === false) {
            const twosCount = numbers.reduce((final, val) => {
                if (val.value === 2) {
                    final += val.value
                }
                return final
            }, 0)
            setTwosValue(prevValue => {
                return {
                    ...prevValue,
                    value: twosCount
                }
            })
        }

    }


    //threes

    function threes() {
        if (threesValue.isSelected === false) {

            const threesCount = numbers.reduce((final, val) => {
                if (val.value === 3) {
                    final += val.value
                }
                return final
            }, 0)
            setThreesValue(prevValue => {
                return {
                    ...prevValue,
                    value: threesCount
                }
            })
        }
    }

    //fours

    function fours() {
        if (foursValue.isSelected === false) {

            const foursCount = numbers.reduce((final, val) => {
                if (val.value === 4) {
                    final += val.value
                }
                return final
            }, 0)
            setFoursValue(prevValue => {
                return {
                    ...prevValue,
                    value: foursCount
                }
            })
        }
    }

    //fives

    function fives() {
        if (fivesValue.isSelected === false) {

            const fivesCount = numbers.reduce((final, val) => {
                if (val.value === 5) {
                    final += val.value
                }
                return final
            }, 0)
            setFivesValue(prevValue => {
                return {
                    ...prevValue,
                    value: fivesCount
                }
            })
        }
    }


    //sixes

    function sixes() {
        if (sixesValue.isSelected === false) {

            const sixesCount = numbers.reduce((final, val) => {
                if (val.value === 6) {
                    final += val.value
                }
                return final
            }, 0)
            setSixesValue(prevValue => {
                return {
                    ...prevValue,
                    value: sixesCount
                }
            })
        }
    }

    //total Upper

    function subtotalUpperFunc() {
        setSubtotalUpper(acesValue.value + twosValue.value + threesValue.value + foursValue.value + fivesValue.value + sixesValue.value)
    }

    //bonus

    function upperBonus() {
        if (subtotalUpper >= 63) {
            setBonus(35)
        } else {
            setBonus(0)
        }
    }

    //total Upper plus bonus

    function totalUpperFunc() {
        setTotalUpper(subtotalUpper + bonus)
    }

    //three of a kind

    function threeOfAKind() {
        if(threeOfAKindValue.isSelected === false){
            const diceValues = []
            numbers.map(x => diceValues.push(x.value))
            diceValues.sort((a, b) => a - b)
            if (diceValues[0] === diceValues[2] || diceValues[1] === diceValues[3] || diceValues[2] === diceValues[4]) {
                const threeOfAKind = diceValues.reduce((final, val) => {
                    return final += val
                }, 0)
                setThreeOfAKindValue(prevValue => {
                    return {
                        ...prevValue,
                        value: threeOfAKind
                    }
                })
            } else {
                setThreeOfAKindValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 0
                    }
                })
            }
        }
    }


    //four of a kind

    function fourOfAKind() {
        if(fourOfAKindValue.isSelected === false){
            const diceValues = []
            numbers.map(x => diceValues.push(x.value))
            diceValues.sort((a, b) => a - b)
            if (diceValues[0] === diceValues[3] || diceValues[1] === diceValues[4]) {
                const fourOfAKind = diceValues.reduce((final, val) => {
                    return final += val
                }, 0)
                setFourOfAKindValue(prevValue => {
                    return {
                        ...prevValue,
                        value: fourOfAKind
                    }
                })
            } else {
                setFourOfAKindValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 0
                    }
                })
            }
        }
    }

    //full house

    function fullHouse() {
        if(fullHouseValue.isSelected === false){
            const diceValues = []
            numbers.map(x => diceValues.push(x.value))
            diceValues.sort((a, b) => a - b)
            if ((diceValues[0] === diceValues[1] && diceValues[2] === diceValues[4]) ||
            (diceValues[0] === diceValues[2] && diceValues[3] === diceValues[4])) {
                setFullHouseValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 25
                    }
                })
            } else {
                setFullHouseValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 0
                    }
                })
            }
        }
    }

    //small straight

    function smallStraight(){
        if (smallStraightValue.isSelected === false){
            const diceValues = []
            numbers.map(x => diceValues.push(x.value))
            diceValues.sort((a, b) => a - b)
            if((diceValues[0] + 1 === diceValues[1] && diceValues[1] + 1 === diceValues[2]) || (diceValues[1] + 1 === diceValues[2] && diceValues[2] + 1 === diceValues[3]) || (diceValues[2] + 1 === diceValues[3] && diceValues[3] + 1 === diceValues[4])){
                setSmallStraightValue
            }
        }
    }

    //large straight

    //yahtzee

    function yahtzee() {
        if(yahtzeeValue.isSelected === false){
            const diceValues = []
            numbers.map(x => diceValues.push(x.value))
            diceValues.sort((a, b) => a - b)
            if (diceValues[0] === diceValues[4]) {
                setYahtzeeValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 50,
                    }
                })
            } else {
                setYahtzeeValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 0
                    }
                })
            }
        }
    }

    //chance

    function chance() {
        if(chanceValue.isSelected === false){
            const chance = numbers.reduce((final, val) => {
                return final += val.value
            }, 0)
            setChanceValue(prevValue => {
                return {
                    ...prevValue,
                    value: chance
                }
                
            })
        }
    }

    //bonus

    //total Lower

    //total Upper

    //grand total

    return (
        <ScoreContext.Provider
            value={{
                score,
                numbers,
                setNumbers,
                acesValue,
                twosValue,
                threesValue,
                foursValue,
                fivesValue,
                sixesValue,
                subtotalUpper,
                bonus,
                totalUpper,
                threeOfAKindValue,
                fourOfAKindValue,
                fullHouseValue,
                yahtzeeValue,
                chanceValue
            }}

        >
            {props.children}

        </ScoreContext.Provider>
    )


}

export { ScoreContext, ScoreContextProvider }