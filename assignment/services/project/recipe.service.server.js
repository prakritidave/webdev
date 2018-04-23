module.exports = function (app) {

  app.post("/api/project/:userId/recipe", createRecipe);
  app.get("/api/project/:userId/recipe", findAllRecipesForUser);
  app.get("/api/project/:recipeId", findRecipeById);
  app.put("/api/project/:recipeId", updateRecipe);
  app.delete("/api/project/:recipeId", deleteRecipe);

  var recipeModel = require("../../models/project/recipe/recipe.model.server");

  function createRecipe(req, res){
    var userId = req.params['userId'];
    var recipe = req.body;
    recipeModel.createRecipe(userId, recipe).then(function (newrecipe) {
      res.json(newrecipe);
    });
  }

  function findAllRecipesForUser(req, res){
    var userId = req.params['userId'];
    recipeModel.findAllRecipesForUser(userId).then(function (allrecipes) {
      res.json(allrecipes);
    });
  }


  function findRecipeById(req, res) {
    var recipeId = req.params['recipeId'];
    recipeModel.findRecipeById(recipeId).then(function (recipe) {
      res.json(recipe);
    });
  }

  function updateRecipe(req, res){
    var recipeId = req.params['recipeId'];
    var recipe = req.body;
    recipeModel.updateRecipe(recipeId, recipe).then(function (updatedrecipe) {
      res.json(updatedrecipe);
    });
  }

  function deleteRecipe(req, res){
    var recipeId = req.params['recipeId'];
    recipeModel.deleteRecipe(recipeId).then(function (recipe) {
      res.json(recipe);
    });
  }

}
