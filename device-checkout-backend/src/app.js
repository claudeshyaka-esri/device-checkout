const express = require('express')
require('./db/mongoose')
const smartphonesRouter = require('./routers/smartphone')
const tabletRouter = require('./routers/tablet')
const laptopRouter = require('./routers/laptop')
const accessoryRouter = require('./routers/accessoryRouter')

const app = express()
const port = process.env.PORT || 3001

// parse json
app.use(express.json)

// smartphone router
app.use(smartphonesRouter)

// tablet router
app.use(tabletRouter)

// laptop router
app.use(laptopRouter)

// accessories router
app.use(accessoryRouter)

// Run server
app.listen(port, () => {
    console.log(`Server is up on port: ${port}`)
})