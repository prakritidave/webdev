var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function (app) {
  var projUserModel = require("../../models/project/projUser/projuser.model.server");

  app.post("/api/project/login", passport.authenticate("local"), login);
  app.post("/api/project/register", register);
  app.post ("/api/project/loggedIn", loggedIn);
  app.post("/api/project/logout", logout);


  app.get("/api/project/user/:userId", findUserById);
  app.put("/api/project/user/:userId", updateUser);
  app.post("/api/project/user", createUser);
  app.delete("/api/project/user/:userId", deleteUser);
  app.get("/api/project/user", findUser);

  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    projUserModel
      .findUserById(user._id)
      .then(
        function(user){
          done(null, user);
        },
        function (err) {
          done(err, null);
        }
      );
  }

  function localStrategy(username, password, done) {
    projUserModel
      .findUserByUserName(username)
      .then(
        function(user) {
          if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }


  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.sendStatus(200);
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    projUserModel
      .findUserByUserName(user.username)
      .then(function (data) {
        if(data){
          res.send('Username is in use!');
        } else{
          projUserModel
            .createUser(user)
            .then(
              function(user){
                if(user){
                  req.login(user, function(err) {
                    if(err) {
                      res.send(err);
                    } else {
                      res.json(user);
                    }
                  });
                }
              }
            );
        }
      })
  }



  function findUserById(req, res) {

    var userId = req.params['userId'];

    projUserModel.findUserById(userId).then(function (user) {
      console.log(' user service server ');
      console.log(user);
      res.json(user);
    });
  }

  function findUserByUsertype(req, res) {
    var usertype = req.query['usertype'];
    console.log('in server side usertype');
    projUserModel.findUserByUsertype(usertype).then(function (users) {
      res.json(users);
    })
  }

  function createUser(req, res) {
    var user = req.body;
    console.log('in user service server');
    console.log(user);
    projUserModel.createUser(user).then(function (responseUser) {
      res.json(responseUser);

    });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var newUser = req.body;
    projUserModel.updateUser(userId, newUser).then(function (user) {
      res.json(user);
    });

  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    projUserModel.deleteUser(userId).then(function (something) {
      res.json(something);
    });
  }

  function findUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    var usertype = req.query['usertype'];

    console.log("at server side " + username + " " + password);
    console.log("usertype at server side " + usertype);

    if (username && password) {
      var promise = projUserModel.findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
      });

    }else if(username){
        projUserModel.findUserByUserName(username)
          .then(function (user) {
            res.json(user);
          });
    }else {
      if(usertype) {
        projUserModel.findUserByUsertype(usertype).then(function (users) {
          res.json(users);
        })
      }
    }
  }


}
