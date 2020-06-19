let mongoose = require('mongoose');

// Article Schema
let newsSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  link:{
    type: String,
    required: true
  }
});

let News = module.exports = mongoose.model('news', newsSchema);
