const mongoose = require('mongoose')
const validator = require('validator')

const Metadata = mongoose.model('Metadata', {
    asset_number:{
        type: String
    },
    unit_number: {
        type: String
    },
    comment:{
        type: String
    },
    availability:{
        type: Boolean
    },
    history:[
        
    ],
    location:{
        type: String,
        required: true,
    },
})

module.exports = Metadata