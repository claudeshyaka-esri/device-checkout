const express = require('express')
const Device = require('../models/device')

const router = new express.Router()

router.get('/test', (req, res) => {
    res.send("Hello world!");
})

// device creation endpoint
router.post('/devices', async (req, res) => {
    const device = new Device(req.boby)

    try {
        await device.save()
        res.status(201).send(device)
    } catch (e) {
        res.status(400).send(e)
    }
})

// devices reading endpoint
router.get('/devices', async (req, res) => {
    try {
        const devices = await Device.find({})
        res.send(devices)
    } catch (e) {
        res.status(500).send()
    }
})

// device reading by type endpoint
router.get('/devices/:type', async (req, res) => {
    const _type = req.params.type

    try {
        const devices = await Device.find({ 
            device_type: _type
        })
        res.send(devices)    
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
