import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { ScoreContext } from "./ScoreContext"

export default function Scoresheet(props) {

    const { color } = useContext(ThemeContext)
    const {acesValue, twosValue, threesValue, foursValue, fivesValue, sixesValue, subtotalUpper, bonus, totalUpper, threeOfAKindValue, fourOfAKindValue, fullHouseValue, yahtzeeValue, chanceValue} = useContext(ScoreContext)

    return (
        < div className={`container-${color}`}>
            <div className="scoresheet">
                <div className={`upper-${color}`}>
                    <h2>Upper</h2>

                    <label htmlFor="aces">Aces</label>
                    <label htmlFor="aces">count and add only aces</label>
                    <input
                        name="aces"
                        onChange="TBD"
                        disabled="false"
                        value= {acesValue.value}
                        placeholder="aces"
                        id="aces" />

                    <label htmlFor="twos">Twos</label>
                    <label htmlFor="twos">count and add only twos</label>
                    <input
                        name="twos"
                        onChange="TBD"
                        disabled="false"
                        value={twosValue.value}
                        placeholder="twos"
                        id="twos" />

                    <label htmlFor="threes">Threes</label>
                    <label htmlFor="threes">count and add only threes</label>
                    <input
                        name="threes"
                        onChange="TBD"
                        disabled="false"
                        value={threesValue.value}
                        placeholder="threes"
                        id="threes" />

                    <label htmlFor="fours">Fours</label>
                    <label htmlFor="fours">count and add only fours</label>
                    <input
                        name="fours"
                        onChange="TBD"
                        disabled="false"
                        value={foursValue.value}
                        placeholder="fours"
                        id="fours" />

                    <label htmlFor="fives">Fives</label>
                    <label htmlFor="fives">count and add only fives</label>
                    <input
                        name="fives"
                        onChange="TBD"
                        disabled="false"
                        value={fivesValue.value}
                        placeholder="fives"
                        id="fives" />

                    <label htmlFor="sixes">Sixes</label>
                    <label htmlFor="sixes">count and add only sixes</label>
                    <input
                        name="sixes"
                        onChange="TBD"
                        disabled="false"
                        value={sixesValue.value}
                        placeholder="sixes"
                        id="sixes" />
                    <label htmlFor="total-upper">Total Upper</label>
                    <input
                        name="total-upper"
                        onChange="TBD"
                        disabled="false"
                        value={subtotalUpper}
                        placeholder="Total Score"
                        id="total-upper" />

                    <label htmlFor="upper-bonus">BONUS</label>
                    <label htmlFor="upper-bonus">bonus if score is 63 or more</label>
                    <input
                        name="upper-bonus"
                        onChange="TBD"
                        disabled="false"
                        value={bonus}
                        placeholder="Score 35"
                        id="upper-bonus" />

                    <label htmlFor="totalUp">Total Upper</label>
                    <input
                        name="totalUp"
                        onChange="TBD"
                        disabled="false"
                        value={totalUpper}
                        placeholder="Total"
                        id="totalUp" />

                </div>
                {/* lower  */}

                <div className={`lower-${color}`}>
                    <h2>Lower</h2>

                    <label htmlFor="threeOfAKind">Three Of A Kind</label>
                    <label htmlFor="threeOfAKind">add total of all dice</label>
                    <input
                        name="threeOfAKind"
                        onChange="TBD"
                        disabled="false"
                        value={threeOfAKindValue.value}
                        placeholder="threeOfAKind"
                        id="threeOfAKind" />

                    <label htmlFor="FourOfAKind">Four Of A Kind</label>
                    <label htmlFor="FourOfAKind">add total of all dice</label>
                    <input
                        name="FourOfAKind"
                        onChange="TBD"
                        disabled="false"
                        value={fourOfAKindValue.value}
                        placeholder="FourOfAKind"
                        id="FourOfAKind" />

                    <label htmlFor="fullHouse">Full House</label>
                    <label htmlFor="fullHouse">score 25</label>
                    <input
                        name="fullHouse"
                        onChange="TBD"
                        disabled="false"
                        value={fullHouseValue.value}
                        placeholder="fullHouse"
                        id="fullHouse" />

                    <label htmlFor="smStraight">Small Straight</label>
                    <label htmlFor="smStraight">score 30</label>
                    <input
                        name="smStraight"
                        onChange="TBD"
                        disabled="false"
                        value="30"
                        placeholder="smStraight"
                        id="smStraight" />

                    <label htmlFor="lgStraight">Large Straight</label>
                    <label htmlFor="lgStraight">score 40</label>
                    <input
                        name="lgStraight"
                        onChange="TBD"
                        disabled="false"
                        value="40"
                        placeholder="lgStraight"
                        id="lgStraight" />

                    <label htmlFor="notYahtzee">NOT YAHTZEE BECAUSE OF COPYRIGHT REASONS</label>
                    <label htmlFor="notYahtzee">score 50</label>
                    <input
                        name="notYahtzee"
                        onChange="TBD"
                        disabled="false"
                        value={yahtzeeValue.value}
                        placeholder="notYahtzee"
                        id="notYahtzee" />

                    <label htmlFor="Chance">Chance</label>
                    <label htmlFor="Chance">add total of all dice</label>
                    <input
                        name="Chance"
                        onChange="TBD"
                        disabled="false"
                        value={chanceValue.value}
                        placeholder="Chance"
                        id="Chance" />

                    <label htmlFor="lower-bonus">Bonus</label>
                    <label htmlFor="lower-bonus">score 100 per bonus</label>
                    <input
                        name="lower-bonus"
                        onChange="TBD"
                        disabled="false"
                        value="tbd"
                        placeholder="Score 35"
                        id="lower-bonus" />

                    <label htmlFor="totalLow">Total Lower</label>
                    <input
                        name="totalLow"
                        onChange="TBD"
                        disabled="false"
                        value="tbd"
                        placeholder="Total"
                        id="totalLow" />
                    <label htmlFor="totalUpper">Total Upper</label>
                    <input
                        name="totalUpper"
                        onChange="TBD"
                        disabled="false"
                        value="tbd"
                        placeholder="Total"
                        id="totalUpper" />
                    <label htmlFor="grandTotal">GRAND TOTAL</label>
                    <input
                        name="grandTotal"
                        onChange="TBD"
                        disabled="false"
                        value="tbd"
                        placeholder="Total"
                        id="grandTotal" />

                </div>
            </div>
        </div>


    )
}