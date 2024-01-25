const {google} = require('googleapis')

const apiKey = process.env.YT_API_KEY
const yt = google.youtube({version: 'v3', auth: apiKey})

module.exports = {
    async getSearch(query) {
        const res = await yt.search.list({
            part: 'snippet',
            q: query
        })
        return res.data.items
    }
}
