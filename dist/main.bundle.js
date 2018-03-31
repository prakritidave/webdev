webpackJsonp(["main"],{

/***/ "./assignment/directives/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        console.log('in ngAfterViewInit');
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                refe.initialIndex = ui.item.index();
                console.log('start at: ' + refe.initialIndex);
            },
            stop: function (event, ui) {
                console.log('stop at: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<a routerLink=\"/login\">Login</a>\n<a routerLink=\"/register\">Register</a>\n<router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__ = __webpack_require__("./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__assignment_directives_sortable_directive__ = __webpack_require__("./assignment/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__ = __webpack_require__("./src/app/services/flickr.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_26__assignment_directives_sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_7__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_list_widget_list_component__["b" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_list_widget_list_component__["a" /* SafePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__["a" /* QuillEditorModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__["a" /* FlickrService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");



















// /profile/{{user._id}}/website/{{website._id}}/page
var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_4__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'profile/:userId/website', component: __WEBPACK_IMPORTED_MODULE_3__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'profile/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'profile/:userId/website/:websiteId', component: __WEBPACK_IMPORTED_MODULE_15__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'profile/:userId/website/:websiteId/page', component: __WEBPACK_IMPORTED_MODULE_6__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/new', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget', component: __WEBPACK_IMPORTED_MODULE_9__components_widget_widget_list_widget_list_component__["b" /* WidgetListComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/flickr', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/header', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n      Edit Page\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n      <span (click)=\"saveChanges()\" class=\"glyphicon glyphicon-ok cl-text-black\"></span>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid cl-container-padding-bottom cl-container-padding\">\n  <form>\n    <div class =\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\"\n             name=\"pagename\"\n             id=\"name\" placeholder=\"Page Name\"\n             [(ngModel)] = \"pageName\">\n    </div>\n    <div class =\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea id=\"description\" class=\"form-control\"\n                name=\"pageDescription\"\n                rows=\"2\" cols=\"20\" placeholder=\"Page Description\"\n                [(ngModel)] = \"pageDescription\"></textarea>\n    </div>\n  </form>\n  <button type=\"button\" (click)=\"deleteThisPage()\" class=\"btn btn-danger btn-block\">\n    Delete\n  </button>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}\">\n      <span class=\"glyphicon glyphicon-user cl-text-blue\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageEditComponent = /** @class */ (function () {
    //  currPage: any;
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pageId'];
            _this.pageService.findPageById(_this.pageId).subscribe(function (page) {
                console.log(page);
                // this.currPage = page;
                _this.pageName = page.name;
                _this.pageDescription = page.description;
            });
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
        });
    };
    PageEditComponent.prototype.saveChanges = function () {
        var _this = this;
        // this.newPage = new Page((new Date()).getTime() + '', this.pageName, this.websiteId, this.pageDescription);
        var newPage = {
            name: this.pageName,
            description: this.pageDescription,
        };
        this.pageService.updatePage(this.pageId, newPage).subscribe(function (updatedPage) {
            _this.newPage = updatedPage;
            _this.router.navigate(['/profile', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent.prototype.deleteThisPage = function () {
        var _this = this;
        this.pageService.deletePage(this.pageId).subscribe(function (pages) {
            console.log(pages);
            _this.router.navigate(['/profile', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n      Pages\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/new\">\n      <span class=\"glyphicon glyphicon-plus cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid cl-container-padding cl-container-padding-bottom\">\n  <ul class=\"list-group\">\n    <li *ngFor = \"let page of pages\" class=\"list-group-item li-no-border\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{page._id}}\" >\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget\">\n        {{page.name}}\n      </a>\n    </li>\n  </ul>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}\">\n      <span class=\"glyphicon glyphicon-user cl-text-blue\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
            console.log('userId ' + _this.userId);
            console.log('websiteId ' + _this.websiteId);
            _this.pageService.findPagesByWebsiteId(_this.websiteId).subscribe(function (pagelist) {
                console.log(pagelist);
                _this.pages = pagelist;
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n         <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n         </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n      New Page\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n      <a (click)=\"createNewPage()\">\n        <span class=\"glyphicon glyphicon-ok cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid cl-container-padding cl-container-padding-bottom\">\n  <form>\n    <div class =\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" name=\"pagename\" class=\"form-control\"\n             id=\"name\" placeholder=\"Page Name\"\n             [(ngModel)]=\"pageName\">\n    </div>\n    <div class =\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea id=\"description\" name=\"description\" class=\"form-control\"\n                rows=\"2\" cols=\"20\" placeholder=\"Page Description\"\n      [(ngModel)]=\"pageDesc\"></textarea>\n    </div>\n  </form>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}\">\n      <span class=\"glyphicon glyphicon-user cl-text-blue\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
            console.log('websiteId' + _this.websiteId);
        });
    };
    PageNewComponent.prototype.createNewPage = function () {
        var _this = this;
        var newPage = {
            name: this.pageName,
            description: this.pageDesc
        };
        this.pageService.createPage(this.websiteId, newPage).subscribe(function (pages) {
            console.log(pages);
            _this.router.navigate(['/profile', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n\n<div class='conatiner'>\n<form (ngSubmit) = \"login(username, password)\" #f=\"ngForm\">\n<label>Username</label><br>\n<input name=\"username\" [(ngModel)]=\"username\" required placeholder=\"username\" >\n<br><br/>\n<label>Password</label><br>\n<input type=\"password\" required [(ngModel)]=\"password\" placeholder=\"password\" name=\"password\">\n<br>\n<br>\n<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService.findUserByCredentials(username, password).subscribe(function (user) {
            if (user) {
                console.log(user);
                // console.log(' ');
                console.log(user._id);
                _this.router.navigate(['/profile', user._id]);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary\">\n  <div class=\"container-fluid\">\n    <div class=\"cl-text-white navbar-text pull-left\">\n    <a routerLink=\"/login\" class=\"cl-text-white\">\n      <span class=\"glyphicon glyphicon-chevron-left cl-text-white\"></span>\n    </a>\n    </div>\n    <span class=\"navbar-brand cl-text-white cl-text-bold\">\n      Profile\n    </span>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding cl-container-padding-bottom\">\n  <form>\n    <strong>Username</strong>\n    <input type=\"text\" name=\"username\" title=\"name\" class = \"form-control form-fixer input-lg\" [(ngModel)]=\"user.username\"><br>\n    <strong>Password</strong>\n    <input type=\"password\" name=\"paswword\" title=\"password\" class = \"form-control form-fixer input-lg\" [(ngModel)]=\"user.password\"><br>\n    <strong>First Name</strong>\n    <input type=\"text\" name=\"first name\" title=\"firstname\" class = \"form-control form-fixer input-lg\" [(ngModel)]=\"user.firstName\"><br>\n    <strong>Last Name</strong>\n    <input type=\"text\" name=\"last name\" title=\"lastname\" class = \"form-control form-fixer input-lg\" [(ngModel)]=\"user.lastName\"><br>\n  </form>\n\n  <a routerLink=\"/profile/{{userId}}/website\">\n  <button type=\"button\" class=\"btn btn-primary btn-block\">Websites</button>\n  </a><br>\n\n  <a (click)=\"updateUser()\" class=\"btn btn-primary btn-block\">Update</a><br>\n\n  <a routerLink=\"/login\" (click)=\"deleteUser()\" class=\"btn btn-danger btn-block\">Delete</a><br>\n\n  <a routerLink=\"/login\">\n  <button type=\"button\" class=\"btn btn-secondary btn-block\">Logout</button>\n  </a>\n\n</div>\n<nav class=\"navbar navbar-fixed-bottom bg-primary\">\n</nav>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("./src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            console.log(_this.userId);
            _this.userService.findUserById(_this.userId).subscribe(function (userFromServer) {
                _this.user = userFromServer;
                console.log(_this.user);
                console.log(_this.user.username);
                /*this.username = this.user.username;
                console.log(this.user.username);
                this.firstname = this.user.firstName;
                this.lastname = this.user.lastName;
                this.password = this.user.password;*/
            });
        });
    };
    ProfileComponent.prototype.deleteUser = function () {
        this.userService.deleteUser(this.userId).subscribe(function (something) {
            console.log(something);
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.updatedUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */](this.userId, this.user.username, this.user.password, this.user.firstName, this.user.lastName);
        return this.userService.updateUser(this.userId, this.updatedUser).subscribe(function (newuser) {
            _this.user = newuser;
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <form>\n    <input type=\"text\" class = \"form-control input-lg\"\n           name=\"firstname\" [(ngModel)]=\"firstname\"\n           placeholder=\"firstname\"><br>\n    <input type=\"text\" class = \"form-control input-lg\"\n           name=\"lastname\" [(ngModel)]=\"lastname\"\n           placeholder=\"lastname\"><br>\n    <input type=\"text\" class = \"form-control input-lg\"\n           name=\"username\" [(ngModel)]=\"username\"\n           placeholder=\"username\"><br>\n    <input type=\"password\" class = \"form-control input-lg\"\n           name=\"password\" [(ngModel)]=\"password\"\n           placeholder=\"password\"><br>\n    <button type=\"button\" (click)=\"addRegisteredUser()\" class=\"btn btn-primary btn-block\">Register</button><br>\n    <a routerLink=\"/\">\n    <button type=\"button\" class=\"btn btn-danger btn-block\">Cancel</button>\n    </a>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.addRegisteredUser = function () {
        var _this = this;
        // this.user = new User((new Date()).getTime() + '',
        // this.username, this.password, this.firstname, this.lastname);
        var newUser = {
            _id: '',
            username: this.username,
            password: this.password,
            firstName: this.firstname,
            lastName: this.lastname
        };
        this.userService.createUser(newUser).subscribe(function (userFromServer) {
            console.log(userFromServer);
            _this.router.navigate(['/']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <a routerLink=\"/profile/{{userId}}/website\">\n          <span class=\"glyphicon glyphicon-chevron-left navbar-text pull-left cl-text-white\">\n          </span>\n        </a>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Websites\n        </a>\n        <a routerLink=\"/profile/{{userId}}/website/new\" class=\"navbar-link navbar-text pull-right cl-text-white\" style=\"margin-left: 40%\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-8\">\n      <div class=\"container-fluid\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Edit Website\n        </a>\n        <div class=\"navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"saveWebsiteDetails()\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding-bottom cl-container-padding\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <li *ngFor = \"let website of websites\" class=\"list-group-item li-no-border\">\n        <a routerLink=\"/profile/{{userId}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        <a routerLink=\"/profile/{{userId}}/website/{{website._id}}/page\">\n          {{website.name}}\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"verticle-line hidden-xs\" style=\"margin-top: 0\"></div>\n  <div class=\"col-xs-8\">\n    <form>\n      <div class =\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n\n        <input type=\"text\" class=\"form-control\"\n               name=\"wbesitename\"\n               [(ngModel)] = \"websiteName\"\n               id=\"website-name\" placeholder=\"Name\">\n      </div>\n      <div class =\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n\n        <textarea id=\"website-description\"\n                  class=\"form-control\"\n                  rows=\"5\" placeholder=\"Description\"\n                  name=\"websitedescription\"\n                  [(ngModel)]=\"websiteDescription\">\n        </textarea>\n      </div>\n    </form>\n    <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteThisWebsite()\">Delete</button>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary\">\n  <div class=\"container-fluid row\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-text pull-right cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user cl-text-white\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__ = __webpack_require__("./src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websitelist) {
                // console.log(websitelist);
                _this.websites = websitelist;
            });
            _this.websiteService.findWebsiteById(_this.websiteId).subscribe(function (websiteFromServer) {
                _this.currWebsite = websiteFromServer;
                console.log(websiteFromServer.name);
                _this.websiteName = websiteFromServer.name;
                _this.websiteDescription = websiteFromServer.description;
            });
        });
    };
    WebsiteEditComponent.prototype.saveWebsiteDetails = function () {
        var _this = this;
        this.newWebsite = new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */](this.websiteId, this.websiteName, this.userId, this.websiteDescription);
        this.websiteService.updateWebsite(this.websiteId, this.newWebsite).subscribe(function (website) {
            _this.newWebsite = website;
            console.log(_this.websiteName, _this.websiteDescription);
            _this.router.navigate(['/profile', _this.userId, 'website']);
        });
    };
    WebsiteEditComponent.prototype.deleteThisWebsite = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.websiteId).subscribe(function (newwebsites) {
            _this.websites = newwebsites;
            _this.router.navigate(['/profile', _this.userId, 'website']);
        });
    };
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary\">\n  <div class=\"container-fluid row\">\n    <div class=\"cl-text-white navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"cl-text-white\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-white\"></span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-white cl-text-bold\">\n      Websites\n    </span>\n    <a routerLink=\"/profile/{{userId}}/website/new\" class=\"navbar-brand pull-right cl-text-white cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-plus cl-text-white\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding cl-container-padding-bottom\">\n  <ul class=\"list-group\">\n    <li *ngFor = \"let website of websites\" class=\"list-group-item li-no-border\">\n\n      <a routerLink=\"/profile/{{user._id}}/website/{{website._id}}/page\">\n        {{website.name}}\n      </a>\n      <a routerLink=\"/profile/{{user._id}}/website/{{website._id}}\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}\">\n      <span class=\"glyphicon glyphicon-user cl-text-white\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(userService, websiteService, activatedRoute) {
        this.userService = userService;
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websitelist) {
                console.log(websitelist);
                _this.websites = websitelist;
            });
            _this.userService.findUserById(_this.userId).subscribe(function (curruser) {
                _this.user = curruser;
                console.log(_this.user);
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-left\">\n        <a routerLink=\"/profile/{{userId}}/website\" class=\"navbar-link cl-text-white\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        Websites\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-8\">\n    <div class=\"container-fluid\">\n      <p class=\"cl-text-white navbar-brand cl-text-bold\">\n        New Website\n      </p>\n      <a (click)=\"getWebsiteDetails()\" class=\"navbar-text pull-right cl-text-white\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <li *ngFor = \"let website of websites\" class=\"list-group-item li-no-border\">\n        <a routerLink=\"/profile/{{userId}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        <a routerLink=\"/profile/{{userId}}/website/{{website._id}}/page\">\n          {{website.name}}\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"verticle-line hidden-xs\" style=\"padding-top: 0px\"></div>\n\n  <div class=\"col-xs-8\">\n    <form>\n      <div class =\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\"\n               id=\"website-name\" placeholder=\"Name\" required\n               [(ngModel)]= \"websiteName\">\n      </div>\n      <div class =\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea id=\"website-description\" name= \"description\" required\n                  class=\"form-control\" rows=\"5\" placeholder=\"Description\"\n                  [(ngModel)]=\"websiteDescription\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary\">\n  <div class=\"container-fluid row\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-text pull-right cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user cl-text-white \"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.websiteName = ' ';
        this.websiteDescription = ' ';
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
                console.log(_this.websites);
            });
        });
    };
    WebsiteNewComponent.prototype.getWebsiteDetails = function () {
        var _this = this;
        console.log(this.websiteName);
        console.log(this.websiteDescription);
        var newWebsite = {
            name: this.websiteName,
            description: this.websiteDescription
        };
        // this.newWebsite = new Website((new Date()).getTime() + '', this.websiteName, this.userId, this.websiteDescription);
        //  this.newWebsite.name = this.websiteName;
        //   this.newWebsite.description = this.websiteDescription;
        this.websiteService.createWebsite(this.userId, newWebsite).subscribe(function (createdwebsite) {
            console.log(createdwebsite);
            _this.router.navigate(['/profile', _this.userId, 'website']);
        });
    };
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n      Choose Widget\n    </span>\n  </div>\n</nav>\n\n<div class = \"container cl-container-padding cl-container-padding-bottom\">\n  <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/header\"><p>HEADER</p></a>\n  <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/image\"><p>IMAGE</p></a>\n  <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/html\"><p>HTML</p></a>\n  <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new/text\"><p>TEXT</p></a>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-text pull-right cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user cl-text-blue \"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
            _this.pageId = params['pageId'];
            console.log('userId' + _this.userId);
            console.log('websiteId' + _this.websiteId);
            console.log('pageId' + _this.pageId);
        });
        this.widgetService.findWidgetsByPageId(this.pageId).subscribe(function (widgetlist) {
            _this.widgets = widgetlist;
        });
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n      Widget Edit\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-plus cl-text-black\"></span>\n    </div>\n  </div>\n</nav>\n\n<div class = \"container cl-container-padding cl-container-padding-bottom\">\n\n    <div [ngSwitch]=\"widgetType\">\n\n      <div *ngSwitchCase=\"'Header'\">\n        <app-widget-header>\n        </app-widget-header>\n      </div>\n\n      <div *ngSwitchCase=\"'YouTube'\">\n        <app-widget-youtube>\n        </app-widget-youtube>\n      </div>\n\n      <div *ngSwitchCase=\"'Image'\">\n        <app-widget-image>\n        </app-widget-image>\n      </div>\n\n      <div *ngSwitchCase=\"'HTML'\">\n        <app-widget-html>\n        </app-widget-html>\n      </div>\n\n      <div *ngSwitchCase=\"'Text'\">\n        <app-widget-text>\n        </app-widget-text>\n      </div>\n\n      <div *ngSwitchCase=\"'Flickr'\">\n        <app-flickr-image-search>\n        </app-flickr-image-search>\n      </div>\n\n    </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"navbar-text pull-right cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user cl-text-blue\"></span>\n      </a>\n    </div>\n    <div class=\"pull-left navbar-text\">\n      <a href=\"#\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n      </a>\n      <a href=\"#\" class=\"cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute, _location) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this._location = _location;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
            console.log('widgetId' + _this.widgetId);
            _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                _this.currentWidget = widget;
                _this.widgetType = _this.currentWidget.widgettype;
                console.log(_this.widgetType);
                console.log(_this.currentWidget);
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n     Update Widget\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n        <span (click)=\"updateHeaderWidget()\" class=\"glyphicon glyphicon-ok\"></span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding cl-container-padding-bottom\">\n  <form>\n    <div class =\"form-group\">\n      <label for=\"header-text\">Text</label>\n\n      <input type=\"text\" class=\"form-control\"\n             name=\"wbesitename\"\n             value=\"header text\"\n             [(ngModel)] = \"text\"\n             id=\"header-text\" placeholder=\"Text\">\n    </div>\n    <div class =\"form-group\">\n      <label for=\"header-size\">Size</label>\n\n      <input id=\"header-size\"\n             value=\"header size\"\n                class=\"form-control\"\n                placeholder=\"Size\"\n\n                name=\"size\"\n             [(ngModel)]=\"size\">\n    </div>\n  </form>\n  <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteHeaderWidget()\">Delete</button>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router, location) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetId = params['widgetId'];
            console.log('widget id' + _this.widgetId);
            _this.userId = params['userId'];
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
        });
        if (this.widgetId !== undefined) {
            this.widgetService.findWidgetById(this.widgetId).subscribe(function (widgetFound) {
                _this.widget = widgetFound;
                console.log(widgetFound);
                if (widgetFound) {
                    _this.size = widgetFound.size;
                    _this.text = widgetFound.text;
                }
            });
        }
    };
    // /profile/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget
    // new Widget( '123', 'HEADER', '321', '2', 'GIZMODO' )
    WidgetHeaderComponent.prototype.createHeaderWidget = function () {
        // this.newWidget = new Widget(Math.random() + 102, 'HEADER', this.pageId, this.size, this.text, '', ''  , 0 , ''  , '' , false)
        console.log('inside create header widget');
        var newWidget = {
            widgettype: 'Header',
            _page: this.pageId,
            text: this.text,
            size: this.size
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (widgetlist) {
            console.log(widgetlist);
        });
    };
    WidgetHeaderComponent.prototype.updateHeaderWidget = function () {
        var _this = this;
        if (this.widgetId !== undefined) {
            // this.newWidget = new Widget(this.widgetId, 'HEADER', this.pageId, this.size, this.text, '', ''  , 0 , ''  , '' , false);
            var updateWidget = {
                _id: this.widgetId,
                widgettype: 'Header',
                _page: this.pageId,
                text: this.text,
                size: this.size
            };
            this.widgetService.updateWidget(this.widgetId, updateWidget).subscribe(function (widgetlist) {
                _this.widgets = widgetlist;
            });
            console.log('inside update');
            console.log('size ' + this.size + ' text ' + this.text);
        }
        else {
            this.createHeaderWidget();
            console.log('created new widget ');
        }
        //    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        this.location.back();
    };
    WidgetHeaderComponent.prototype.goBack = function () {
        this.location.back();
    };
    WidgetHeaderComponent.prototype.deleteHeaderWidget = function () {
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widgetlist) {
            console.log(widgetlist);
        });
        //    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
        this.location.back();
    };
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class = \"navbar-header navbar-brand thick pull-left\">\n       <b>Widget Edit</b>\n    </span>\n    <p class=\"navbar-text pull-right\">\n      <a (click) = \"updateWidget()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div *ngIf=\"flag\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <form novalidate name=\"myform\">\n\n    <div class=\"form-group\" >\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"widgetName\" type=\"text\" class=\"form-control\" id=\"Name\"\n             name=\"widname\" placeholder=\"Name\" required>\n      <span class=\"alert-class\"\n            *ngIf=\"flag\">{{alert}}</span>\n    </div>\n    <!-- use with ngModel -->\n    <quill-editor [(ngModel)]=\"text\" name=\"myquill\"></quill-editor>\n  </form>\n  <p></p>\n\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n  <!--ng-click=\"model.deleteWidget(model.widget)\" -->\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink= \"/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(activatedRoute, widgetService, router, location) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.location = location;
        this.flag = false;
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize error and alert text
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';
        // fetch ids from current url
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
        });
        // fetching current widget based on widgetId
        if (this.widgetId !== undefined) {
            this.widgetService.findWidgetById(this.widgetId)
                .subscribe(function (widgetFound) {
                console.log(widgetFound);
                _this.widget = widgetFound;
                _this.widgetName = widgetFound.name;
                _this.text = widgetFound.text;
            }, function (error) { return console.log(error); });
        }
    };
    WidgetHtmlComponent.prototype.createWidget = function () {
        var _this = this;
        /*
            this.newWidget = new Widget(Math.random() + 801 + '', 'HTML', this.pageId, '1',
              this.text, '100%', '', 0, this.widgetName, '', false);
        */
        var newWidget = {
            widgettype: 'HTML',
            name: this.widgetName,
            text: this.text,
            _page: this.pageId
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (widgetlist) {
            console.log(widgetlist);
            _this.goBack();
        });
    };
    WidgetHtmlComponent.prototype.updateWidget = function () {
        var _this = this;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        //  if (this.widget['name'] === '') {
        if (this.widgetName === '') {
            this.flag = true;
        }
        else {
            if (this.widgetId === undefined) {
                this.createWidget();
            }
            else {
                // this.updatedWidget = new Widget(this.widgetId, 'HTML', this.pageId, this.widget.size, this.text,
                //   this.widget.width, this.widget.url, this.widget.rows , this.widgetName, this.widget.placeholder, this.widget.formatted);
                var updateWidget = {
                    _id: this.widgetId,
                    name: this.widgetName,
                    widgettype: 'HTML',
                    _page: this.pageId,
                    text: this.text
                };
                this.widgetService.updateWidget(this.widgetId, updateWidget)
                    .subscribe(function (data) {
                    console.log(data);
                    _this.goBack();
                });
            }
        }
    };
    WidgetHtmlComponent.prototype.deleteWidget = function () {
        var _this = this;
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (data) {
            return _this.goBack();
        }, function (error) { return console.log(error); });
    };
    WidgetHtmlComponent.prototype.goBack = function () {
        this.location.back();
    };
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"flickr-image-search.component.ts\"></script>\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a>\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n     <span class=\"navbar-header cl-text-grey cl-text-bold navbar-brand thick pull-left\">\n     <b>Search Flickr</b>\n     </span>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding cl-container-padding-bottom\">\n<div class = \"input-group\">\n  <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n  <span class=\"input-group-btn\">\n    <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n      <span class=\"glyphicon glyphicon-search\"></span>\n    </a>\n  </span>\n</div>\n</div>\n\n<div class=\"row\">\n  <div *ngFor=\"let pic of photos['photo']\" class=\"col-xs-4\">\n    <img (click)=\"selectPhoto(pic)\" width=\"100%\"\n         [src]=\"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n  <p></p>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__ = __webpack_require__("./src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.websiteId = params['websiteId'];
            _this.pageId = params['pageId'];
            _this.widgetId = params['widgetId'];
            console.log(_this.widgetId);
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        var widget = {
            _page: this.pageId,
            url: url,
            widgettype: 'Flickr'
        };
        // profile/:userId/website/:websiteId/page/:pageId/widget
        if (this.widgetId === undefined) {
            this.widgetService
                .createWidget(this.pageId, widget)
                .subscribe(function (data) {
                var result = data;
                console.log('flickr created');
                console.log(data);
                if (result) {
                    _this.router.navigate(['/profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                }
                else {
                    _this.error = 'failed!';
                }
            });
        }
        else {
            var updateWidget = {
                _page: this.pageId,
                url: url,
                widgettype: 'Flickr'
            };
            this.widgetService
                .updateWidget(this.widgetId, updateWidget)
                .subscribe(function (data) {
                var result = data;
                if (result) {
                    _this.router.navigate(['/profile', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                }
                else {
                    _this.error = 'failed!';
                }
            });
        }
    };
    FlickrImageSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n     Update Widget\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n        <span (click)=\"updateImageWidget()\" class=\"glyphicon glyphicon-ok\"></span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding cl-container-padding-bottom\">\n  <form>\n    <div class =\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" name=\"text\" [(ngModel)] = \"text\" id=\"image-text\" placeholder=\"Text\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"size\">Size</label>\n      <input type=\"text\" class=\"form-control\" id=\"size\" placeholder=\"Widget size\" name=\"size\" [(ngModel)]=\"size\">\n    </div>\n\n    <div class =\"form-group\">\n      <label for=\"image-size\">URL</label>\n      <input id=\"image-size\" class=\"form-control\" placeholder=\"URL\" name=\"url\" [(ngModel)]=\"url\">\n    </div>\n\n    <div class =\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input id=\"image-width\" class=\"form-control\" placeholder=\"Width\" name=\"width\" [(ngModel)]=\"width\">\n    </div>\n  </form>\n\n  <button (click)=\"flickrNavigate()\" class=\"btn btn-block btn-secondary\">Flicker</button>\n\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n\n    <label for=\"file\">File</label>\n    <input id=\"file\" name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n    <input  id=\"widgetId\" name=\"widgetId\" value=\"{{widgetId}}\" style=\"display: none\"/>\n    <input  id=\"websiteId\" name=\"websiteId\" value=\"{{websiteId}}\" style=\"display: none\"/>\n    <input  id=\"pageId\"  name=\"pageId\" value=\"{{pageId}}\" style=\"display: none\"/>\n    <input  id=\"userId\" name=\"userId\" value=\"{{userId}}\" style=\"display: none\"/>\n    <br>\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n\n  </form>\n\n  <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteImageWidget()\">Delete</button>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router, location) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetId = params['widgetId'];
            _this.userId = params['userId'];
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
            if (_this.widgetId !== undefined) {
                console.log('widgetId' + _this.widgetId);
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widgetFound) {
                    _this.widget = widgetFound;
                    if (widgetFound) {
                        _this.width = widgetFound.width;
                        _this.text = widgetFound.text;
                        _this.url = widgetFound.url;
                        _this.size = widgetFound.size;
                    }
                });
            }
            // else {
            //   this.widgetId = (Math.random() + 501) + '';
            //   console.log('widgetId' + this.widgetId);
            // }
        });
    };
    // '456', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
    // id, widgetType, pageId, size: String= '1',
    //  text: String= 'text', width: String = '100%', url: String = 'url'
    WidgetImageComponent.prototype.createImageWidget = function () {
        var _this = this;
        // this.newWidget = new Widget((Math.random() + 501) + '', 'IMAGE',
        //   this.pageId, this.size, this.text, this.width, this.url, 0, '', '', false);
        var newWidget = {
            widgettype: 'Image',
            text: this.text,
            width: this.width,
            url: this.url,
            size: this.size,
            _page: this.pageId
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (widgetlist) {
            if (widgetlist.length !== 0) {
                console.log(widgetlist);
            }
            _this.goBack();
        });
    };
    WidgetImageComponent.prototype.updateImageWidget = function () {
        var _this = this;
        if (this.widgetId === undefined) {
            this.createImageWidget();
        }
        else {
            // this.updatedWidget = new Widget(this.widgetId, 'IMAGE', this.pageId, this.widget.size,
            //   this.text, this.width, this.url, 0, '', '', false);
            var updateWidget = {
                _id: this.widgetId,
                widgettype: 'Image',
                name: this.widget.name,
                _page: this.pageId,
                text: this.text,
                width: this.width,
                url: this.url,
                size: this.size
            };
            this.widgetService.updateWidget(this.widgetId, updateWidget).subscribe(function (widgetUpdate) {
                console.log(widgetUpdate);
                _this.location.back();
            });
        }
        // this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent.prototype.goBack = function () {
        this.location.back();
    };
    // profile/:userId/website/:websiteId/page/:pageId/widget/flicker
    WidgetImageComponent.prototype.flickrNavigate = function () {
        this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new', 'flickr']);
    };
    WidgetImageComponent.prototype.deleteImageWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widgetlist) {
            console.log(widgetlist);
            _this.location.back();
        });
        //    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-chevron-left cl-text-black\"></span>\n      </a>\n    </div>\n\n    <span class=\"navbar-brand thick navbar-header pull-left\">\n      <b>Widget Edit</b>\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n      <a (click)=\"updateWidget()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<!--Body of the page -->\n<div class = \"container\">\n  <div *ngIf=flag\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n\n  <label for=\"name\">Name</label>\n  <div>\n    <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" value={{name}} placeholder=\"Name\">\n    <span class=\"alert-class\" *ngIf=flag>{{alert}}</span>\n  </div><br>\n\n  <label for=\"text\">Text</label>\n  <input [(ngModel)]=\"text\" placeholder=\"Text\" value={{text}} id=\"text\" class=\"form-control\"/><br>\n\n  <label for=\"rows\">Rows</label>\n  <input [(ngModel)]=\"rows\" value={{rows}} id=\"rows\" class=\"form-control\" type=\"number\"/><br>\n\n  <label for=\"placeholder\">Placeholder</label>\n  <input [(ngModel)]=\"placeholder\" value={{placeholder}} id=\"placeholder\" class=\"form-control\" required/><br>\n\n  <div class=\"input-group\">\n    <input type=\"text\" placeholder=\"Formatted\" readonly value={{formatted}} class=\"form-control\"/>\n    <span class=\"input-group-addon\"> <input [(ngModel)]=\"formatted\" value={{formatted}} type=\"checkbox\"/>\n    </span>\n  </div><br>\n\n  <a class=\"btn btn-danger btn-block \" (click)=\"deleteWidget()\">Delete</a>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink=\"/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(widgetService, router, activatedRoute, location) {
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.flag = false; // setting error flag as false by default
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize error and alert text
        this.error = 'Enter the required field';
        this.alert = '* Enter the required fields';
        // fetch ids from current url
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.widgetId = params['widgetId'];
            if (_this.widgetId !== undefined) {
                _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widgetFound) {
                    _this.widget = widgetFound;
                    if (widgetFound) {
                        _this.rows = widgetFound.rows;
                        _this.text = widgetFound.text;
                        _this.name = widgetFound.name;
                        _this.placeholder = widgetFound.placeholder;
                        _this.formatted = widgetFound.formatted;
                    }
                });
            }
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
            _this.pageId = params['pageId'];
        });
        // fetch widget values as created on widget-new component
        /*this.widgetService.findWidgetById(this.widgetId)
          .subscribe(
            (data: any) => this.widget = data,
            (error: any) => console.log(error)
          );*/
    };
    WidgetTextComponent.prototype.updateWidget = function () {
        var _this = this;
        // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
        if (this.name === undefined) {
            this.flag = true;
        }
        else {
            if (this.widgetId === undefined) {
                this.createTextWidget();
            }
            else {
                // this.updatedWidget = new Widget(this.widgetId, this.widget.widgetType, this.pageId, '1', this.text, this.widget.width,
                //   this.widget.url, this.rows, this.name, this.placeholder, this.formatted);
                var updateWidget = {
                    _id: this.widgetId,
                    widgettype: 'Text',
                    placeholder: this.placeholder,
                    _page: this.pageId,
                    rows: this.rows,
                    text: this.text,
                    formatted: this.formatted,
                    name: this.name
                };
                this.widgetService.updateWidget(this.widgetId, updateWidget)
                    .subscribe(function (widgetUpdated) {
                    console.log(widgetUpdated);
                    _this.widget = widgetUpdated;
                    _this.goBack();
                });
            }
        }
    };
    WidgetTextComponent.prototype.createTextWidget = function () {
        var _this = this;
        // this.newWidget = new Widget( Math.random() + 201 + '', 'TEXT', this.pageId, '1', this.text, '100%',
        //   '', this.rows, this.name, this.placeholder, this.formatted);
        // console.log(this.newWidget);
        var newWidget = {
            widgettype: 'Text',
            _page: this.pageId,
            placeholder: this.placeholder,
            rows: this.rows,
            formatted: this.formatted,
            name: this.name
        };
        this.widgetService.createWidget(this.pageId, newWidget).subscribe(function (widgetlist) {
            console.log(widgetlist);
            if (widgetlist.length !== 0) {
                _this.goBack();
            }
        });
    };
    WidgetTextComponent.prototype.deleteWidget = function () {
        var _this = this;
        // call delete widget function from widget client service
        this.widgetService.deleteWidget(this.widgetId)
            .subscribe(function (widgetlist) {
            console.log(widgetlist);
            _this.goBack();
        });
    };
    WidgetTextComponent.prototype.goBack = function () {
        this.location.back();
    };
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n     Update Widget\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n     <span (click)=\"updateYouTubeWidget()\" class=\"glyphicon glyphicon-ok\"></span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding cl-container-padding-bottom\">\n  <form>\n    <div class =\"form-group\">\n      <label for=\"image-text\">Text</label>\n\n      <input type=\"text\" class=\"form-control\"\n             name=\"text\"\n             [(ngModel)] = \"text\"\n             id=\"image-text\" placeholder=\"Text\">\n    </div>\n    <div class =\"form-group\">\n      <label for=\"image-size\">URL</label>\n\n      <input id=\"image-size\"\n             class=\"form-control\"\n             placeholder=\"URL\"\n             name=\"url\"\n             [(ngModel)]=\"url\">\n    </div>\n    <div class =\"form-group\">\n      <label for=\"image-width\">Width</label>\n\n      <input id=\"image-width\"\n             class=\"form-control\"\n             placeholder=\"Width\"\n             name=\"width\"\n             [(ngModel)]=\"width\">\n    </div>\n\n  </form>\n  <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteYouTubeWidget()\">Delete</button>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}\" class=\"navbar-text pull-right cl-icon-padding\">\n        <span class=\"glyphicon glyphicon-user cl-text-blue\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router, location) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetId = params['widgetId'];
            _this.userId = params['userId'];
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
            console.log('widgetId' + _this.widgetId);
        });
        this.widgetService.findWidgetById(this.widgetId).subscribe(function (widgetFound) {
            _this.widget = widgetFound;
            _this.width = widgetFound.width;
            _this.text = widgetFound.text;
            _this.url = widgetFound.url;
        });
    };
    // new Widget('248', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtube.com/token' ),
    WidgetYoutubeComponent.prototype.updateYouTubeWidget = function () {
        var _this = this;
        // this.updatedWidget = new Widget(this.widgetId, 'YOUTUBE', this.pageId,
        //   this.widget.size, this.text, this.width, this.url, 0, '' , '' , false);
        var updateWidget = {
            _id: this.widgetId,
            widgettype: 'YouTube',
            size: this.widget.size,
            text: this.text,
            url: this.url,
            _page: this.pageId,
            width: this.width
        };
        this.widgetService.updateWidget(this.widgetId, updateWidget).subscribe(function (widget) {
            _this.updatedWidget = widget;
            _this.location.back();
        });
        //    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent.prototype.goBack = function () {
        this.location.back();
    };
    WidgetYoutubeComponent.prototype.deleteYouTubeWidget = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.widgetId).subscribe(function (widgets) {
            _this.location.back();
        });
        //    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n\r\n.youtube-widget {\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16:9 */\r\n  height: 0;\r\n}\r\n\r\n.youtube-widget iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n      Widgets\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/new\">\n      <span class=\"glyphicon glyphicon-plus cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class = \"container cl-container-padding\">\n<div class=\"widget-list\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n  <div *ngFor=\"let widget of widgets\">\n\n    <div [ngSwitch]=\"widget.widgettype\">\n\n        <div *ngSwitchCase=\"'HTML'\">\n          <div>{{widget.text}}</div>\n          <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </div><br>\n\n        <div *ngSwitchCase=\"'Text'\">\n          <div *ngIf=\"widget.formatted\">\n            <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n          </div>\n          <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows === 1)\" placeholder=\"{{widget.placeholder}}\"\n                 class=\"form-control\"/>\n\n          <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\" rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                    class=\"form-control\">{{widget.text}}</textarea>\n\n          <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </div><br>\n\n        <div *ngSwitchCase=\"'Header'\">\n        <div><p>{{widget.text}}</p></div>\n        <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        </div><br>\n\n        <div *ngSwitchCase=\"'YouTube'\" class=\"youtube-widget\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe width={{widget.width}} height={{widget.width}} [src]=\"widget.url | safe\" frameborder=\"0\" allowfullscreen></iframe>\n        <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        </div>\n        </div><br>\n\n        <div *ngSwitchCase=\"'Image'\">\n        <img class=\"img-responsive img-rounded cl-widget-images\" src={{widget.url}}>\n        <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        </div><br>\n\n      <div *ngSwitchCase=\"'Flickr'\">\n        <div>\n          <img class=\"img-responsive img-rounded cl-widget-images\" src={{widget.url}}>\n          <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page/{{pageId}}/widget/{{widget._id}}\">\n            <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}\">\n      <span class=\"glyphicon glyphicon-user cl-text-blue\"></span>\n      </a>\n    </div>\n    <div class=\"pull-left navbar-text\">\n        <span class=\"glyphicon glyphicon-play\"></span>\n        <span class=\"glyphicon glyphicon-eye-open\"></span>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WidgetListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, domSanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.domSanitizer = domSanitizer;
    }
    WidgetListComponent.prototype.transform = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
            _this.pageId = params['pageId'];
            // console.log('userId' + this.userId);
            // console.log('websiteId' + this.websiteId);
            // console.log('pageId' + this.pageId);
            _this.widgetService.findWidgetsByPageId(_this.pageId).subscribe(function (widgetlist) {
                console.log(widgetlist);
                _this.widgets = widgetlist;
            });
        });
        /*console.log(this.widgets);
        this.len = this.widgets.length;
        for (let x = 0; x < this.widgets.length; x++) {
          console.log('widget id ' + this.widgets[x]._id);
          console.log('widget text ' + this.widgets[x].text);
          console.log('widget type ' + this.widgets[x].widgetType);
        }
        console.log('widgets' + this.widgets.length);*/
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        var _this = this;
        // call widget service function to update widget as per index
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
            .subscribe(function (widgetlist) {
            console.log('widget list component ');
            console.log(widgetlist);
            _this.widgets = widgetlist;
        });
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());

