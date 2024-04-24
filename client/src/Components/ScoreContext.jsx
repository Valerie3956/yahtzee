import React, { useState } from "react"
import { useEffect } from "react"

const ScoreContext = React.createContext()

function ScoreContextProvider(props) {

    //states

    const initNumbers = [
        {
            value: null,
            isSelected: false,
            id: 1
        },
        {
            value: null,
            isSelected: false,
            id: 2
        },
        {
            value: null,
            isSelected: false,
            id: 3
        },
        {
            value: null,
            isSelected: false,
            id: 4
        },
        {
            value: null,
            isSelected: false,
            id: 5
        },
    ]

    const [numbers, setNumbers] = React.useState(initNumbers)


    const [count, setCount] = React.useState(3)

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

    const [smallStraightValue, setSmallStraightValue] = React.useState({
        value: 0,
        isSelected: false
    })

    const [largeStraightValue, setLargeStraightValue] = React.useState({
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

    const [lowerBonusValue, setLowerBonusValue] = React.useState({
        value: 0,
    })

    const [totalLower, setTotalLower] = React.useState(0)
    const [grandTotalValue, setGrandTotalValue] = React.useState(0)

    useEffect(() => {
        aces()
        twos()
        threes()
        fours()
        fives()
        sixes()
        threeOfAKind()
        fourOfAKind()
        fullHouse()
        smallStraight()
        largeStraight()
        yahtzee()
        chance()
        lowerBonus()
        calculateScore()
    }, [numbers])


    useEffect(() => {
        if(totalUpper !== 0 && totalLower !== 0){
            grandTotal()
        }
    }, [totalLower, totalUpper])

    useEffect(() => {
        if(subtotalUpper !==0){
            totalUpperFunc()
        }
    }, [subtotalUpper, bonus])
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

    
    async function totalUpperFunc() {
        if (
            acesValue.isSelected &&
            twosValue.isSelected &&
            threesValue.isSelected &&
            foursValue.isSelected &&
            fivesValue.isSelected &&
            sixesValue.isSelected
        ) {
            const subtotal = acesValue.value + twosValue.value + threesValue.value + foursValue.value + fivesValue.value + sixesValue.value;
            setSubtotalUpper(subtotal);
            if (subtotal >= 63) {
                setBonus(35);
            } else {
                setBonus(0);
            }
            setTotalUpper(subtotal + bonus);
        } 
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
            if(diceValues[0]===null){
                setFullHouseValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 0
                    }
                })
            }else if ((diceValues[0] === diceValues[1] && diceValues[2] === diceValues[4]) ||
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
            if((diceValues[0] + 1 === diceValues[1] && diceValues[1] + 1 === diceValues[2]) 
            || (diceValues[1] + 1 === diceValues[2] && diceValues[2] + 1 === diceValues[3]) 
        || (diceValues[2] + 1 === diceValues[3] && diceValues[3] + 1 === diceValues[4])){
                setSmallStraightValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 30
                    }
                })
            } else {
                setSmallStraightValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 0
                    }
            }
        )}
    }
}
    


    //large straight

    function largeStraight(){
        if (largeStraightValue.isSelected === false){
            const diceValues = []
            numbers.map(x => diceValues.push(x.value))
            diceValues.sort((a, b) => a - b)
            if((diceValues[0] + 1 === diceValues[1] && diceValues[1] + 1 === diceValues[2] && diceValues[2] + 1 === diceValues[3] && diceValues[3] + 1 === diceValues[4])){
                setLargeStraightValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 40
                    }
                })
            } else {
                setLargeStraightValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 0
                    }
            }
        )}
            }
        }
    


    //yahtzee

    function yahtzee() {
        if(yahtzeeValue.isSelected === false){
            const diceValues = []
            numbers.map(x => diceValues.push(x.value))
            diceValues.sort((a, b) => a - b)

            if (diceValues[0] === null){
                setYahtzeeValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 0
                    }
                })
            } 
            else if (diceValues[0] === diceValues[4]) {
                setYahtzeeValue(prevValue => {
                    return {
                        ...prevValue,
                        value: 50,
                    }
                })
            } 
            else {
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

    function lowerBonus(){
        if(yahtzeeValue.isSelected === true && yahtzeeValue.value === 50){
            const diceValues = []
            numbers.map(x => diceValues.push(x.value))
            diceValues.sort((a, b) => a - b)
            if(diceValues[0]=== null){
                setLowerBonusValue(prevValue => prevValue)
            }else if (diceValues[0] === diceValues[4]) {
                setLowerBonusValue(prevValue => {
                    return {
                        ...prevValue,
                        value : prevValue.value + 100

                    }
                })
            }
        }
    }

    //total Lower

    async function totalLowerFunc() {
        return new Promise((resolve, reject) => {
            if (
                threeOfAKindValue.isSelected &&
                fourOfAKindValue.isSelected &&
                fullHouseValue.isSelected &&
                smallStraightValue.isSelected &&
                largeStraightValue.isSelected &&
                yahtzeeValue.isSelected &&
                chanceValue.isSelected
            ) {
                setTotalLower(threeOfAKindValue.value + fourOfAKindValue.value + fullHouseValue.value + smallStraightValue.value + largeStraightValue.value + yahtzeeValue.value + chanceValue.value + lowerBonusValue.value);
                resolve();
            } 
        });
    }
    
    async function grandTotal() {
        return new Promise((resolve, reject) => {
            setGrandTotalValue(totalUpper + totalLower);
            resolve();
        });
    }
    

//calculate score
async function calculateScore() {
    try {
        await totalUpperFunc();
        await totalLowerFunc();
    } catch (err) {
        console.error(err);
    }
}





    //select

    function select(key) {
        setCount(3)
        setNumbers(initNumbers)
        calculateScore()
        switch (key) {
            case "aces":
                setAcesValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "twos":
                setTwosValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "threes":
                setThreesValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "fours":
                setFoursValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "fives":
                setFivesValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "sixes":
                setSixesValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "threeOfAKind":
                setThreeOfAKindValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "fourOfAKind":
                setFourOfAKindValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "fullHouse":
                setFullHouseValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "smallStraight":
                setSmallStraightValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "largeStraight":
                setLargeStraightValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "yahtzee":
                setYahtzeeValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "chance":
                setChanceValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            case "lowerBonus":
                setLowerBonusValue(prevValue => ({ ...prevValue, isSelected: true }));
                break;
            default:
                console.error(`Invalid state key: ${key}`);
                break;
        }
    }




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
                smallStraightValue,
                largeStraightValue,
                yahtzeeValue,
                chanceValue,
                lowerBonusValue,
                totalLower,
                grandTotalValue,
                select,
                count,
                setCount
            }}

        >
            {props.children}

        </ScoreContext.Provider>
    )



}
export { ScoreContext, ScoreContextProvider }