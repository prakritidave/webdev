var mongoose = require("mongoose");
var UserSchema = require('../user/user.schema.server');
var PageSchema = require('../page/page.schema.server');

var WebsiteSchema = mongoose.Schema({
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: String,
  description: String,
  pages: [{type: mongoose.Schema.Types.ObjectId, ref: 'PageModel'}],
  dateCreated: {type: Date, default: Date.now}
}, {collection: 'website'});

module.exports = WebsiteSchema;
