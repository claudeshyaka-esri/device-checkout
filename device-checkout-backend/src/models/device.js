const mongoose = require('mongoose')
const validator = require('validator')

const Device = mongoose.model('Device', {
    device_type:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    operating_system: {
        type: String, 
    },
    has_bluetooth: {
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
    has_gps: {
        type: Boolean,
        default: false,
    },
    memory: {
        type: Number,
    },
    serial_number:{
        type: String,
        required: true,
    },
    image: {
        type: Buffer,
    },
})

module.exports = Device