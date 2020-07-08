const mongoose = require('mongoose')
const validator = require('validator')

const deviceSchema = new mongoose.Schema({
    assetNumber: {
        type: String,
        required: true
    },
    serialNumber: {
        type: String,
        required: true,
        trim: true,
    },
    deviceType: {
        type: String,
        required: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    operatingSystem:{
        type: String, 
        trim: true,
    },
    memory: {
        type: Number,
        default: null,
    },
    hasBluetooth: {
        type: Boolean,
        default: false,
    },
    hasCamera: {
        type: Boolean,
        default: false,
    },
    hasInternet: {
        type: Boolean,
        default: false,
    },
    hasGps: {
        type: Boolean,
        default: false,
    },
    unitNumber: {
        type: String,
        default: 'xxx-xxx-xxxx',
    },
    location: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },
    assignedToTask: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'task',
    },
    // history:[{
    //     owner: {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'user'
    //     },
    //     checkedOutAt:{
    //         type: Date
    //     },
    //     checkedInAt:{
    //         type: Date
    //     }
    // }],
}, {
    timestamps: true
})

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device