var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;

UserModel.findUserById = findUserById;
UserModel.createUser = createUser;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserByUserName = findUserByUserName;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
UserModel.findUserByFacebookId = findUserByFacebookId;

var api = {
  findUserByFacebookId: findUserByFacebookId
}

function findUserByFacebookId(facebookId) {
return UserModel.findOne({'facebook.id': facebookId});
}

function createUser(user){
  // delete user._id;
  console.log(user);
  return UserModel.create(user);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}

function updateUser(userId, user){
  return UserModel.update({_id: userId}, user);
}

function findUserByUserName(username){
  return UserModel.findOne({username: username});
}

function findUserByCredentials(username, password){
  //return UserModel.findOne({username: username, password: password});
  return UserModel.findOne({username: username, password: password});
}

function findUserById(userId){
  return UserModel.findOne({_id: userId});
}

// function findAllUsers(){
//   UserModel.find(function (err, doc) {
//     console.log(docs);
//   })
// }

