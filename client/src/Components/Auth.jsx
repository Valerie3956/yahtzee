import React, {useState, useContext} from "react"
import AuthForm from "./AuthForm"
import {UserContext} from '../Components/UserContext'


export default function Auth(){

    const {signup, login, errMsg} = useContext(UserContext)

const initInputs = {username : "", password : ""}

const [inputs, setInputs] = useState(initInputs)
const [toggle, setToggle] = useState(false)

function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
    }))
}

function handleSignup(e){
    e.preventDefault()
    signup(inputs)
}

function handleLogin(e){
    e.preventDefault()
    login(inputs)
}
    return(
        <div>
            {toggle?
            <>
            <AuthForm
            handleChange = {handleChange}
            handleSubmit = {handleSignup}
            inputs = {inputs}
            btnText = 'Sign Up'
            errMsg = {errMsg}
            />
            <p onClick = {() => setToggle(prevToggle => !prevToggle)}>Already have an account?</p>
            </>
            :
            <>
            <AuthForm
                        handleChange = {handleChange}
                        handleSubmit = {handleLogin}
                        inputs = {inputs}
                        btnText = "Login"
                        errMsg = {errMsg}
            />
            <p onClick = {() => setToggle(prevToggle => !prevToggle)}>Don't have an account?</p>
            </>}
        </div>
    )
}