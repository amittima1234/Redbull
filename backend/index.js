const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const api = require('./api')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/api", api)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}🔥`)
})