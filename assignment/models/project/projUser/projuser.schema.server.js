var mongoose = require("mongoose");
var RecipeSchema = require('../recipe/recipe.schema.server');

var ProjUserSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: String,
  firstName: String,
  lastName: String,
  usertype: {type: String, enum: ['chef', 'foodie']},
  chefs: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProjUserModel'}],
  followers: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProjUserModel'}],
  recipes: [{type: mongoose.Schema.Types.ObjectId, ref: 'RecipeModel'}]
}, {collection: 'projuser'});

module.exports = ProjUserSchema;
