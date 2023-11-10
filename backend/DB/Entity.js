const mongoose = require('mongoose');


const entitySchema = new mongoose.Schema({
    name: String,
    ip: String,
    networkName: String,
    tool: mongoose.ObjectId
})

module.exports = mongoose.model('Entity', entitySchema)