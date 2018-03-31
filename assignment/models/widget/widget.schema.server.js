var mongoose = require('mongoose');
//const PageSchema = require("../page/page.schema.server");
// {type: mongoose.Schema.Types.ObjectId, ref:'PageModel'},

const WidgetSchema = mongoose.Schema({
  _page: String,
  widgettype: {type: String, enum: ['Header', 'Image', 'YouTube', 'HTML', 'Text', 'Flickr']},
  name: String,
  text: String,
  placeholder: String,
  description: String,
  url: String,
  width: String,
  height: String,
  rows: Number,
  size: Number,
  class: String,
  icon: String,
  deletable: Boolean,
  formatted: Boolean,
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'widget'});

module.exports = WidgetSchema;
