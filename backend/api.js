const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Entity = require('./DB/Entity')
const Tool = require('./DB/Tool')

router.use(async (req, res, next) => {
  console.log('Connecting to MongoDB...');
  await mongoose.connect('mongodb://0.0.0.0:27017/redbull');
  console.log('Connected to MongoDB');
  next()
})

router.get('/', (req, res) => {
  res.send('api works!🔥')
})

router.post('/createEntity', async (req, res) => {
  console.log(req.body.toolName)
  try {
    const tool = await Tool.findOne({ name: req.body.toolName })
    const entity = await Entity.create({
      name: req.body.entityName,
      ip: req.body.ip,
      networkName: req.body.networkName,
      tool: tool
    })
    await entity.save()
    res.status(200).send('Entity created successfully!👌')
  } catch (e) {
    console.log(e)
    res.status(500).send('Tool doesn\'t exists!')
  }
})

router.post('/createTool', async (req, res) => {
  const tool = await Tool.create({
    name: req.body.toolName,
    docsLink: req.body.docsLink,
  })
  await tool.save()
  res.send('Tool created successfully!👌')
})


const getTool = (toolName) => {

}

module.exports = router