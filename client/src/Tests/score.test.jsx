import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from "../App"
import Dicebox from '../Components/Dicebox';
import Scoresheet from '../Components/Scoresheet';
import { ScoreContext, ScoreContextProvider } from '../Components/ScoreContext';
import { ThemeContextProvider } from '../Components/ThemeContext';
import UserProvider from '../Components/UserContext';

// describe("App with mock state",  () => {

    // const mockState = [
    //     {
    //         value: 1,
    //         isSelected: false,
    //         id: 1
    //     },
    //     {
    //         value: 1,
    //         isSelected: false,
    //         id: 2
    //     },
    //     {
    //         value: 2,
    //         isSelected: false,
    //         id: 3
    //     },
    //     {
    //         value: 2,
    //         isSelected: false,
    //         id: 4
    //     },
    //     {
    //         value: 2,
    //         isSelected: false,
    //         id: 5
    //     },
    // ]


// it("checks for Aces Value", () => {
// render(
// <App/>
// )


// screen.debug()

// const scoreContextProvider = screen.getByTestId("scoreContext")

// scoreContextProvider.instance.setState({numbers : mockState})

// expect(screen.getByTestId("Aces")).toHaveTextContent(2)

// })
// })

describe("App with mock state values", () => {

    
    // Define a mock context provider for testing
    const MockScoreContextProvider = ({ children }) => {
        // Define the state you want to use for testing
        const mockState = [
            {
                value: 1,
                isSelected: false,
                id: 1
            },
            {
                value: 1,
                isSelected: false,
                id: 2
            },
            {
                value: 2,
                isSelected: false,
                id: 3
            },
            {
                value: 2,
                isSelected: false,
                id: 4
            },
            {
                value: 2,
                isSelected: false,
                id: 5
            },
        ]

        const initValue = {
            value : 0,
            isSelected : false
        }
        
        const initYahtzee = {
            value: 0,
            isSelected: false,
            count: 0
        }

        return (
            <ScoreContext.Provider value={{numbers : mockState,
                acesValue : initValue,
                twosValue : initValue,
                threesValue : initValue,
                foursValue : initValue,
                fivesValue : initValue,
                sixesValue : initValue,
                subTotalUpper : 0,
                bonus : 0,
                totalUpper : 0,
                threeOfAKindValue : initValue,
                fourOfAKindValue : initValue,
                fullHouseValue : initValue,
                smallStraightValue : initValue,
                largeStraightValue  :initValue,
                yahtzeeValue : initYahtzee,
                chanceValue : initValue,
                lowerBonusValue  :0,
                totalLower : 0,
                grandTotalValue : 0,
                gameComplete  : false
            }}>
        {children}
      </ScoreContext.Provider>
    );
};

// Now use the MockScoreContextProvider in your tests
it('renders the dicebox and scoresheet with moch state values', () => {
    // Render your component with the mock provider
    render(
        <ThemeContextProvider>
      <MockScoreContextProvider>
      <UserProvider>
        <Dicebox/>
        <Scoresheet/>
        </UserProvider>
      </MockScoreContextProvider>
      </ThemeContextProvider>
    );
    
    setTimeout (() => {
        
        expect(screen.getByTestId("Aces")).toHaveTextContent(2)
    }, 500)
    // Your test assertions here
});
})