module.exports = function (app) {
  var userModel = require("../models/user/user.model.server");

  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.get("/api/user", findUser);
  app.post("/api/user", createUser);

  //var USERS = require("./user.mock.server");

  function findUserById(req, res) {
    var userId = req.params['userId'];
    userModel.findUserById(userId).then(function (user) {
      console.log(' user service server ');
      console.log(user);
      res.json(user);
    });
  }

  function createUser(req, res) {
    var user = req.body;
    // USERS.push(user);
    // res.json(USERS);
    userModel.createUser(user).then(function (responseUser) {
      res.json(responseUser);
    });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var newUser = req.body;
    // for(var i=0; i < USERS.length; i++) {
    //   if(USERS[i]._id === userId){
    //     USERS[i] = newUser;
    //     break;
    //   }
    // }
    userModel.updateUser(userId, newUser).then(function (user) {
      res.json(user);
    });

  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    // for(var i=0; i<USERS.length; i++) {
    //   if(USERS[i]._id === userId){
    //     USERS.splice(i, 1);
    //     break;
    //   }
    // }
    // var userlist = [];
    // userlist = USERS;

    userModel.deleteUser(userId).then(function (something) {
      res.json(something);
    });
  }

  function findUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    console.log("at server side " + username + " " + password);

    if (username && password) {
      /*      user = USERS.find(function (user) {
              return user.username === username &&
                user.password === password;
            });
            if(user){
              res.json(user);
            }else{
              res.json({});
            }
      */
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
      });
      return;
      // } else if(username) {
      //   // user = USERS.find(function (user) {
      //   //   return USERS.username === username;
      //   // });
      //   // if(user){
      //   //   res.json(user);
      //   // }else{
      //   //   res.json({});
      //   // }
      //   userModel.findUserByUserName(username).then(function (user) {
      //     res.json(user);
      //   });
      //   return;
      // }
      // res.json({});
    }

  }
}
