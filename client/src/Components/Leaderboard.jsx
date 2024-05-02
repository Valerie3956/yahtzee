import {useState, useContext, useEffect} from "react"
import axios from 'axios'
import Leader from "./Leader"
import { UserContext } from "./UserContext"
import { ThemeContext } from "./ThemeContext"

export default function Leaderboard(){

// const [leaderboard, setLeaderboard] = useState([])

const {color} = useContext(ThemeContext)

const {leaderboard, ...userState} = useContext(UserContext)

const token = localStorage.getItem('token')

// useEffect(() => {
//     axios.get('/leaderboard')
//     .then(res => setLeaderboard(res.data))
//     .catch(err => console.log(err))
//   }, [])

const topTen = leaderboard.sort((a, b) => b.score - a.score).slice(0,10)

const renderedLeaderboard = topTen.map(leader => {
    return(
        <Leader 
        {...leader}
        key = {leader._id}
        color = {color}
        />
    )
})



    const sortedGames = userState.userGames.sort((a, b) => b.score - a.score).slice(0,10)
    const renderedUserGames = token ? (
      <div className = {`user-leaderboard-${color}`}>
          <h2 className={`title-${color}`}>{`${userState.user.username}'s top 10`}</h2>
          {sortedGames.map(game => (
            <Leader {...game} key={game._id} color = {color} />
          ))}
        </div>
      ) : null;



    return(
      <div className={`leaderboard-${color}`}>
      <div className = {`inner-leaderboard-${color}`}>
            <h2 className = {`title-${color}`}>Leaderboard</h2>
{renderedLeaderboard}
        </div>
{ token && 
<>
{renderedUserGames}
</>
}
          </div>
    )
}