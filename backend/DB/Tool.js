const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema({
  name: String,
  docsLink: String,
  fields: Array,
  entities: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Entity", 
    },
  ],
});

module.exports = mongoose.model("Tool", toolSchema);
