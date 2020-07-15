const express = require('express')
const User = require('../../models/user')
const auth = require('../../middleware/auth-user')

const router = new express.Router()


// ************************************************************
//                          User Routes
// ************************************************************

// @route       POST api/users
// @desc        Add users
// @access      Public
router.post('/api/users', async (req, res) => {

    // TODO: Implement user creation endpoint

    try {
        res.status(201).send('Add user')    
    } catch (e) {
        res.status(400).send(e)
    }
})

// @route       POST api/users/login
// @desc        Login users
// @access      Public
router.post('/api/users/login', async (req, res) => {

    // TODO: Implement user login endpoint
    

    try {
        res.send('Login user')
    } catch (e) {
        res.status(400).send()
    }
})

// @route       POST api/users/logout
// @desc        Logout users
// @access      Private
router.post('/api/users/logout', auth, async (req, res) => {

    // TODO: Implement user logout endpoint

    try {
        res.send('Logout user')
    } catch (e) {
        res.status(500).send()
    }
})

// @route       POST api/admin/me
// @desc        Delete users
// @access      Private
router.delete('/api/users/me', auth, async (req, res) => {

    // TODO: Implement user deletion endpoint
    
    try {

        res.send('Remove user')
    
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router