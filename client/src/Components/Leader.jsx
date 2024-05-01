import React from 'react'

export default function Leader(props){

const {score, user:{username}, date, color} = props

    return(
        <div className = {`leader-${color}`}>
            {username && <h4>{username}</h4>}
            <h4>{score} </h4>
            <h4>{date.slice(0,10)}</h4>
        </div>
    )
}