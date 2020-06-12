const express = require('express')
const Smartphone = require('../models/smartphone')

const router = new express.Router()

// smartphones reading endpoint
router.get('/smartphones', (req, res) => {
    res.send('smartphones devices')
})

// smartphone reading endpoint
router.get('/smartphones/:id', (req, res) => {
    res.send('smartphone device')
})

module.exports = router