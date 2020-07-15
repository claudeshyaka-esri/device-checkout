const express = require('express')
const Device = require('../../models/device')
const History = require('../../models/history')
const auth = require('../../middleware/auth-user')

const router = new express.Router()


// ************************************************************
//                          User Routes
// ************************************************************

// @route       GET api/devices
// @desc        Read devices
// @access      Public
router.get('/api/devices', async (req, res) => {
    const match = {}

    if(req.query.location){
        match.location = req.query.location
    }

    if(req.query.deviceType){
        match.deviceType = req.query.deviceType
    }

    if(req.query.name){
        match.name = req.query.name
    }

    try {
        const devices = await Device.find( match, {}, {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip)
        })

        res.send(devices)
    } catch (e) {
        res.status(500).send()
    }
})

// @route       GET api/devices/assetNumber
// @desc        Read device
// @access      Public
router.get('/api/devices/:id', async (req, res) => {
    
    try {
        // TODO: change the _id to assetNumber
        const device = await Device.findOne({
            _id: req.params.id,
        })

        if(!device){
            res.status(404).send()
        }

        res.send(device)

    } catch (e) {
        res.status(500).send()
    }
})

// @route       PATCH api/devices/checkout/assertNumber
// @desc        Update device
// @access      Public
router.patch('/api/devices/checkout/:id', auth, async (req, res) => {
// TODO: Test this route
    const updates = Object.keys(req.body)
    
    const allowedUpdates = ['isAvailable', 'timeStamps']

    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation){
        return res.status(400).send({
            error: 'Invalid updates'
        })
    }
    
    try {
        // TODO: Change this query to assetNumber.
        const device = await Device.findOne({
            _id: req.params.id
        })

        if(!device){
            return res.status(404).send()
        }

        device.currentOwner = null //TODO: set to current authenticated user.
        updates.forEach((update) => {
            device[update] = req.body[update]
        })

        await device.save()

        res.send(device)

    } catch (e) {
        res.status(400).send(e)
    }
})

// @route       PATCH api/devices/checkin/assertNumber
// @desc        Update device
// @access      Private
router.patch('/api/devices/checkin/:id', auth, async (req, res) => {
// TODO: Test this route
    const updates = Object.keys(req.body)
    
    const allowedUpdates = ['isAvailable', 'timeStamps']

    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation){
        return res.status(400).send({
            error: 'Invalid updates'
        })
    }

    try {
        // TODO: Change this query to assetNumber.
        const device = await Device.findOne({
            _id: req.params.id
        })

        if(!device){
            return res.status(404).send()
        }

        // TODO: uncomment line below to record device history 
        //        once user object is available through the auth middleware.
        // await device.recordHistory(req.user._id, req.body.timeStamps)

        // make device available and clear timeStamps and currentOwner
        device.isAvailable = req.body.isAvailable
        device.timeStamps = {}
        device.currentOwner = null

        await device.save()

        res.send(device)

    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
