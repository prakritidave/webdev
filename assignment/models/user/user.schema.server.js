var mongoose = require("mongoose");
var websiteSchema = require('../website/website.schema.server');

var UserSchema = mongoose.Schema({
  facebook: {
    id: String,
    token: String,
    displayName: String
  },
  username: {type: String, required: true},
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  dateCreated: {type: Date, default: Date.now},
  websites:[{type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}]
}, {collection: 'user'});

module.exports = UserSchema;
