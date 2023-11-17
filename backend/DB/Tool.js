const mongoose = require('mongoose');


const toolSchema = new mongoose.Schema({
    name: String,
    docsLink: String,
    fields: Array
})

module.exports = mongoose.model('Tool', toolSchema)