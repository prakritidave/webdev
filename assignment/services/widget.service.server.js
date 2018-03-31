module.exports = function (app) {

  var multer = require('multer'); // npm install multer --save
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });

  app.put("/api/page/:pageId/widget", reorderWidgets);
  app.post("/api/page/:pageId/widget", createWidget);
  app.get("/api/page/:pageId/widget", findAllWidgetsForPage);
  app.get("/api/widget/:widgetId", findWidgetById);
  app.put("/api/widget/:widgetId", updateWidget);
  app.delete("/api/widget/:widgetId", deleteWidget);
  //app.post ("/api/upload", upload.single('myFile'), uploadImage);

  //var WIDGETS = require("./widget.mock.server");
  var widgetModel = require("../models/widget/widget.model.server");

/*
  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    if(myFile == null) {
      //res.redirect("https://web-app-maker-angular-4.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
      //res.redirect("http://localhost:4200/profile/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/new/image");
      res.redirect("https://cs5610prakritidave-webdev.herokuapp.com/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget/new/image");
      return;
    }

    console.log(myFile);

    var originalname  = myFile.originalname;
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // ful”l path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    var widget = {};
    widget.url = 'assets/uploads/' + filename;
    widget._id = widgetId;
    widget.widgettype = "IMAGE";
    widget.pageId = pageId;
    widget.size = size;
    widget.text = 'text';
    widget.width = '100%';

    //var widget = { url: assets/uploads/"+filename };
    var found = -1;

    for(var x =0; x< WIDGETS.length; x++) {
      if(WIDGETS[x]._id === widgetId) {
        WIDGETS[x] = widget;
        found = 0;
        break;
      }
    }

    if(found === -1) {
      WIDGETS.push(widget);
    }

    console.log(widget);
    //widget.url = '/uploads/'+filename;

    console.log(callbackUrl);
    var callbackUrl   = "https://cs5610prakritidave-webdev.herokuapp.com/"+userId+"/website/"+websiteId+"/page/"+pageId+"/widget";
     res.redirect(callbackUrl);

  }
*/

/*
  function getWidgetById(widgetId) {
    for (var x = 0; x < WIDGETS.length; x++) {
      if (WIDGETS[x]._id === widgetId){
         return WIDGETS[x];
      }
    }
    return null;
  }
*/

  function reorderWidgets(req, res) {
    var widgetlist = [];
    console.log(" in here ");
    var pageId = req.params['pageId'];
    var startIndex = req.query.start;
    var stopIndex = req.query.end;
    console.log("server side " + startIndex + " " + stopIndex);
    console.log(WIDGETS);
    WIDGETS.splice(stopIndex,0, WIDGETS.splice(startIndex,1)[0]);
    console.log('after');
    widgetlist = WIDGETS;
    console.log(widgetlist);
    res.json(widgetlist);
  }

  function createWidget(req, res){
    var pageId = req.params['pageId'];
    var widget = req.body;
    console.log(widget);

    // widget._page = pageId;
    // widget.pageId = pageId;
    // WIDGETS.push(widget);
    // var widgetlist = getWidgetsForPageId(pageId);
    // res.json(widgetlist);
    widgetModel.createWidget(pageId, widget).
      then(function (widget) {
      res.json(widget);
    });

  }

/*
  function getWidgetsForPageId(pageId){
    var widgetlist = [];
    for (var x = 0; x < WIDGETS.length; x++) {
      if (WIDGETS[x].pageId === pageId){
        widgetlist.push(WIDGETS[x]);
      }
    }
    return widgetlist;
  }
*/

  function findAllWidgetsForPage(req, res) {
    var pageId = req.params['pageId'];
    // const resultSet = [];
    // for (var x = 0; x < WIDGETS.length; x++) {
    //   if (WIDGETS[x].pageId === pageId) {
    //     resultSet.push(WIDGETS[x]);
    //   }
    // }

    widgetModel.findAllWidgetsForPage(pageId)
      .then(function (widgets) {
         res.json(widgets);
    });

  }

  function findWidgetById(req, res) {
    var widgetId = req.params['widgetId'];
    // for (var x = 0; x < WIDGETS.length; x++) {
    //   if (WIDGETS[x]._id === widgetId) {
    //     res.json(WIDGETS[x]);
    //   }
    // }
    widgetModel.findWidgetById(widgetId).
      then(function (widget) {
      res.json(widget);
    });

  }

  function updateWidget(req, res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
/*
    for (var x = 0; x < WIDGETS.length; x++) {
      if (WIDGETS[x]._id === widgetId) {
        switch (WIDGETS[x].widgetType) {
          case 'HTML':
            WIDGETS[x].text = widget.text;
            WIDGETS[x].name = widget.name;
            break;

          case 'TEXT':
            WIDGETS[x].text = widget.text;
            WIDGETS[x].rows = widget.rows;
            WIDGETS[x].name = widget.name;
            WIDGETS[x].placeholder = widget.placeholder;
            WIDGETS[x].formatted = widget.formatted;
            break;

          case 'HEADER':
            WIDGETS[x].text = widget.text;
            WIDGETS[x].size = widget.size;
            break;

          case 'IMAGE':
            WIDGETS[x].text = widget.text;
            WIDGETS[x].url = widget.url;
            WIDGETS[x].width = widget.width;
            break;

          case 'YOUTUBE':
            WIDGETS[x].text = widget.text;
            WIDGETS[x].url = widget.url;
            WIDGETS[x].width = widget.width;
        }
        res.json(WIDGETS[x]);
      }
    }
*/
   widgetModel.updateWidget(widgetId, widget).
     then(function (widget) {
       res.json(widget);
   });

  }

  function deleteWidget(req, res) {
    var widgetId = req.params['widgetId'];
    // var widgets;
    // for (var x = 0; x < WIDGETS.length; x++) {
    //   if (WIDGETS[x]._id === widgetId) {
    //       WIDGETS.splice(x, 1);
    //       break;
    //   }
    // }
    // widgets = WIDGETS;

    widgetModel.deleteWidget(widgetId).
      then(function (widget) {
        res.json(widget);
    });

  }

};
