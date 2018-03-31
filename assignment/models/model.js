var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://heroku_10ns4mw2:l59vjogimm8s1n57eo01chvgjd@ds263837.mlab.com:63837/heroku_10ns4mw2');

module.exports = db;
// {useMongoClient: true}
