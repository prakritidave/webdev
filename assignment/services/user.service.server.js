var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require('bcrypt-nodejs');

module.exports = function (app) {
  var userModel = require("../models/user/user.model.server");

  // var facebookConfig = {
  //   clientID: 'process.env.FACEBOOK_CLIENT_ID',
  //   clientSecret: 'process.env.FACEBOOK_CLIENT_SECRET',
  //   callbackURL: 'process.env.FACEBOOK_CALLBACK_URL'
  // };

  var facebookConfig = {
    clientID: "1710688805633843",
    clientSecret: "89f7ebbfbe9267ac039b20489f8f6291",
    callbackURL: "https://cs5610prakritidave-webdev.herokuapp.com/auth/facebook/callback"
  };


  app.post("/api/login", passport.authenticate("local"), login);
  app.post("/api/registerProjUser", register);
  app.post ("/api/loggedIn", loggedIn);
  app.post("/api/logout", logout);
 // app.get('/api/facebook', passport.authenticate('facebook', {scope: 'email'}));


  // auth with Facebook
  app.get("/auth/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "/profile",
      failureRedirect: "login"
    }));

  app.get ("/auth/facebook", passport.authenticate("facebook", { scope : "email" }));

  app.post("/api/user", createUser);
  app.get("/api/user", findUser);
  app.get("/api/user/:userId", findUserById);
  app.delete("/api/user/:userId", deleteUser);
  app.put("/api/user/:userId", updateUser);


  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  function localStrategy(username, password, done) {
    userModel
      .findUserByUserName(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }, function (err) { if (err) { return done(err);}
        }
        );
  }


  function facebookStrategy (token, refreshToken, profile, done) {
    userModel
      .findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              username: 'username',
              lastName: names[1],
              firstName: names[0],
              email: profile.emails ? profile.emails[0].value:"",
              facebook: {
                id: profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        }
        // function(err) {
        //   if (err) { return done(err); }
        // }
      )
      // .then(
      //   function(user){
      //     return done(null, user);
      //   },
      //   function(err){
      //     if (err) { return done(err); }
      //   }
      // );
  }


  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logOut();
    res.send(200);
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .findUserByUserName(user.username)
      .then(function (data) {
        if(data){
          res.send('Username is in use!');
        } else{
          userModel
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


  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel
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
    console.log('in user service server');
    console.log(user);
    userModel.createUser(user).then(function (responseUser) {
      console.log(responseUser);
      res.json(responseUser);

    });
  }

  function updateUser(req, res) {
    var userId = req.params['userId'];
    var newUser = req.body;
    userModel.updateUser(userId, newUser).then(function (user) {
      res.json(user);
    });

  }

  function deleteUser(req, res) {
    var userId = req.params['userId'];
    userModel.deleteUser(userId).then(function (something) {
      res.json(something);
    });
  }

  function findUser(req, res) {
    var username = req.query['username'];
    var password = req.query['password'];
    console.log("at server side " + username + " " + password);

    if (username && password) {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
      });

    }else {
      if(username) {
        userModel.findUserByUserName(username)
          .then(function (user) {
            res.json(user);
          });
      }
    }
  }

}
