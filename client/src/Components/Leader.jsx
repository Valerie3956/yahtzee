import React from 'react'

export default function Leader(props){

const {score, user:{username}, date} = props

    return(
        <div className = "leader">
            <h4>{username}</h4>
            <h4>{score} </h4>
            <h4>{date.slice(0,10)}</h4>
        </div>
    )
}