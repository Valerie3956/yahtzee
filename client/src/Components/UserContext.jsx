import React, { useState, useEffect } from "react";
import axios from "axios"

export const UserContext = React.createContext()


export default function UserProvider(props){

const initState = {
    user : localStorage.getItem("user") || {}, 
token : localStorage.getItem("token") ||  "", 
userGames : localStorage.getItem("userGames") || []
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

    return(
<UserContext.Provider
value = {{
...userState,
signup,
login,
errMsg
}}
>
{props.children}
</UserContext.Provider>

    )
}

