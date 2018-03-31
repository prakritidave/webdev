module.exports = function (app) {

  app.post("/api/user/:userId/website", createWebsite);
  app.get("/api/user/:userId/website", findAllWebsitesForUser);
  app.get("/api/website/:websiteId", findWebsiteById);
  app.put("/api/website/:websiteId", updateWebsite);
  app.delete("/api/website/:websiteId", deleteWebsite);

  //var WEBSITES = require("./website.mock.server");

  var websiteModel = require("../models/website/website.model.server");
  var userModel = require("../models/user/user.model.server");

  function createWebsite(req, res){
    var userId = req.params['userId'];
    var website = req.body;
    //website._id = (new Date()).getTime() + "";
    // website.developerId = use1rId;
    // WEBSITES.push(website);
    //var websites = getWebsitesForUserId(userId);
      websiteModel.createWebsiteForUser(userId, website).then(function (newwebsite) {
        res.json(newwebsite);
    });
  }

  function  getWebsitesForUserId(userId) {
    var websites=[];
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i].developerId === userId) {
        websites.push(WEBSITES[i]);
      }
    }
    return websites;
  }

  function  findAllWebsitesForUser(req, res) {
    var userId = req.params['userId'];
    // var websites=[];
    // for(var i = 0; i < WEBSITES.length; i++) {
    //   if (WEBSITES[i].developerId === userId) {
    //     websites.push(WEBSITES[i]);
    //   }
    // }
    // if(websites.length === 0){
    //   res.json({});
    // }else{
    //   res.json(websites);
    // }
    websiteModel.findAllWebsitesForUser(userId).then(function (websites) {
      console.log(websites);
      res.json(websites);
    });
  }

  function updateWebsite(req, res){
    var websiteId = req.params['websiteId'];
    var newWebSite = req.body;
    // for(var i = 0; i < WEBSITES.length; i++) {
    //   if (WEBSITES[i]._id === websiteId) {
    //     WEBSITES[i] = newWebSite;
    //     break;
    //   }
    // }
    websiteModel.updateWebsite(websiteId, newWebSite).then(function (website) {
      res.json(website);
    });
    res.json({});
  }

  function getWebsiteById(websiteId){
    for(var i = 0; i < WEBSITES.length; i++) {
      if (WEBSITES[i]._id === websiteId) {
        return WEBSITES[i];
      }
    }
  }

  function findWebsiteById(req, res){
    var websiteId = req.params['websiteId'];
    //var website = getWebsiteById(websiteId);
    websiteModel.findWebsiteById(websiteId).then(function (website) {
      res.json(website);
    });
  }

  function deleteWebsite(req, res){
    var websiteId = req.params['websiteId'];
    // var websitelist = [];
    // for(var i = 0; i < WEBSITES.length; i++) {
    //   if (WEBSITES[i]._id === websiteId) {
    //     WEBSITES.splice(i, 1);
    //   }
    // }
    // websitelist = WEBSITES;

    websiteModel.deleteWebsite(websiteId).then(function (website) {
      res.json(website);
    });
  }

};
