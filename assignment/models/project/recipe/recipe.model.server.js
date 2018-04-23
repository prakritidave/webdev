var mongoose = require("mongoose");
var RecipeSchema = require("../recipe/recipe.schema.server");
var RecipeModel = mongoose.model("RecipeModel", RecipeSchema);

module.exports = RecipeModel;

RecipeModel.findRecipeById = findRecipeById;
RecipeModel.createRecipe = createRecipe;
RecipeModel.updateRecipe = updateRecipe;
RecipeModel.deleteRecipe = deleteRecipe;
RecipeModel.findAllRecipesForUser = findAllRecipesForUser;

function findAllRecipesForUser(userId) {
  return RecipeModel.find({madeby: userId});
}

function createRecipe(userId, recipe){
  recipe.madeby = userId;
  return RecipeModel.create(recipe);
}

function deleteRecipe(recipeId) {
  return RecipeModel.remove({_id: recipeId});
}

function updateRecipe(recipeId, recipe){
  return RecipeModel.update({_id: recipeId}, recipe);
}

function findRecipeById(recipeId){
  return RecipeModel.findOne({_id: recipeId});
}
