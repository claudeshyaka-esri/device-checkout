const express = require('express')
require('./db/mongoose')
const adminRouter = require('./routers/api/admin')
const deviceAdminRouter = require('./routers/api/device-admin')
const userRouter = require('./routers/api/user')
const deviceUserRouter = require('./routers/api/device-user')

const app = express()
const port = process.env.PORT || 5000

// parse json
app.use(express.json())

// admin routes
app.use(adminRouter)

// device admin routes
app.use(deviceAdminRouter)

// user routes
app.use(userRouter)

// device user routes
app.use(deviceUserRouter)

// Run server
app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})