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

let detikArticle = mongoose.model('detikNews', newsSchema);
let merdekaArticle = mongoose.model('merdekaNews', newsSchema);
let kompasArticle = mongoose.model('kompasNews', newsSchema);
let tribunArticle = mongoose.model('tribunNews', newsSchema);
let liputan6Article = mongoose.model('liputan6News', newsSchema);
module.exports = {
  detikArticle : detikArticle,
  merdekaArticle : merdekaArticle,
  kompasArticle : kompasArticle,
  tribunArticle : tribunArticle,
  liputan6Article : liputan6Article
}
