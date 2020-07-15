const User = require('../models/user')

const authUser = async (req, res, next) => {
    
    // TODO: Implement user authentification scheme

    try {
        req.user = 'User authentification'
        next()
        
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.'})
    }

}

module.exports = authUser