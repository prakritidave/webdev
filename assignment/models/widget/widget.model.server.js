var mongoose = require("mongoose");
var WidgetSchema = require("./widget.schema.server");
var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

module.exports = WidgetModel;
WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;

function createWidget(pageId, widget) {
  // console.log(pageId);
  // widget._page = pageId;
  return WidgetModel.create(widget);
}

function findAllWidgetsForPage(pageId) {
  //var myPageId =  mongoose.Schema.Types.ObjectId(pageId);
  return WidgetModel.find({_page: pageId});

}

function findWidgetById(widgetId) {
  return WidgetModel.findOne({_id: widgetId});
}

function updateWidget(widgetId, widget) {
   return WidgetModel.update({_id: widgetId}, widget);
}

function deleteWidget(widgetId) {
  return WidgetModel.remove({_id: widgetId});
}

