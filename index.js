require('dotenv').config()

const express = require('express')
const ytApis = require('./apis/youtube-api')

const app = express()

app.get('/', (req, res) => {
    res.send('UP')
})

app.get('/search/:query', async (req, res) => {
    const query = req.params.query

    const resp = await ytApis.getSearch(query)
    res.send(resp)
})

app.listen(process.env.PORT, ()=> {
    console.log(`Running on port - ${process.env.PORT}`)
})