const Admin = require('../models/admin')

const authAdmin = async (req, res, next) => {

    // TODO: Implement admin authentification scheme

    try {
        req.admin = 'Admin authentification'
        next()
        
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.'})
    }

}

module.exports = authAdmin