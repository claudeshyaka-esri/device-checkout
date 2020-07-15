const express = require('express')
const Admin = require('../../models/admin')
const auth = require('../../middleware/auth-admin')

const router = new express.Router()

// ************************************************************
//                          Admin Routes
// ************************************************************

// @route       POST api/admin
// @desc        Add admin
// @access      Private
router.post('/api/admin', auth, async (req, res) => {

    // TODO: Implement admin creation endpoint

    try {

        res.status(201).send('Add admin')    
    
    } catch (e) {
        res.status(400).send(e)
    }
})

// @route       POST api/admin/login
// @desc        Login admin
// @access      Public
router.post('/api/admin/login', async (req, res) => {

    // TODO: Implement admin login endpoint

    try {

        res.send("Login admin")
    
    } catch (e) {
        res.status(400).send()
    }
})

// @route       POST api/admin/logout
// @desc        Logout admin
// @access      Private
router.post('/api/admin/logout', auth, async (req, res) => {

    // TODO: Implement admin logout endpoint
    
    try {
        res.send('Logout admin')
    } catch (e) {
        res.status(500).send()
    }
})

// @route       POST api/admin/me
// @desc        Delete admin
// @access      Private
router.post('/api/admin/me', auth, async (req, res) => {

    // TODO: Implement admin deletion endpoint
    
    try {

        res.send('Remove admin')
    
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router