require('dotenv/config')
const axios = require('axios')
const express = require('express')
const cors = require('cors')

const apiKey = process.env.NEURELO_API_KEY
const projectUrl = process.env.NEURELO_PROJECT_URL

const app = express()

app.get('/address', async (req, res, next) => {
    const response = await axios({
        url: projectUrl + '/rest/address/1',
        responseType: 'json', 
        headers: {'x-api-key': apiKey}
    })
    console.log(response.data)
    res.json({ok:true})
    next()
})

app.use(function (req, res, next, err) {
    console.log('encountered error', err)
})

app.listen(8080, ()=>console.log("we're up"))