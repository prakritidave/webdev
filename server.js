const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({
  secret: 'process.env.SESSION_SECRET',
  resave: true,
  saveUninitialized: true
}));

// app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://cs5610prakritidave-webdev.herokuapp.com");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

//var serverSide = require("./server/test-mongodb/app");
//serverSide(app);

// app.get('/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, '/src/assets/css/style.css'));
// });

// For Build: Catch all other routes and return the index file -- BUILDING
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

require("./assignment/app")(app);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
  // res.sendFile(path.join(__dirname, 'src/index.html'));
});
//app.listen(port, ipaddress);


server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});
