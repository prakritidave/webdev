var mongoose = require("mongoose");
var ProjUserSchema = require("./projuser.schema.server");
var ProjUserModel = mongoose.model("ProjUserModel", ProjUserSchema);

module.exports = ProjUserModel;

ProjUserModel.findUserById = findUserById;
ProjUserModel.createUser = createUser;
ProjUserModel.findUserByCredentials = findUserByCredentials;
ProjUserModel.findUserByUserName = findUserByUserName;
ProjUserModel.updateUser = updateUser;
ProjUserModel.deleteUser = deleteUser;
ProjUserModel.findUserByUsertype = findUserByUsertype;

function findUserByUsertype(userType) {
  return ProjUserModel.find({usertype: userType});
}

function createUser(user){
  return ProjUserModel.create(user);
}

function deleteUser(userId) {
  return ProjUserModel.remove({_id: userId});
}

function updateUser(userId, user){
  return ProjUserModel.update({_id: userId}, user);
}

function findUserByUserName(username){
  return ProjUserModel.findOne({username: username});
}

function findUserByCredentials(username, password){
  return ProjUserModel.findOne({username: username, password: password});
}

function findUserById(userId){
  return ProjUserModel.findOne({_id: userId});
}
