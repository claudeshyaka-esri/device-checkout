const mongoose = require('mongoose')
const validator = require('validator')

const historySchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    device: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Device'
    },
    timeStamps: {
        from: {
            type: Date,
            require: true
        }, 
        to: {
            type: Date,
            required: true,
        }
    },
}, {
    timestamps: true
})

const History = mongoose.model('History', historySchema)

module.exports = History