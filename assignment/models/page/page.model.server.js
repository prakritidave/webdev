var mongoose = require("mongoose");
var PageSchema = require("./page.schema.server");
var PageModel = mongoose.model("PageModel", PageSchema);

module.exports = PageModel;

PageModel.findPageById = findPageById;
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

function createPage(websiteId, page) {
  page._website = websiteId;
  return PageModel.create(page);
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({_website: websiteId});
}

function findPageById(pageId) {
  return PageModel.findOne({_id: pageId});
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  return PageModel.remove({_id: pageId});
}
