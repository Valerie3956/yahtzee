const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')


const gameSchema = new Schema ({
    score : {
        type : Number,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : User,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Game", gameSchema)