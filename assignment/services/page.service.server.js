module.exports = function (app) {

  app.post("/api/website/:websiteId/page", createPage);
  app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
  app.get("/api/page/:pageId", findPageById);
  app.put("/api/page/:pageId", updatePage);
  app.delete("/api/page/:pageId", deletePage);

 // var PAGES = require("./page.mock.server");
  var pageModel = require("../models/page/page.model.server");

  function createPage(req, res){
    var websiteId = req.params['websiteId'];
    var page = req.body;
    // page.websiteId = websiteId;
    // PAGES.push(page);
    // var pages = getPagesByWebsiteId(websiteId);
    pageModel.createPage(websiteId, page).then(function (newpage) {
      res.json(newpage);
    });
  }

  function findAllPagesForWebsite(req, res){
    var websiteId = req.params['websiteId'];
    // var len = PAGES.length;
    // var resultSet = [];
    // for (var x =0; x < len; x++) {
    //   if (PAGES[x].websiteId === websiteId) {
    //     resultSet.push(PAGES[x]);
    //   }
    // }
    pageModel.findAllPagesForWebsite(websiteId).then(function (allpages) {
      res.json(allpages);
    });
  }

/*
  function getPagesByWebsiteId(websiteId) {
    var resultSet = [];
    for (var x =0; x < PAGES.length; x++) {
      if (PAGES[x].websiteId === websiteId) {
        resultSet.push(PAGES[x]);
      }
    }
    return resultSet;
  }
*/


  function findPageById(req, res) {
    var pageId = req.params['pageId'];
    // var page;
    // for (var x = 0; x < PAGES.length; x++) {
    //   if (PAGES[x]._id === pageId) {
    //       page = PAGES[x];
    //       break;
    //   }
    // }
    pageModel.findPageById(pageId).then(function (page) {
      res.json(page);
    });
  }

  function updatePage(req, res){
    var pageId = req.params['pageId'];
    var page = req.body;
    // for (var x = 0; x < PAGES.length; x++) {
    //   if (PAGES[x]._id === pageId) {
    //       PAGES[x] = newpage;
    //       break;
    //   }
    // }
    pageModel.updatePage(pageId, page).then(function (updatedPage) {
      res.json(updatedPage);
    });
  }

  function deletePage(req, res){
    var pageId = req.params['pageId'];
    // var pages = [];
    // for (var x = 0; x < PAGES.length; x++) {
    //   if (PAGES[x]._id === pageId) {
    //        PAGES.splice(x, 1);
    //        break;
    //   }
    // }
    pageModel.deletePage(pageId).then(function (page) {
      res.json(page);
    });
  }


};
