const express = require('express')
const Accessory = require('../models/accessory')

const router = new express.Router()

// accessories reading endpoint
router.get('/accessories', (req, res) => {
    res.send('all accessories')
})

router.get('/accessories/:id', (req, res) => {
    res.send('one accessory')
})

module.exports = router