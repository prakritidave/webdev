var mongoose = require("mongoose");
var WebsiteSchema = require("../website/website.schema.server");


const PageSchema = mongoose.Schema({
  _website: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  name: String,
  title: String,
  description: String,
  widgets: [{type: String}],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'pages'});

module.exports = PageSchema;
