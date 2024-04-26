import {useState, useContext, useEffect} from "react"
import axios from 'axios'
import Leader from "./Leader"

export default function Leaderboard(){

const [leaderboard, setLeaderboard] = useState([])
const [userGames, setUserGames] = useState()

useEffect(() => {
    axios.get('/leaderboard')
    .then(res => setLeaderboard(res.data))
    .catch(err => console.log(err))
  }, [])

const topTen = leaderboard.sort((a, b) => b.score - a.score).slice(0,10)

const renderedLeaderboard = topTen.map(leader => {
    return(
        <Leader 
        {...leader}
        key = {leader._id}
        />
    )
})
//if(token) then (set UserGames)


    return(
        <div className = "leaderboard">
            <h2 className = "title">Leaderboard</h2>
{renderedLeaderboard}
        </div>
        //conditionally render my top10 depending on whether I'm logged in or not
    )
}