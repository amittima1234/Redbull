const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

router.use( async (req, res, next) => {
  console.log('Connecting to MongoDB...');
  await mongoose.connect('mongodb://0.0.0.0:27017/redbull');
  console.log('Connected to MongoDB');
  next()
})

router.get('/', (req, res) => {
  res.send('api works!🔥')
})

router.post('/createEntity', (req, res) => {
  res.send('entity created successfully!👌')
})

router.post('/createTool', (req, res) => {
  res.send('tool created successfully!👌')
})

module.exports = router