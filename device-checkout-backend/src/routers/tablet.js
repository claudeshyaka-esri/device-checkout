const express = require('express')
const Tablet = require('../models/tablet')

const router = new express.Router()


// laptops reading endpoint
router.get('/devices/tablets', (req, res) => {
    res.send('tablets devices')
})

// laptop reading endpoint
router.get('/devices/tablets/:id', (req, res) => {
    res.send('tablet device')
})

module.exports = router
