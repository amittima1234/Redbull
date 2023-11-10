const mongoose = require('mongoose');


const toolSchema = new mongoose.Schema({
    name: String,
    docsLink: String
})

module.exports = mongoose.model('Tool', toolSchema)