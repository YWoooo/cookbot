const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const getPage = require('./getPage')

app.get('/aPage', async (req, res) => {
    const query = new RegExp(`${req.query.title}`)
    const page = await getPage({ title: query })
    res.send(page)
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})