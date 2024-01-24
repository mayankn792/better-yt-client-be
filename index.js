require('dotenv').config()

const express = require('express')
const {google} = require('googleapis')

const app = express()

const apiKey = process.env.YT_API_KEY
const yt = google.youtube({version: 'v3', auth: apiKey})

app.get('/', (req, res) => {
    res.send('UP')
})

const getSearch = async (query) => {
    const res = await yt.search.list({
        part: 'snippet',
        q: query
    })
    return res.data.items
}

app.get('/search/:query', async (req, res) => {
    const query = req.params.query
    const resp = await getSearch(query)
    res.send(resp)
})

app.listen(process.env.PORT, ()=> {
    console.log(`Running on port - ${process.env.PORT}`)
})