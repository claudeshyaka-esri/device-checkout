const mongoose = require('mongoose')
const validator = require('validator')

const Device = mongoose.model('Device', {
    device_type:{
        type: String,
        required: true,
        trim: true,
    },
    name:{
        type: String,
        required: true,
        trim: true,
    },
    operating_system:{
        type: String, 
        trim: true,
    },
    has_bluetooth:{
        type: Boolean,
        default: false,
    },
    has_camera: {
        type: Boolean,
        default: false,
    },
    has_internet: {
        type: Boolean,
        default: false,
    },
    has_gps:{
        type: Boolean,
        default: false,
    },
    memory:{
        type: Number,
        default: null,
    },
    serial_number:{
        type: String,
        required: true,
        trim: true,
    },
})

module.exports = Device