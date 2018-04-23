var mongoose = require("mongoose");
var ProjUserSchema = require('../projUser/projuser.schema.server');

var RecipeSchema = mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  ingredients: String,
  direction: String,
  preptime: Number,
  cooktime: Number,
  servings: Number,
  rating: Number,
  src: String,
  madeby: {type: mongoose.Schema.Types.ObjectId, ref: 'ProjUserModel'}
}, {collection: 'recipe'});

module.exports = RecipeSchema;
