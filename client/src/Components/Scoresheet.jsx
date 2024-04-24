import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { ScoreContext } from "./ScoreContext"
import Score from "./Score"

export default function Scoresheet(props) {

    const { color } = useContext(ThemeContext)
    const {select, acesValue, twosValue, threesValue, foursValue, fivesValue, sixesValue, subtotalUpper, bonus, totalUpper, threeOfAKindValue, fourOfAKindValue, fullHouseValue, yahtzeeValue, chanceValue, smallStraightValue, largeStraightValue, lowerBonusValue, totalLower, grandTotalValue} = useContext(ScoreContext)

function click(str){
select(str)
}

    return (
        < div className={`container-${color}`}>
            <div className="scoresheet">
                <div className={`upper-${color}`}>
                    <h2>Upper</h2>

                    <Score 
                    title = "Aces"
                    desc = "count and add only aces"
                    score = {acesValue.value}
                    isSelected = {acesValue.isSelected}
                    button = {true}
                    handleClick = {() => click('aces')}
                   />
                    
                    <Score 
                    title = "Twos"
                    desc = "count and add only twos"
                    score = {twosValue.value}
                    isSelected = {twosValue.isSelected}
                    button = {true}
                    handleClick = {() => click('twos')}
                   />

                    <Score 
                    title = "Threes"
                    desc = "count and add only threes"
                    score = {threesValue.value}
                    isSelected = {threesValue.isSelected}
                    button = {true}
                    handleClick = {() => click('threes')}
                   />
                    
                    <Score 
                    title = "Fours"
                    desc = "count and add only ffours"
                    score = {foursValue.value}
                    isSelected = {foursValue.isSelected}
                    button = {true}
                    handleClick = {() => click('fours')}
                   />
                                      <Score 
                    title = "Fives"
                    desc = "count and add only fives"
                    score = {fivesValue.value}
                    isSelected = {fivesValue.isSelected}
                    button = {true}
                    handleClick = {() => click('fives')}
                   />

<Score 
                    title = "Sixes"
                    desc = "count and add only sixes"
                    score = {sixesValue.value}
                    isSelected = {sixesValue.isSelected}
                    button = {true}
                    handleClick = {() => click('sixes')}
                   />
                    
                    <Score 
                    title = "Total Upper"
                    score = {subtotalUpper}
                    button = {false}
                   />
                   
                   <Score 
                    title = "BONUS"
                    desc = "bonus if score is 63 or more"
                    score = {bonus}
                    button = {false}
                   />

                                       <Score 
                    title = "Total Upper"
                    score = {totalUpper}
                    button = {false}
                   />



                </div>
                {/* lower  */}

                <div className={`lower-${color}`}>
                    <h2>Lower</h2>

                    <Score 
                    title = "Three Of A Kind"
                    desc = "add total of all dice"
                    score = {threeOfAKindValue.value}
                    isSelected = {threeOfAKindValue.isSelected}
                    button = {true}
                    handleClick = {() => click('threeOfAKind')}
                   />

<Score 
                    title = "Four Of A Kind"
                    desc = "add total of all dice"
                    score = {fourOfAKindValue.value}
                    isSelected = {fourOfAKindValue.isSelected}
                    button = {true}
                    handleClick = {() => click('fourOfAKind')}
                   />

<Score 
                    title = "Full House"
                    desc = "score 25"
                    score = {fullHouseValue.value}
                    isSelected = {fullHouseValue.isSelected}
                    button = {true}
                    handleClick = {() => click('fullHouse')}
                   />

<Score 
                    title = "Small Straight"
                    desc = "score 30"
                    score = {smallStraightValue.value}
                    isSelected = {smallStraightValue.isSelected}
                    button = {true}
                    handleClick = {() => click('smallStraight')}
                   />
                   
                   <Score 
                    title = "Large Straight"
                    desc = "score 40"
                    score = {largeStraightValue.value}
                    isSelected = {largeStraightValue.isSelected}
                    button = {true}
                    handleClick = {() => click('largeStraight')}
                   />

<Score 
                    title = "Yahtzee"
                    desc = "score 50"
                    score = {yahtzeeValue.value}
                    isSelected = {yahtzeeValue.isSelected}
                    button = {true}
                    handleClick = {() => click('yahtzee')}
                   />

<Score 
                    title = "Chance"
                    desc = "add total of all dice"
                    score = {chanceValue.value}
                    isSelected = {chanceValue.isSelected}
                    button = {true}
                    handleClick = {() => click('chance')}
                   />

<Score 
                    title = "Yahtzee bonus"
                    desc = "score 100 per bonus"
                    score = {lowerBonusValue.value}
                    button = {false}
                   />
                   
                    <Score 
                    title = "Total Lower"
                    score = {totalLower}
                    button = {false}
                   />

<Score 
                    title = "Grand Total"
                    score = {grandTotalValue}
                    button = {false}
                   />


                </div>
            </div>
        </div>


    )
}