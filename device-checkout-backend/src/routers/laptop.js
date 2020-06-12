const express = require('express')
const Laptop = require('../models/laptop')

const router = new express.Router()

// laptop reading endpoint
router.get('/laptops', (req, res) => {
    res.send('laptops')
})

router.get('/laptops/:id', (req, res) => {
    res.send('laptop')
})

module.exports = router
