const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
    res.send('UP')
})

app.listen(process.env.PORT, ()=> {
    console.log(`Running on port - ${process.env.PORT}`)
})