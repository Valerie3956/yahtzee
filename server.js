const express = require('express')
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const {expressjwt} = require('express-jwt')
require('dotenv').config()
const URL = process.env.MONGO_URL
const SECRET = process.env.SECRET
const path = require('path')
const Game = require('./models/game')

app.use(express.json())
app.use(morgan('dev'))


const connectToDb = async () => {
    try {
        await mongoose.connect(URL)
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
}

connectToDb()

app.use("/auth", require('./routes/authRouter'))
app.use('/api', expressjwt({secret: SECRET, algorithms:["HS256"]}))
app.use('/api/game', require('./routes/gameRouter'))

//get all games

app.get("/leaderboard", async(req, res, next) => {
    try {
        const allGames = await Game.find()
        return res.status(200).send(allGames)
    }
    catch(err){
        res.send(500)
        return next(err)
    }
})

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => console.log("the server is running on port 9000"))