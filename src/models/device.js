const mongoose = require('mongoose')
const validator = require('validator')
const History = require('./history')

const deviceSchema = new mongoose.Schema({
    assetNumber: {
        type: String,
        unique: true,
        trim: true,
        uppercase: true,
        required: true
    },
    serialNumber: {
        type: String,
        unique: true,
        uppercase: true,
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
    // TODO: Split memory object into RAM and Disk space
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
    // TODO: Add validation for phone number
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
    isAvailable: {
        type: Boolean,
        default: true,
    },
    currentOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null, 
    },
    timeStamps: {
        from: {
            type: Date
        },
        to:{
            type: Date
        }
    },
    checkOutCount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

// record device history
deviceSchema.methods.recordHistory = async (owner, timeStamps) => {
    const device = this._id

    const history = new History({
        owner,
        device,
        timeStamps
    })

    await history.save()

}

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device