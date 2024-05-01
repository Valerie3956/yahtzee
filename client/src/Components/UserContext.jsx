import React, { useState, useContext } from "react";
import axios from "axios"
import { ScoreContext } from "./ScoreContext";

export const UserContext = React.createContext()


export default function UserProvider(props){

const initState = {
    user : JSON.parse(localStorage.getItem("user")) || {}, 
token : localStorage.getItem("token") ||  "", 
userGames : JSON.parse(localStorage.getItem("userGames")) || []
}

const [userState, setUserState] = useState(initState)
const [errMsg, setErrMsg] = useState("")

function signup(credentials){
axios.post('/auth/signup', credentials)
.then(res => {
    const {user, token} = res.data
    localStorage.setItem("token" , token)
    localStorage.setItem("user", JSON.stringify(user))
    setUserState(prevUserState => ({
        ...prevUserState,
        user,
        token
    }))
})
.catch(err => setErrMsg(err.response.data.errMsg))
}

function login(credentials){
    axios.post('/auth/login', credentials)
    .then(res => {
        const {user, token, userGames} = res.data
        localStorage.setItem("token" , token)
        localStorage.setItem("user", JSON.stringify(user))
        localStorage.setItem("userGames", JSON.stringify(userGames))
        setUserState(prevUserState => ({
            ...prevUserState,
            user,
            token,
            userGames
        }))
    })
    .catch(err => setErrMsg(err.response.data.errMsg))
}

async function logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('userGames')
    setUserState({
        user :  {}, 
token :  "", 
userGames : []
    })
    console.log('logged out')
}

//add game

const {reset} = useContext(ScoreContext)

const gameAxios = axios.create()

gameAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function addGame(newGame){
    const game = {score : newGame}
    gameAxios.post('/api/game', game)
    .then(res => 
        {setUserState(prevUserState => ({
        ...prevUserState,
        userGames : [...prevUserState.userGames, res.data]
    })
)
reset()
}
)
.catch(err => console.log(err.response.data.errMsg))
}

    return(
<UserContext.Provider
value = {{
...userState,
signup,
login,
logout,
addGame,
errMsg
}}
>
{props.children}
</UserContext.Provider>

    )
}

