
const express = require('express')
const Device = require('../../models/device')
const auth = require('../../middleware/auth-admin')

const router = new express.Router()

// *********************************************************
//                      Admin Routes
// *********************************************************

// @route       POST api/admin/devices
// @desc        Create a device
// @access      Private
router.post('/api/admin/devices', auth, async (req, res) => {
    
    const device = new Device(req.body)

    try {
        await device.save()
        res.status(201).send(device)
    } catch (e) {
        res.status(400).send(e)
    }
})

// @route       GET api/admin/devices
// @desc        Read and query devices
// @access      Private
router.get('/api/admin/devices', auth, async (req, res) => {

    // TODO: add query filters for admin view.

    try {
        const devices = await Device.find()

        res.send(devices)
    } catch (e) {
        res.status(500).send()
    }
    
})

// @route       PATCH api/admin/devices/:id
// @desc        Update a device sp 
// @access      Private
router.patch('/api/admin/devices/:id', auth, async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['assetNumber', 'serialNumber', 'deviceType', 'name', 'operatingSystem', 'memory', 'hasBluetooth', 'hasCamera', 'hasInternet', 'hasGps', 'unitNumber', 'location', 'isAvailable', 'currentOwner', 'timeStamps', 'checkOutCount']
    
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation){
        return res.status(400).send({
            error: 'Invalid updates'
        })
    }

    try {
        const device = await Device.findOne({
            _id: req.params.id,
        })

        if(!device){
            return res.status(404).send()
        }

        updates.forEach((update) => {
            device[update] = req.body[update]
        })
        await device.save()

        res.send(device)
    } catch (e) {
        res.status(400).send(e)
    }
})

// @route       DELETE api/admin/devices/:id
// @desc        Update a device
// @access      Private
router.delete('/api/admin/devices/:id', auth, async (req, res) => {  

    // TODO: Add middleware to delete device history once device has been deleted.
    
    try {
        const device = await Device.findOneAndDelete({
            _id: req.params.id,
        })

        if(!device){
            return res.status(404).send()
        }

        res.send(device)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router
