const express = require('express')
const Device = require('../models/device')

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
router.get('/devices', async (req, res) => {
    try {
        const devices = await Device.find({})
        res.send(devices)
    } catch (e) {
        res.status(500).send()
    }
})

// device reading endpoint
router.get('/devices/:id', async (req, res) => {
    try {
        const device = await Device.findById(req.params.id)

        if(!device){
            res.status(404).send()
        }

        res.send(device)
    } catch (e) {
        res.status(500).send()
    }
})

// device updating endpoint
router.patch('devices/:id', async (req, res) => {
    // added field vaidation

    // ensure updated device exit

    // update device

    // catch any errors.
    
    res.send('update device endpoint.')
})

// device deletion endpoint
router.delete('/devices/:id', async (req, res) => {
    try {
        const device = await Device.findByIdAndDelete(req.params.id)
        
        if(!device){
            return res.status(404).send()
        }

        res.send(device)
    } catch (e) {
        res.status(500).send()
    }
})

// device reading by type endpoint
// router.get('/devices/:type', async (req, res) => {
//     const _type = req.params.type

//     try {
//         const devices = await Device.find({ 
//             device_type: _type
//         })
//         res.send(devices)    
//     } catch (e) {
//         res.status(500).send()
//     }
// })

module.exports = router
