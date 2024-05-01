import { useState, useEffect } from 'react'
import Dicebox from "./Components/Dicebox.jsx"
import Footer from "./Components/Footer.jsx"
import Header from "./Components/Header.jsx"
import Scoresheet from "./Components/Scoresheet.jsx"
import { ThemeContextProvider } from './Components/ThemeContext.jsx'
import { ScoreContextProvider } from "./Components/ScoreContext.jsx"
import Leaderboard from './Components/Leaderboard.jsx'
import UserProvider from './Components/UserContext.jsx'


export default function App() {


  return (
    <div>
      <ThemeContextProvider>
          <ScoreContextProvider>
        <UserProvider>
            <Header />
            <Dicebox />
            <Scoresheet />
            <Leaderboard />
            <Footer />
        </UserProvider>
          </ScoreContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

