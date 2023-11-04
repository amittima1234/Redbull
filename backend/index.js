const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect('mongodb://0.0.0.0:27017/redbull');
  console.log('Connected to MongoDB');
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})