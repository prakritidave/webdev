const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// Point static path to dist -- For building -- REMOVE
//app.use(express.static(path.join(__dirname, 'dist')));



// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});




const port = process.env.PORT || '3100';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
const pageEdit = '/views/page/page-edit.html';
const pageList = '/views/page/page-list.html';
const pageNew = '/views/page/page-new.html';
const userLogin = '/views/user/login.html';
const userProfile = '/views/user/profile.html';
const userRegister = '/views/user/register.html';
const websiteEdit = '/views/website/website-edit.html';
const websiteList = '/views/website/website-list.html';
const websiteNew = '/views/website/website-new.html';
const widgetChooser = '/views/widget/widget-chooser.html';
const widgetHeading = '/views/widget/widget-heading.html';
const widgetImage = '/views/widget/widget-image.html';
const widgetList = '/views/widget/widget-list.html';
const widgetYoutube = '/views/widget/widget-youtube.html';

//var serverSide = require("./server/test-mongodb/app");
//serverSide(app);

app.get('/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/assets/css/style.css'));
});

// For Build: Catch all other routes and return the index file -- BUILDING
//app.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname, '/src/assets/index.html'));
//});


app.get(pageEdit, (req, res) => {
  getResponseFile(req, res,  pageEdit);
});

app.get(pageList, (req, res) => {
  getResponseFile(req, res, pageList);
});

app.get(pageNew, (req, res) => {
  getResponseFile(req, res,  pageNew);
});


app.get(userLogin, (req, res) => {
  getResponseFile(req, res,  userLogin);
});

app.get(userProfile, (req, res) => {
  getResponseFile(req, res,  userProfile);
});

app.get(userRegister, (req, res) => {
  getResponseFile(req, res,  userRegister);
});


app.get(websiteEdit, (req, res) => {
  getResponseFile(req, res,  websiteEdit);
});


app.get(websiteList, (req, res) => {
  getResponseFile(req, res,  websiteList);
});

app.get(websiteNew, (req, res) => {
  getResponseFile(req, res,  websiteNew);
});

app.get(widgetChooser, (req, res) => {
  getResponseFile(req, res,  widgetChooser);
});

app.get(widgetHeading, (req, res) => {
  getResponseFile(req, res,  widgetHeading);
});

app.get(widgetImage, (req, res) => {
  getResponseFile(req, res,  widgetImage);
});

app.get(widgetList, (req, res) => {
  getResponseFile(req, res,  widgetList);
});

app.get(widgetYoutube, (req, res) => {
  getResponseFile(req, res,  widgetYoutube);
});

function getResponseFile(req, res, path) {
  res.sendFile(__dirname + '/src/assets' + path);
}


server.listen( port , () => console.log('Running on port 3100'));
