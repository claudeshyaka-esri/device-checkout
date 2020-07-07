const express = require('express')
const Device = require('../models/device')
const auth = require('../middleware/auth')

const router = new express.Router()

// device creation endpoint
router.post('/devices', async (req, res) => {
    const device = new Device(req.body)

    try {
        await device.save()
        res.status(201).send(device)
    } catch (e) {
        res.status(400).send(e)
    }
})

// devices reading endpoint
// GET /devices?location=redlands
// GET /devices?limit=10&skip=0
router.get('/devices', async (req, res) => {
    const match = {}

    //match.location = req.query.location === '' ?  :
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

// device reading endpoint
router.get('/devices/:id', async (req, res) => {
    try {
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

module.exports = router
