const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    esri_id:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    }
})
module.exports = User