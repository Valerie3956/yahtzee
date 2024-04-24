import { useState } from 'react'
import Dicebox from "./Components/Dicebox.jsx"
import Footer from "./Components/Footer.jsx"
import Header from "./Components/Header.jsx"
import Scoresheet from "./Components/Scoresheet.jsx"
import { ThemeContextProvider } from './Components/ThemeContext.jsx'
import { ScoreContextProvider } from "./Components/ScoreContext.jsx"


export default function App() {
  return (
    <div>
      <ThemeContextProvider>
        <ScoreContextProvider>
          <Header />
          <Dicebox />
          <Scoresheet />
          <Footer />
        </ScoreContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

