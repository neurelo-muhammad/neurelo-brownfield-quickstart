const axios = require('axios')
const express = require('express')
const {neurelo} = require('./util.js')

// 1. have the database in neurelo
// 2. introspect the database
// 3. have the backend app make api calls to the neurelo api url.

// 1. install an orm
// 2. configure the database in the orm
// 3. make api calls to database to fetch data.

const app = express()

app.get('/address', async (req, res, next) => res.json({ok:true, data: await neurelo('/rest/address')}) && next())

app.get('/address/:id', async (req, res, next) => res.json({ok:true, data: await neurelo('/rest/address/'+req.params.id)}) && next())

app.post('/address', async (req, res, next) => res.json({ok:true, data: await neurelo('/rest/address/__one', req.body, 'post')}) && next())

app.delete('/address/:id', async (req, res, next) => res.json({ok:true}))

app.use(function (err, req, res, next) {
    if (err) console.log('encountered error', err)
})

app.listen(8081, ()=>console.log("we're up"))