var SafePipeComponent = /** @class */ (function () {
    function SafePipeComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipeComponent.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SafePipeComponent);
    return SafePipeComponent;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '7ae5a1810952d12b8eb815fbf4aff0fc';
        this.secret = '8f0549cc12af42b2';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', page).map(function (response) {
            return response.json();
        });
    };
    // findPageByWebsiteId(websiteId) {
    //   for (let x = 0; x < this.pages.length; x++) {
    //     if (this.pages[x].websiteId === websiteId) {
    //         return this.pages[x];
    //     }
    //   }
    // }
    PageService.prototype.findPagesByWebsiteId = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page').map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this.http.put(this.baseUrl + '/api/page/' + pageId, page).map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId).map(function (response) {
            return response.json();
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/user', user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/user?username=' + username).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        console.log('client side user service' + username + ' password ' + password);
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/user/' + userId, user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId).map(function (response) {
            return response.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', website).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website').map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, website).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId).map(function (response) {
            return response.json();
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget).map(function (response) {
            console.log('inside create widget');
            console.log(response);
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        console.log('inside widget service client');
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget').map(function (response) {
            console.log('before response');
            console.log(response);
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId).map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget).map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId).map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        console.log('widget client ');
        return this.http.put(this.baseUrl + '/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex, '').map(function (res) {
            console.log('widget client inside ');
            return res.json();
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'https://cs5610prakritidave-webdev.herokuapp.com'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map