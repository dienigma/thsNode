const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    createdOn:{
        type: Date,
        default: Date.now()
    },
    userName:{
        type: String,
        unique: true
    },
    googleId:{
        type: String,
        unique: true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User