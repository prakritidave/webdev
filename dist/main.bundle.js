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
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
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

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\n/*body {*/\r\n\r\n/*padding-top: 70px;*/\r\n\r\n/*padding-bottom: 10px;*/\r\n\r\n/*}*/\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__assignment_directives_sortable_directive__ = __webpack_require__("./assignment/directives/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_flickr_service_client__ = __webpack_require__("./src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_projUser_home_home_component__ = __webpack_require__("./src/app/components/projUser/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_projUser_register_proj_user_register_proj_user_component__ = __webpack_require__("./src/app/components/projUser/register-proj-user/register-proj-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_projUser_profile_proj_user_profile_proj_user_component__ = __webpack_require__("./src/app/components/projUser/profile-proj-user/profile-proj-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_recipes_recipe_list_recipe_list_component__ = __webpack_require__("./src/app/components/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_recipes_add_recipe_add_chef_recipe_add_chef_recipe_component__ = __webpack_require__("./src/app/components/recipes/add-recipe/add-chef-recipe/add-chef-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_food_service_client__ = __webpack_require__("./src/app/services/food.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_project_recipe_service_client__ = __webpack_require__("./src/app/services/project/recipe.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_recipes_search_yummly_recipes_search_yummly_recipes_component__ = __webpack_require__("./src/app/components/recipes/search-yummly-recipes/search-yummly-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_recipes_view_recipe_view_recipe_component__ = __webpack_require__("./src/app/components/recipes/view-recipe/view-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_projUser_chef_list_chef_list_component__ = __webpack_require__("./src/app/components/projUser/chef-list/chef-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_recipes_edit_chef_recipe_edit_chef_recipe_component__ = __webpack_require__("./src/app/components/recipes/edit-chef-recipe/edit-chef-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_webdev_menu_webdev_menu_component__ = __webpack_require__("./src/app/components/webdev-menu/webdev-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_proj_auth_guard_service__ = __webpack_require__("./src/app/services/proj-auth-guard.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_28__assignment_directives_sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["b" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_list_widget_list_component__["a" /* SafePipeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_projUser_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_projUser_register_proj_user_register_proj_user_component__["a" /* RegisterProjUserComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_projUser_profile_proj_user_profile_proj_user_component__["a" /* ProfileProjUserComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_recipes_recipe_list_recipe_list_component__["a" /* RecipeListComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_recipes_add_recipe_add_chef_recipe_add_chef_recipe_component__["a" /* AddChefRecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_recipes_search_yummly_recipes_search_yummly_recipes_component__["a" /* SearchYummlyRecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_recipes_view_recipe_view_recipe_component__["a" /* ViewRecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_projUser_chef_list_chef_list_component__["a" /* ChefListComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_recipes_edit_chef_recipe_edit_chef_recipe_component__["a" /* EditChefRecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_webdev_menu_webdev_menu_component__["a" /* WebdevMenuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_quill_editor__["a" /* QuillEditorModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatFormFieldModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_24__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_27__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_26__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_32__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_33__services_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_34__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_40__services_food_service_client__["a" /* FoodService */], __WEBPACK_IMPORTED_MODULE_41__services_project_projuser_service_client__["a" /* ProjUserService */], __WEBPACK_IMPORTED_MODULE_42__services_project_recipe_service_client__["a" /* RecipeService */], __WEBPACK_IMPORTED_MODULE_48__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_projUser_home_home_component__ = __webpack_require__("./src/app/components/projUser/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_projUser_register_proj_user_register_proj_user_component__ = __webpack_require__("./src/app/components/projUser/register-proj-user/register-proj-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_projUser_profile_proj_user_profile_proj_user_component__ = __webpack_require__("./src/app/components/projUser/profile-proj-user/profile-proj-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_recipes_recipe_list_recipe_list_component__ = __webpack_require__("./src/app/components/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_recipes_add_recipe_add_chef_recipe_add_chef_recipe_component__ = __webpack_require__("./src/app/components/recipes/add-recipe/add-chef-recipe/add-chef-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_recipes_search_yummly_recipes_search_yummly_recipes_component__ = __webpack_require__("./src/app/components/recipes/search-yummly-recipes/search-yummly-recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_recipes_view_recipe_view_recipe_component__ = __webpack_require__("./src/app/components/recipes/view-recipe/view-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_projUser_chef_list_chef_list_component__ = __webpack_require__("./src/app/components/projUser/chef-list/chef-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_recipes_edit_chef_recipe_edit_chef_recipe_component__ = __webpack_require__("./src/app/components/recipes/edit-chef-recipe/edit-chef-recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_webdev_menu_webdev_menu_component__ = __webpack_require__("./src/app/components/webdev-menu/webdev-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__ = __webpack_require__("./src/app/services/proj-auth-guard.service.ts");































// /profile/{{user._id}}/website/{{website._id}}/page
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_29__components_webdev_menu_webdev_menu_component__["a" /* WebdevMenuComponent */] },
    { path: 'project', component: __WEBPACK_IMPORTED_MODULE_20__components_projUser_home_home_component__["a" /* HomeComponent */] },
    { path: 'registerProjUser', component: __WEBPACK_IMPORTED_MODULE_21__components_projUser_register_proj_user_register_proj_user_component__["a" /* RegisterProjUserComponent */] },
    { path: 'project/profile/:userId', component: __WEBPACK_IMPORTED_MODULE_22__components_projUser_profile_proj_user_profile_proj_user_component__["a" /* ProfileProjUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]] },
    { path: 'project/profile/:userId/recipe', component: __WEBPACK_IMPORTED_MODULE_23__components_recipes_recipe_list_recipe_list_component__["a" /* RecipeListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]] },
    { path: 'project/profile/:recipeId/view', component: __WEBPACK_IMPORTED_MODULE_26__components_recipes_view_recipe_view_recipe_component__["a" /* ViewRecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]] },
    { path: 'project/profile/:userId/recipe/new', component: __WEBPACK_IMPORTED_MODULE_24__components_recipes_add_recipe_add_chef_recipe_add_chef_recipe_component__["a" /* AddChefRecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]] },
    { path: 'project/profile/:userId/recipe/:recipeId', component: __WEBPACK_IMPORTED_MODULE_28__components_recipes_edit_chef_recipe_edit_chef_recipe_component__["a" /* EditChefRecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]] },
    { path: 'project/profile/:userId/recipe/:recipeId/view', component: __WEBPACK_IMPORTED_MODULE_26__components_recipes_view_recipe_view_recipe_component__["a" /* ViewRecipeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]] },
    { path: 'project/profile/:userId/:chefId/recipe', component: __WEBPACK_IMPORTED_MODULE_23__components_recipes_recipe_list_recipe_list_component__["a" /* RecipeListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]] },
    { path: 'project/profile/:userId/recipe/new/yummly', component: __WEBPACK_IMPORTED_MODULE_25__components_recipes_search_yummly_recipes_search_yummly_recipes_component__["a" /* SearchYummlyRecipesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]] },
    { path: 'project/profile/:userId/chefs', component: __WEBPACK_IMPORTED_MODULE_27__components_projUser_chef_list_chef_list_component__["a" /* ChefListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__services_proj_auth_guard_service__["a" /* ProjAuthGuardService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId', component: __WEBPACK_IMPORTED_MODULE_5__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/new', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId', component: __WEBPACK_IMPORTED_MODULE_16__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["b" /* WidgetListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/image',
        component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/flickr',
        component: __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/header',
        component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/youtube',
        component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/html',
        component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/text',
        component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_auth_guard_service__["a" /* AuthGuardService */]] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n      Edit Page\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n      <span (click)=\"saveChanges()\" class=\"glyphicon glyphicon-ok cl-text-black\"></span>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid cl-container-padding-bottom cl-container-padding\">\n  <div *ngIf=\"errFlag\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <form novalidate name=\"model.myform\">\n    <div class =\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             name=\"pagename\"\n             id=\"name\"\n             required\n             placeholder=\"Page Name\"\n             [(ngModel)] = \"pageName\">\n\n      <span class=\"alert-class\"\n            *ngIf=\"errFlag\">{{alert}}</span>\n    </div>\n    <div class =\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea id=\"description\" class=\"form-control\"\n                name=\"pageDescription\"\n                rows=\"2\" cols=\"20\" placeholder=\"Page Description\"\n                [(ngModel)] = \"pageDescription\"></textarea>\n    </div>\n  </form>\n  <button type=\"button\" (click)=\"deleteThisPage()\" class=\"btn btn-danger btn-block\">\n    Delete\n  </button>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}\">\n      <span class=\"glyphicon glyphicon-user cl-text-blue\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
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
    function PageEditComponent(pageService, activatedRoute, router, sharedService) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errFlag = false;
        this.error = 'Enter the name of the Page';
        this.alert = '* Enter the Page name';
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pageId'];
            _this.websiteId = params['websiteId'];
            // this.userId = params['userId'];
            _this.user = _this.sharedService.user;
            _this.userId = _this.user._id;
            _this.pageService.findPageById(_this.pageId).subscribe(function (page) {
                console.log(page);
                // this.currPage = page;
                _this.pageName = page.name;
                _this.pageDescription = page.description;
            });
        });
    };
    PageEditComponent.prototype.saveChanges = function () {
        var _this = this;
        // this.newPage = new Page((new Date()).getTime() + '', this.pageName, this.websiteId, this.pageDescription);
        if (this.pageName === '') {
            this.errFlag = true;
        }
        else {
            var newPage = {
                name: this.pageName,
                description: this.pageDescription,
            };
            this.pageService.updatePage(this.pageId, newPage).subscribe(function (updatedPage) {
                _this.newPage = updatedPage;
                _this.router.navigate(['/profile', _this.userId, 'website', _this.websiteId, 'page']);
            });
        }
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
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_shared_service__["a" /* SharedService */]])
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n         <a routerLink=\"/profile/{{userId}}/website/{{websiteId}}/page\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n         </a>\n    </div>\n    <span class=\"navbar-brand cl-text-grey cl-text-bold\">\n      New Page\n    </span>\n    <div class=\"navbar-text pull-right cl-icon-padding\">\n      <a (click)=\"createNewPage()\">\n        <span class=\"glyphicon glyphicon-ok cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container-fluid cl-container-padding cl-container-padding-bottom\">\n  <div *ngIf=\"error\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n  <form>\n    <div class =\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\"\n             name=\"pagename\"\n             class=\"form-control\"\n             id=\"name\"\n             placeholder=\"Page Name\"\n             required\n             [(ngModel)]=\"pageName\">\n    </div>\n    <div class =\"form-group\">\n      <label for=\"description\">Description</label>\n      <textarea id=\"description\" name=\"description\" class=\"form-control\"\n                rows=\"2\" cols=\"20\" placeholder=\"Page Description\"\n      [(ngModel)]=\"pageDesc\"></textarea>\n    </div>\n  </form>\n</div>\n<nav class=\"navbar navbar-fixed-bottom navbar-default\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/profile/{{userId}}\">\n      <span class=\"glyphicon glyphicon-user cl-text-blue\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

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
        this.errFlag = false;
        this.error = 'Enter the name of the Page';
        this.alert = '* Enter the Page name';
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['websiteId'];
            _this.userId = params['userId'];
            console.log('websiteId' + _this.websiteId);
        });
    };
    PageNewComponent.prototype.createNewPage = function () {
        var _this = this;
        if (this.pageName === '') {
            this.errFlag = true;
        }
        else {
            var newPage = {
                name: this.pageName,
                description: this.pageDesc
            };
            this.pageService.createPage(this.websiteId, newPage).subscribe(function (pages) {
                console.log(pages);
                _this.router.navigate(['/profile', _this.userId, 'website', _this.websiteId, 'page']);
            });
        }
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

/***/ "./src/app/components/projUser/chef-list/chef-list.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-orange{\r\n  color: orange;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/projUser/chef-list/chef-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <!--<div class=\"container\">-->\n    <div class=\"navbar-header\">\n      <div class=\"cl-text-black navbar-text pull-left\">\n        <a routerLink=\"/project/profile/{{userId}}\" class=\"cl-text-black\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\"></span>\n        </a>\n      </div>\n      <a class=\"navbar-brand cl-text-orange cl-text-bold\">Our Creative Chefs</a>\n    </div>\n  <!--</div>-->\n</div>\n\n<div class=\"container-fluid cl-container-padding-bottom cl-container-padding\">\n  <div class=\"col-xs-2\">\n    <ul class=\"list-group\">\n      <li *ngFor = \"let chef of chefs\" class=\"list-group-item li-no-border\">\n        <a routerLink=\"/project/profile/{{userId}}/{{chef._id}}/recipe\">\n          <label>{{chef.firstName}}</label>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom \">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/project/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/projUser/chef-list/chef-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChefListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChefListComponent = /** @class */ (function () {
    function ChefListComponent(projUserService, activatedRoute) {
        this.projUserService = projUserService;
        this.activatedRoute = activatedRoute;
        this.chefs = [];
    }
    ChefListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usertype = 'chef';
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.projUserService.findUserByUsertype(this.usertype)
            .subscribe(function (res) {
            _this.chefs = res;
            console.log(_this.chefs);
        });
    };
    ChefListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chef-list',
            template: __webpack_require__("./src/app/components/projUser/chef-list/chef-list.component.html"),
            styles: [__webpack_require__("./src/app/components/projUser/chef-list/chef-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_projuser_service_client__["a" /* ProjUserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ChefListComponent);
    return ChefListComponent;
}());



/***/ }),

/***/ "./src/app/components/projUser/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\n/*body {*/\r\n\r\n/*padding-top: 70px;*/\r\n\r\n/*padding-bottom: 10px;*/\r\n\r\n/*}*/\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n\r\n.form-style {\r\n  position: relative;\r\n  width: 80%;\r\n  height: 80%;\r\n}\r\n\r\n.mydiv {\r\n  background-image: url('https://i.pinimg.com/originals/44/bc/45/44bc45afbc78beb720685f5682961960.jpg');\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  height: 100vh;\r\n  width: 100%;\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/projUser/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cl-container-padding container mydiv\">\n  <form #f=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"formGroupExampleInput\">Username</label>\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"username\" class=\"form-control-sm\" id=\"formGroupExampleInput\" required placeholder=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"formGroupExampleInput2\">Password</label>\n      <input name=\"password\" type=\"password\" [(ngModel)]=\"password\" class=\"form-control-sm\" id=\"formGroupExampleInput2\" required placeholder=\"password\">\n    </div>\n    <div class=\"form-group\">\n      <label>Not Registered Yet?</label>\n      <a routerLink=\"/registerProjUser\">\n      <button class=\"btn btn-info btn-sm\">Register here</button><br></a><br>\n      <button (click)=\"loginUser()\" class=\"btn btn-primary btn-sm\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n    </div><br>\n\n  </form>\n</div>\n<!--<div class=\"form-group\">-->\n<!--<label>Login As</label><br>-->\n<!--<label class=\"btn btn-primary\">-->\n<!--<input type=\"radio\" #vpass=\"ngModel\"[(ngModel)]=\"usertype\" class=\"active\" data-ng-model=\"selection\" name=\"options\" value=\"chef\" />-->\n<!--<span>Chef</span>-->\n<!--</label>-->\n\n<!--<label class=\"btn btn-primary\">-->\n<!--<input type=\"radio\" #vpass=\"ngModel\" [(ngModel)]=\"usertype\" data-ng-model=\"selection\" name=\"options\" value=\"foodie\"/>-->\n<!--<span>Foodie</span>-->\n<!--</label><br><br>-->\n\n<!--<span class=\"help-block\" *ngIf=\"!vpass.valid && vpass.touched\">*Please select one!</span>-->\n<!--</div>-->\n\n\n<!--<button class=\"fa fa-facebook btn btn-primary\">-->\n<!--<a href=\"{{baseUrl}}/auth/facebook\"></a>Facebook</button>-->\n"

/***/ }),

/***/ "./src/app/components/projUser/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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





var HomeComponent = /** @class */ (function () {
    function HomeComponent(projUserService, router) {
        this.projUserService = projUserService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.usertype = 'foodie';
    };
    HomeComponent.prototype.loginUser = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.usertype = this.loginForm.value.usertype;
        this.projUserService.login(this.username, this.password)
            .subscribe(function (res) {
            console.log(res);
            _this.userId = res._id;
            _this.router.navigate(['/project', 'profile', _this.userId]);
        });
        // this.projUserService.
        // findUserByCredentials(this.username, this.password)
        //   .subscribe((res: any) => {
        //     console.log(res);
        //     this.userId = res._id;
        //     this.router.navigate(['/project', 'profile', this.userId]);
        //   });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NgForm */])
    ], HomeComponent.prototype, "loginForm", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/projUser/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/projUser/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_projuser_service_client__["a" /* ProjUserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/projUser/profile-proj-user/profile-proj-user.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/projUser/profile-proj-user/profile-proj-user.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\">Profile</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a *ngIf=\"user.usertype=='foodie'\" routerLink=\"/project/profile/{{userId}}/chefs\"><b>Chef's Recipes</b></a></li>\n      <li><a *ngIf=\"user.usertype=='foodie'\" routerLink=\"/project/profile/{{userId}}/recipe/new/yummly\"><b>Search Recipes</b></a></li>\n      <li><a *ngIf=\"user.usertype=='chef'\" routerLink=\"/project/profile/{{userId}}/recipe\"><b>My Recipes</b></a></li>\n      <li><a *ngIf=\"user.usertype=='chef'\" routerLink=\"/project/profile/{{userId}}/recipe/new\"><b>Add Recipes</b></a></li>\n    </ul>\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand pull-right\">I am a {{user.usertype}}!</a>\n    </div>\n  </div>\n</div>\n<div class=\"container cl-container-padding\">\n  <form>\n    <div class=\"form-group\">\n    <strong>Username</strong>\n    <input type=\"text\" name=\"username\" title=\"username\" class = \"form-control form-fixer \"[(ngModel)]=\"user.username\"><br>\n    <strong>First Name</strong>\n    <input type=\"text\" name=\"first name\" title=\"firstname\" class = \"form-control form-fixer\" [(ngModel)]=\"user.firstName\"><br>\n    <strong>Last Name</strong>\n    <input type=\"text\" name=\"last name\" title=\"lastname\" class = \"form-control form-fixer\" [(ngModel)]=\"user.lastName\"><br>\n    </div>\n  </form>\n\n  <!--<a routerLink=\"/project/profile/{{userId}}/recipe\">-->\n    <!--<button type=\"button\" class=\"btn btn-primary btn-block\">My Recipes</button>-->\n  <!--</a><br>-->\n\n  <!--<a routerLink=\"/\">-->\n    <!--<button *ngIf=\"user.usertype=='foodie'\" name=\"abc\" type=\"button\" class=\"btn btn-primary btn-block\">Chefs I follow</button>-->\n    <!--<button *ngIf=\"user.usertype=='chef'\" name=\"abc\" type=\"button\" class=\"btn btn-primary btn-block\">Followed By</button>-->\n  <!--</a><br>-->\n\n  <a (click)=\"updateUser()\" class=\"btn btn-primary btn-block\">Update</a><br>\n  <a (click)=\"deleteUser()\" class=\"btn btn-danger btn-block\">Delete</a><br>\n  <button (click)=\"logoutUser()\" type=\"button\" class=\"btn btn-secondary btn-block\">Logout</button>\n\n</div>\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n</nav>\n"

/***/ }),

/***/ "./src/app/components/projUser/profile-proj-user/profile-proj-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProjUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileProjUserComponent = /** @class */ (function () {
    function ProfileProjUserComponent(activatedRoute, router, projUserService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.projUserService = projUserService;
    }
    ProfileProjUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (param) {
            _this.userId = param['userId'];
            _this.projUserService.findUserById(_this.userId)
                .subscribe(function (res) {
                console.log(res);
                _this.user = res;
                console.log(_this.user);
            });
        });
    };
    ProfileProjUserComponent.prototype.updateUser = function () {
        var _this = this;
        this.updatedUser = {
            _id: this.user._id,
            username: this.user.username,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            usertype: this.user.usertype,
            password: this.user.password
        };
        this.projUserService.updateUser(this.user._id, this.updatedUser)
            .subscribe(function (res) {
            console.log(res);
            _this.user = res;
            _this.ngOnInit();
        });
    };
    ProfileProjUserComponent.prototype.deleteUser = function () {
        this.projUserService.deleteUser(this.user._id)
            .subscribe(function (res) {
            console.log(res);
        });
        this.router.navigate(['project']);
    };
    ProfileProjUserComponent.prototype.logoutUser = function () {
        this.projUserService.logout()
            .subscribe(function (res) {
            console.log(res);
        });
        this.router.navigate(['project']);
    };
    ProfileProjUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile-proj-user',
            template: __webpack_require__("./src/app/components/projUser/profile-proj-user/profile-proj-user.component.html"),
            styles: [__webpack_require__("./src/app/components/projUser/profile-proj-user/profile-proj-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_project_projuser_service_client__["a" /* ProjUserService */]])
    ], ProfileProjUserComponent);
    return ProfileProjUserComponent;
}());



/***/ }),

/***/ "./src/app/components/projUser/register-proj-user/register-proj-user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/projUser/register-proj-user/register-proj-user.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid row\">\n    <div class=\"cl-text-black navbar-text pull-left\">\n    </div>\n    <span class=\"navbar-brand cl-text-black cl-text-bold\">\n      Register Here\n    </span>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding\">\n  <div *ngIf=\"error\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n\n  <form #f=\"ngForm\">\n    <input type=\"text\"\n           class = \"form-control input-lg\"\n           [(ngModel)] = \"firstName\"\n           name=\"firstname\"\n           placeholder=\"firstname\"><br>\n\n    <input type=\"text\"\n           class = \"form-control input-lg\"\n           [(ngModel)] = \"lastName\"\n           name=\"lastname\"\n           placeholder=\"lastname\"><br>\n\n    <input type=\"text\"\n           class = \"form-control input-lg\"\n           [(ngModel)] = \"username\"\n           name=\"username\"\n           #name=\"ngModel\"\n           placeholder=\"username\"/><br>\n\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">*Please enter username!</span>\n\n    <input type=\"password\"\n           class = \"form-control input-lg\"\n           [(ngModel)] = \"password\"\n           name=\"password\"\n           #pass=\"ngModel\"\n           placeholder=\"password\"/><br>\n\n    <span class=\"help-block\" *ngIf=\"!pass.valid && pass.touched\">*Please enter password!</span>\n\n    <input\n      name=\"vpassword\"\n      placeholder=\"verify password\"\n      [(ngModel)] = \"vpassword\"\n      type=\"password\"\n      class=\"form-control\"\n      ngModel\n      required\n      #vpass=\"ngModel\"/><br>\n\n    <span class=\"help-block\" *ngIf=\"!vpass.valid && vpass.touched\">*Please enter password again!</span>\n\n    <label>I am a</label><br>\n    <div class=\"form-group\">\n    <label class=\"btn btn-primary\">\n      <input type=\"radio\" (change)=\"getRadioButtonValue($event)\" [(ngModel)]=\"usertype\" class=\"active\"  name=\"options\" value=\"chef\" />\n      <span>Chef</span>\n    </label>\n\n    <label class=\"btn btn-primary\">\n      <input type=\"radio\" (change)=\"getRadioButtonValue($event)\" [(ngModel)]=\"usertype\"  name=\"options\" value=\"foodie\"/>\n      <span>Foodie</span>\n    </label>\n    </div>\n      <br><br>\n\n    <button (click)=\"registerUser()\"\n      class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n            [disabled]=\"!f.valid\">Register</button><br>\n\n    <a routerLink=\"/project\">\n      <button type=\"button\" class=\"btn btn-danger btn-block\">Cancel</button>\n    </a>\n  </form>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\"></div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/projUser/register-proj-user/register-proj-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterProjUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterProjUserComponent = /** @class */ (function () {
    function RegisterProjUserComponent(projUserService, router) {
        this.projUserService = projUserService;
        this.router = router;
    }
    RegisterProjUserComponent.prototype.ngOnInit = function () {
        this.usertype = 'chef';
    };
    RegisterProjUserComponent.prototype.getRadioButtonValue = function (event) {
        this.usertype = event.target.value;
        console.log(this.usertype);
    };
    RegisterProjUserComponent.prototype.registerUser = function () {
        var _this = this;
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.usertype);
        if (this.password === this.vpassword) {
            this.newuser = {
                username: this.username,
                usertype: this.usertype,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName
            };
            this.projUserService.register(this.newuser)
                .subscribe(function (res) {
                console.log(res);
                _this.user = res;
                _this.router.navigate(['/project', 'profile', _this.user._id]);
            });
        }
        else {
            this.error = 'passwords don\'t match!!';
        }
        //   this.projUserService.createUser(this.newuser)
        //     .subscribe((res: any) => {
        //       console.log(res);
        //       this.user = res;
        //       this.router.navigate(['/project', 'profile', this.user._id]);
        //     });
        // } else {
        //   this.error = 'passwords don\'t match!!';
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* NgForm */])
    ], RegisterProjUserComponent.prototype, "registerForm", void 0);
    RegisterProjUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register-proj-user',
            template: __webpack_require__("./src/app/components/projUser/register-proj-user/register-proj-user.component.html"),
            styles: [__webpack_require__("./src/app/components/projUser/register-proj-user/register-proj-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_projuser_service_client__["a" /* ProjUserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterProjUserComponent);
    return RegisterProjUserComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/add-recipe/add-chef-recipe/add-chef-recipe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/add-recipe/add-chef-recipe/add-chef-recipe.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"cl-text-black navbar-text pull-left\">\n      <a routerLink=\"/project/profile/{{userId}}\" class=\"cl-text-black\">\n        <span class=\"glyphicon glyphicon-chevron-left cl-text-black\"></span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-black cl-text-bold\">\n      Create Recipe\n    </span>\n    <a class=\"navbar-brand pull-right cl-text-black cl-icon-padding\">\n      <span (click)=\"saveRecipe()\" class=\"glyphicon glyphicon-ok cl-text-black\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding cl-container-padding-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <form novalidate name=\"model.myform\">\n        <div class =\"form-group\">\n          <label for=\"prep-time\">Prep Time (minutes)</label>\n          <input type=\"text\" class=\"form-control\"\n                 name=\"prep\" id=\"prep-time\" required\n                 [(ngModel)]= \"preptime\">\n\n        </div>\n        <div class =\"form-group\">\n          <label for=\"cook-time\">Cook Time (minutes)</label>\n          <input type=\"text\" class=\"form-control\"\n                 name=\"cook\" id=\"cook-time\" required\n                 [(ngModel)]= \"cooktime\">\n\n\n        </div>\n        <div class =\"form-group\">\n          <label for=\"servings\">Number of Servings</label>\n          <input type=\"text\" class=\"form-control\"\n                 name=\"servings\" id=\"servings\" required\n                 [(ngModel)]= \"servings\">\n\n        </div>\n      </form>\n    </div>\n    <!--<div class=\"verticle-line hidden-xs\" style=\"padding-top: 0px\"></div>-->\n    <div class=\"col-xs-8\">\n      <form novalidate name=\"model.myform\">\n        <div class =\"form-group\">\n          <label for=\"recipe-title\">Recipe Title</label>\n          <input type=\"text\" class=\"form-control\"\n                 name=\"name\" id=\"recipe-title\"\n                 placeholder=\"Title\" required\n                 [(ngModel)]= \"title\">\n\n        </div>\n        <div class =\"form-group\">\n          <label for=\"recipe-description\">Recipe Description</label>\n          <textarea id=\"recipe-description\" name= \"description\" required\n                    class=\"form-control\" rows=\"5\" placeholder=\"Description\"\n                    [(ngModel)]=\"description\"></textarea>\n        </div>\n        <div class =\"form-group\">\n          <label for=\"ingredients\">Ingredients</label>\n          <textarea id=\"ingredients\" name= \"ingredients\" required\n                    class=\"form-control\" rows=\"5\" placeholder=\"add one per line\"\n                    [(ngModel)]=\"ingredients\"></textarea>\n        </div>\n        <div class =\"form-group\">\n          <label for=\"directions\">Directions</label>\n          <textarea id=\"directions\" name= \"directions\" required\n                    class=\"form-control\" rows=\"5\" placeholder=\"add one step per line\"\n                    [(ngModel)]=\"direction\"></textarea>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/project/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/recipes/add-recipe/add-chef-recipe/add-chef-recipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddChefRecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_recipe_service_client__ = __webpack_require__("./src/app/services/project/recipe.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddChefRecipeComponent = /** @class */ (function () {
    function AddChefRecipeComponent(recipeService, projUserService, activatedRoute, location) {
        this.recipeService = recipeService;
        this.projUserService = projUserService;
        this.activatedRoute = activatedRoute;
        this.location = location;
    }
    AddChefRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
    };
    AddChefRecipeComponent.prototype.saveRecipe = function () {
        this.newRecipe = {
            title: this.title,
            description: this.description,
            ingredients: this.ingredients,
            preptime: this.preptime,
            cooktime: this.cooktime,
            servings: this.servings,
            direction: this.direction
        };
        this.recipeService.createRecipe(this.userId, this.newRecipe)
            .subscribe(function (res) {
            console.log(res);
        });
        this.location.back();
    };
    AddChefRecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-chef-recipe',
            template: __webpack_require__("./src/app/components/recipes/add-recipe/add-chef-recipe/add-chef-recipe.component.html"),
            styles: [__webpack_require__("./src/app/components/recipes/add-recipe/add-chef-recipe/add-chef-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_project_recipe_service_client__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_projuser_service_client__["a" /* ProjUserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], AddChefRecipeComponent);
    return AddChefRecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/edit-chef-recipe/edit-chef-recipe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/edit-chef-recipe/edit-chef-recipe.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid row\">\n    <div class=\"cl-text-black navbar-text pull-left\">\n      <a routerLink=\"/project/profile/{{userId}}/recipe\" class=\"cl-text-black\">\n        <span class=\"glyphicon glyphicon-chevron-left cl-text-black\"></span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-black cl-text-bold\">\n      Update Recipe\n    </span>\n    <a (click)=\"saveRecipe()\" class=\"navbar-brand pull-right cl-text-black cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-ok cl-text-black\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding cl-container-padding-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <form novalidate name=\"model.myform\">\n        <div class =\"form-group\">\n          <label for=\"prep-time\">Prep Time (minutes)</label>\n          <input type=\"text\" class=\"form-control\"\n                 name=\"prep\" id=\"prep-time\" required\n                 [(ngModel)]= \"recipe.preptime\">\n\n        </div>\n        <div class =\"form-group\">\n          <label for=\"cook-time\">Cook Time (minutes)</label>\n          <input type=\"text\" class=\"form-control\"\n                 name=\"cook\" id=\"cook-time\" required\n                 [(ngModel)]= \"recipe.cooktime\">\n\n\n        </div>\n        <div class =\"form-group\">\n          <label for=\"servings\">Number of Servings</label>\n          <input type=\"text\" class=\"form-control\"\n                 name=\"servings\" id=\"servings\" required\n                 [(ngModel)]= \"recipe.servings\">\n\n        </div>\n      </form>\n    </div>\n    <!--<div class=\"verticle-line hidden-xs\" style=\"padding-top: 0px\"></div>-->\n    <div class=\"col-xs-8\">\n      <form novalidate name=\"model.myform\">\n        <div class =\"form-group\">\n          <label for=\"recipe-title\">Recipe Title</label>\n          <input type=\"text\" class=\"form-control\"\n                 name=\"name\" id=\"recipe-title\"\n                 placeholder=\"Title\" required\n                 [(ngModel)]= \"recipe.title\">\n\n        </div>\n        <div class =\"form-group\">\n          <label for=\"recipe-description\">Recipe Description</label>\n          <textarea id=\"recipe-description\" name= \"description\" required\n                    class=\"form-control\" rows=\"5\" placeholder=\"Description\"\n                    [(ngModel)]=\"recipe.description\"></textarea>\n        </div>\n        <div class =\"form-group\">\n          <label for=\"ingredients\">Ingredients</label>\n          <textarea id=\"ingredients\" name= \"ingredients\" required\n                    class=\"form-control\" rows=\"5\" placeholder=\"add one per line\"\n                    [(ngModel)]=\"recipe.ingredients\"></textarea>\n        </div>\n        <div class =\"form-group\">\n          <label for=\"directions\">Directions</label>\n          <textarea id=\"directions\" name= \"directions\" required\n                    class=\"form-control\" rows=\"5\" placeholder=\"add one step per line\"\n                    [(ngModel)]=\"recipe.direction\"></textarea>\n        </div>\n      </form>\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteRecipe()\">Delete</button>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/project/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/recipes/edit-chef-recipe/edit-chef-recipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditChefRecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_recipe_service_client__ = __webpack_require__("./src/app/services/project/recipe.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditChefRecipeComponent = /** @class */ (function () {
    function EditChefRecipeComponent(activatedRoute, recipeService, router) {
        this.activatedRoute = activatedRoute;
        this.recipeService = recipeService;
        this.router = router;
    }
    EditChefRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.recipeId = params['recipeId'];
            _this.userId = params['userId'];
            _this.recipeService.findRecipeById(_this.recipeId)
                .subscribe(function (res) {
                _this.recipe = res;
                console.log(_this.recipe);
            });
        });
    };
    EditChefRecipeComponent.prototype.saveRecipe = function () {
        var _this = this;
        this.updatedRecipe = {
            _id: this.recipe._id,
            preptime: this.recipe.preptime,
            cooktime: this.recipe.cooktime,
            servings: this.recipe.servings,
            title: this.recipe.title,
            description: this.recipe.description,
            ingredients: this.recipe.ingredients,
            direction: this.recipe.direction
        };
        this.recipeService.updateRecipe(this.recipeId, this.updatedRecipe)
            .subscribe(function (res) {
            _this.recipe = res;
        });
        this.router.navigate(['/project/profile/', this.userId, 'recipe']);
    };
    EditChefRecipeComponent.prototype.deleteRecipe = function () {
        this.recipeService.deleteRecipe(this.recipeId).
            subscribe(function (res) {
            console.log(res);
        });
        this.router.navigate(['/project/profile/', this.userId, 'recipe']);
    };
    EditChefRecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-chef-recipe',
            template: __webpack_require__("./src/app/components/recipes/edit-chef-recipe/edit-chef-recipe.component.html"),
            styles: [__webpack_require__("./src/app/components/recipes/edit-chef-recipe/edit-chef-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_project_recipe_service_client__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditChefRecipeComponent);
    return EditChefRecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/recipe-list/recipe-list.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/recipes/recipe-list/recipe-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid row\">\n    <div class=\"cl-text-black navbar-text pull-left\">\n      <a routerLink=\"/project/profile/{{userId}}\" class=\"cl-text-black\">\n        <span class=\"glyphicon glyphicon-chevron-left cl-text-black\"></span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-black cl-text-bold\">\n      Recipes\n    </span>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding-bottom cl-container-padding\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <li *ngFor = \"let recipe of recipes\" class=\"list-group-item li-no-border\">\n        <a *ngIf=\"!userViewOnly && currUser.usertype=='chef'\"\n           routerLink=\"/project/profile/{{userId}}/recipe/{{recipe._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        <div *ngIf=\"!userViewOnly\">\n        <a routerLink=\"/project/profile/{{userId}}/recipe/{{recipe._id}}/view\">\n          {{recipe.title}}\n        </a></div>\n        <div *ngIf=\"userViewOnly\">\n          <a routerLink=\"/project/profile/{{recipe._id}}/view\">\n            {{recipe.title}}\n          </a></div>\n      </li>\n    </ul>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/project/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/recipes/recipe-list/recipe-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_recipe_service_client__ = __webpack_require__("./src/app/services/project/recipe.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(projUserService, activatedRoute, recipeService, location) {
        this.projUserService = projUserService;
        this.activatedRoute = activatedRoute;
        this.recipeService = recipeService;
        this.location = location;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.chefId = params['chefId'];
            console.log(_this.chefId);
            if (_this.chefId === undefined) {
                _this.userViewOnly = false;
            }
            else {
                _this.userViewOnly = true;
            }
            console.log(_this.userViewOnly);
            if (!_this.userViewOnly) {
                _this.projUserService.findUserById(_this.userId).subscribe(function (resUser) {
                    _this.currUser = resUser;
                    console.log(_this.currUser);
                    if (_this.currUser.usertype === 'chef') {
                        _this.recipeService.findAllRecipesForUser(_this.userId)
                            .subscribe(function (allrecipes) {
                            _this.recipes = allrecipes;
                            console.log(_this.recipes);
                        });
                    }
                    else {
                        _this.recipes = _this.currUser.recipes;
                    }
                });
            }
            else {
                _this.recipeService.findAllRecipesForUser(_this.chefId)
                    .subscribe(function (recipelist) {
                    _this.recipes = recipelist;
                });
            }
        });
    };
    RecipeListComponent.prototype.goBack = function () {
        this.location.back();
    };
    RecipeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipe-list',
            template: __webpack_require__("./src/app/components/recipes/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__("./src/app/components/recipes/recipe-list/recipe-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_projuser_service_client__["a" /* ProjUserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_recipe_service_client__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/search-yummly-recipes/search-yummly-recipes.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/search-yummly-recipes/search-yummly-recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid row\">\n    <div class=\"cl-text-black navbar-text pull-left\">\n      <a routerLink=\"/project/profile/{{userId}}\" class=\"cl-text-black\">\n        <span class=\"glyphicon glyphicon-chevron-left cl-text-black\"></span>\n      </a>\n    </div>\n    <span class=\"navbar-brand cl-text-black cl-text-bold\">\n      Yummly Recipes\n    </span>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding-bottom cl-container-padding\">\n    <form novalidate name=\"model.myform\">\n      <div class =\"form-group\">\n        <label>Search Recipes<p>(Click on each image to view details)</p></label>\n\n        <div class = \"input-group\">\n          <input name=\"searchbox\" [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\"><br>\n          <span class=\"input-group-btn\">\n              <a (click)=\"searchRecipes()\" class=\"btn btn-default\" type=\"button\">\n                <span class=\"glyphicon glyphicon-search\" ></span>\n              </a>\n            </span>\n        </div><br>\n\n\n        <div class=\"row\">\n          <div *ngFor=\"let match of matches\" class=\"col-xs-4\">\n            <!--<img (click)=\"selectPhoto(pic)\" width=\"100%\"-->\n            <!--[src]=\"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>-->\n            <div>\n              <img width=\"80%\" (click)=\"showRecipeDetails(match)\" src={{match.smallImageUrls}}/>\n            <div *ngIf=\"showDiv && match === selectedMatch\">\n              <div class =\"form-group\">\n                <label>{{match.recipeName}}</label><br>\n                  <!--<label for=\"recipe-title\">Recipe Title</label>-->\n                <!--<p id=\"recipe-title\">{{selectedMatch.sourceDisplayName}}</p><br>-->\n                <div>\n                  <label for=\"cook-time\">Total Cook Time (in seconds)</label><br>\n                  <p id=\"cook-time\">{{selectedMatch.totalTimeInSeconds}}</p></div><br>\n\n                <div>\n                  <label for=\"ingredients\">Ingredients</label>\n                  <p id=\"ingredients\">{{selectedMatch.ingredients}}</p></div><br>\n\n                <div>\n                  <label for=\"rating\">Rating</label>\n                  <p id=\"rating\">{{selectedMatch.rating}}</p></div><br>\n              </div>\n            </div>\n            </div>\n            <br>\n          </div><br>\n        </div>\n      </div>\n    </form>\n  </div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/project/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/recipes/search-yummly-recipes/search-yummly-recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchYummlyRecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_food_service_client__ = __webpack_require__("./src/app/services/food.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchYummlyRecipesComponent = /** @class */ (function () {
    function SearchYummlyRecipesComponent(foodService, projUserService, activatedRoute) {
        this.foodService = foodService;
        this.projUserService = projUserService;
        this.activatedRoute = activatedRoute;
    }
    SearchYummlyRecipesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showDiv = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
    };
    SearchYummlyRecipesComponent.prototype.searchRecipes = function () {
        var _this = this;
        this.foodService.getIngredientList(this.searchText)
            .subscribe(function (res) {
            // console.log(res);
            var val = res._body;
            val = JSON.parse(val);
            console.log(val);
            console.log(typeof (val));
            _this.matches = val.matches;
            console.log(_this.matches[0].recipeName);
        });
    };
    SearchYummlyRecipesComponent.prototype.showRecipeDetails = function (match) {
        this.showDiv = !this.showDiv;
        this.selectedMatch = match;
    };
    SearchYummlyRecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-yummly-recipes',
            template: __webpack_require__("./src/app/components/recipes/search-yummly-recipes/search-yummly-recipes.component.html"),
            styles: [__webpack_require__("./src/app/components/recipes/search-yummly-recipes/search-yummly-recipes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_food_service_client__["a" /* FoodService */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_projuser_service_client__["a" /* ProjUserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SearchYummlyRecipesComponent);
    return SearchYummlyRecipesComponent;
}());



/***/ }),

/***/ "./src/app/components/recipes/view-recipe/view-recipe.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipes/view-recipe/view-recipe.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid row\">\n    <div class=\"cl-text-black navbar-text pull-left\">\n      <a (click)=\"goBack()\" class=\"cl-text-black\">\n        <span class=\"glyphicon glyphicon-chevron-left cl-text-black\"></span>\n      </a>\n      <span class=\"cl-text-black\">View Recipe</span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding cl-container-padding-bottom\">\n  <div class=\"col-xs-4\">\n        <div class =\"form-group\">\n          <div>\n          <label for=\"prep-time\">Prep Time</label><br>\n            <p id=\"prep-time\">{{recipe.preptime}}</p><br>\n          </div><br>\n\n          <div>\n          <label for=\"cook-time\">Cook Time</label><br>\n            <p id=\"cook-time\">{{recipe.cooktime}}</p></div><br>\n\n          <div>\n          <label for=\"servings\">Number of Servings</label>\n            <p id=\"servings\">{{recipe.servings}}</p></div><br>\n        </div>\n  </div>\n    <!--<div class=\"verticle-line hidden-xs\" style=\"padding-top: 0px\"></div>-->\n  <div class=\"col-xs-8\">\n        <div class =\"form-group\">\n          <p>\n          <label for=\"recipe-title\">Recipe Title</label>\n          <p id=\"recipe-title\">{{recipe.title}}</p><br>\n\n          <div>\n          <label for=\"recipe-description\">Recipe Description</label>\n            <p id=\"recipe-description\">{{recipe.description}}</p></div><br>\n\n          <div>\n          <label for=\"ingredients\">Ingredients</label>\n            <p id=\"ingredients\">{{recipe.ingredients}}</p></div><br>\n\n          <div>\n          <label for=\"directions\">Directions</label>\n            <p id=\"directions\">{{recipe.direction}}</p></div><br>\n        </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text cl-icon-padding\">\n      <a routerLink=\"/project/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user cl-text-black\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/recipes/view-recipe/view-recipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewRecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_recipe_service_client__ = __webpack_require__("./src/app/services/project/recipe.service.client.ts");
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




var ViewRecipeComponent = /** @class */ (function () {
    function ViewRecipeComponent(recipeService, activatedRoute, location) {
        this.recipeService = recipeService;
        this.activatedRoute = activatedRoute;
        this.location = location;
    }
    ViewRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.recipeId = params['recipeId'];
            _this.userId = params['userId'];
        });
        this.recipeService.findRecipeById(this.recipeId)
            .subscribe(function (res) {
            console.log(res);
            _this.recipe = res;
        });
    };
    ViewRecipeComponent.prototype.goBack = function () {
        this.location.back();
    };
    ViewRecipeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-recipe',
            template: __webpack_require__("./src/app/components/recipes/view-recipe/view-recipe.component.html"),
            styles: [__webpack_require__("./src/app/components/recipes/view-recipe/view-recipe.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_recipe_service_client__["a" /* RecipeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], ViewRecipeComponent);
    return ViewRecipeComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n\n<div class='conatiner'>\n\n<form (ngSubmit) = \"loginUser()\" #f=\"ngForm\">\n<label>Username</label><br>\n<input name=\"username\" [(ngModel)]=\"username\" required placeholder=\"username\" >\n<br><br/>\n<label>Password</label><br>\n<input type=\"password\" required [(ngModel)]=\"password\" placeholder=\"password\" name=\"password\">\n<br>\n<br>\n<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n  <!--<button class=\"fa fa-facebook btn btn-primary\">-->\n    <!--<a href=\"{{baseUrl}}/auth/facebook\"></a>Facebook</button>-->\n</form><br>\n\n  <a href=\"{{baseUrl}}/auth/facebook\" class=\"btn btn-primary\">\n    <span class=\"fa fa-facebook\"></span>\n    Facebook\n  </a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
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
    function LoginComponent(userService, sharedService, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.userService.login(this.username, this.password).subscribe(function (user) {
            console.log('login component');
            if (user) {
                console.log(user);
                // console.log(' ');
                console.log(user._id);
                _this.sharedService.user = user;
                _this.errorFlag = false;
                _this.currUser = user;
                _this.router.navigate(['/profile', _this.currUser._id]);
            }
        }, function (error) {
            _this.errorFlag = true;
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].baseUrl;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "/*.cl-text-white{*/\r\n  /*color: #fff;*/\r\n  /*}*/\r\n  /*.cl-text-black{*/\r\n  /*color: #000000;*/\r\n  /*}*/\r\n  /*.cl-highlight-text-blue{*/\r\n  /*color: aqua;*/\r\n  /*}*/\r\n  /*.cl-container-padding {*/\r\n  /*padding-top: 80px;*/\r\n  /*padding-left: 10px;*/\r\n  /*padding-right: 10px;*/\r\n  /*}*/\r\n  /*.cl-container-padding-bottom {*/\r\n  /*padding-bottom: 100px;*/\r\n  /*padding-left: 10px;*/\r\n  /*padding-right: 10px;*/\r\n  /*}*/\r\n  /*.cl-padding-websites-left{*/\r\n  /*padding-left: 47px;*/\r\n  /*}*/\r\n  /*.cl-icon-padding{*/\r\n  /*padding-left: 10px;*/\r\n  /*padding-right: 10px;*/\r\n  /*}*/\r\n  /*.cl-text-grey{*/\r\n  /*color:grey;*/\r\n  /*}*/\r\n  /*.verticle-line{*/\r\n  /*border-right: solid thin lightgrey;*/\r\n  /*height:84%;*/\r\n  /*margin-left:32%;*/\r\n  /*position: absolute;*/\r\n  /*}*/\r\n  /*.cl-plus-padding-left{*/\r\n  /*padding-left: 320px;*/\r\n  /*}*/\r\n  /*.cl-text-bold{*/\r\n  /*font-weight: bolder;*/\r\n  /*}*/\r\n  /*!*body {*!*/\r\n  /*!*padding-top: 70px;*!*/\r\n  /*!*padding-bottom: 10px;*!*/\r\n  /*!*}*!*/\r\n  /*.cl-text-blue{*/\r\n  /*color: dodgerblue;*/\r\n  /*}*/\r\n  /*.li-no-border{*/\r\n  /*border: none;*/\r\n  /*}*/\r\n  /*.cl-widget-images{*/\r\n  /*display: inline;*/\r\n  /*width: 85%;*/\r\n  /*z-index: 100;*/\r\n  /*position: relative;*/\r\n  /*}*/\r\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary\">\n  <div class=\"container-fluid\">\n    <div class=\"cl-text-white navbar-text pull-left\">\n    <a routerLink=\"/login\" class=\"cl-text-white\">\n      <span class=\"glyphicon glyphicon-chevron-left cl-text-white\"></span>\n    </a>\n    </div>\n    <span class=\"navbar-brand cl-text-white cl-text-bold\">\n      Profile\n    </span>\n  </div>\n</nav>\n\n<div class=\"container cl-container-padding cl-container-padding-bottom\">\n  <form>\n    <label>Username</label>\n    <input type=\"text\" name=\"username\" title=\"name\" class = \"form-control form-fixer input-lg\" [(ngModel)]=\"user.username\"><br>\n    <label>FirstName</label>\n    <input type=\"text\" name=\"first name\" title=\"firstname\" class = \"form-control form-fixer input-lg\" [(ngModel)]=\"user.firstName\"><br>\n    <label>LastName</label>\n    <input type=\"text\" name=\"last name\" title=\"lastname\" class = \"form-control form-fixer input-lg\" [(ngModel)]=\"user.lastName\"><br>\n  </form>\n\n  <a routerLink=\"/profile/{{userId}}/website\">\n  <button type=\"button\" class=\"btn btn-primary btn-block\">Websites</button>\n  </a>\n  <a (click)=\"updateUser()\" class=\"btn btn-primary btn-block\">Update</a>\n  <a routerLink=\"/login\" (click)=\"deleteUser()\" class=\"btn btn-danger btn-block\">Delete</a>\n  <a routerLink=\"/login\">\n  <button type=\"button\" class=\"btn btn-secondary btn-block\">Logout</button>\n  </a>\n\n</div>\n<nav class=\"navbar navbar-fixed-bottom bg-primary\">\n</nav>\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("./src/app/models/user.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
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
    function ProfileComponent(userService, activatedRoute, sharedService, router) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showProfile = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            console.log(_this.userId);
            _this.user = _this.sharedService.user;
            //  this.userService.findUserById(this.userId).subscribe((userFromServer) => {
            //    this.user = userFromServer;
            //    console.log(this.user);
            //    console.log(this.user.username);
            //    this.username = this.user.username;
            //    console.log(this.user.username);
            //    this.firstname = this.user.firstName;
            //    this.lastname = this.user.lastName;
            //    this.password = this.user.password;
            // });
        });
    };
    ProfileComponent.prototype.displayProfile = function () {
        this.showProfile = !this.showProfile;
    };
    ProfileComponent.prototype.deleteUser = function () {
        this.userService.deleteUser(this.userId).subscribe(function (something) {
            console.log(something);
        });
    };
    ProfileComponent.prototype.logoutUser = function () {
        var _this = this;
        this.userService.logout().subscribe(function (data) { return _this.router.navigate(['/login']); });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.updatedUser = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */](this.userId, this.user.username, this.user.password, this.user.firstName, this.user.lastName);
        var updatedUser = {
            _id: this.user['_id'],
            username: this.username,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
        };
        return this.userService.updateUser(this.userId, updatedUser)
            .subscribe(function (newuser) {
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
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */],
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

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n\n  <div *ngIf=\"error\"\n       class=\"alert alert-danger\">\n    {{error}}\n  </div>\n\n\n  <form (ngSubmit)=\"addRegisteredUser()\" #f=\"ngForm\">\n\n    <input type=\"text\"\n           class = \"form-control input-lg\"\n           name=\"firstname\"\n           [(ngModel)]=\"firstname\"\n           placeholder=\"firstname\"><br>\n\n    <input type=\"text\"\n           class = \"form-control input-lg\"\n           name=\"lastname\"\n           [(ngModel)]=\"lastname\"\n           placeholder=\"lastname\"><br>\n\n    <input type=\"text\"\n           class = \"form-control input-lg\"\n           name=\"username\"\n           [(ngModel)]=\"username\"\n           placeholder=\"username\"\n           #name=\"ngModel\"/><br>\n\n    <span class=\"help-block\" *ngIf=\"!name.valid && name.touched\">*Please enter username!</span>\n\n    <input type=\"password\"\n           class = \"form-control input-lg\"\n           name=\"password\"\n           [(ngModel)]=\"password\"\n           placeholder=\"password\"\n           #pass=\"ngModel\"/><br>\n\n    <span class=\"help-block\" *ngIf=\"!pass.valid && pass.touched\">*Please enter password!</span>\n\n    <input\n      name=\"vpassword\"\n      placeholder=\"verify password\"\n      type=\"password\"\n      class=\"form-control\"\n      ngModel\n      required\n      #vpass=\"ngModel\"\n    />\n    <span class=\"help-block\" *ngIf=\"!vpass.valid && vpass.touched\">*Please enter password again!</span>\n\n    <button class=\"btn btn-primary btn-block\"\n            type=\"submit\"\n    [disabled]=\"!f.valid\">Register</button><br>\n\n    <a routerLink=\"/\">\n    <button type=\"button\" class=\"btn btn-danger btn-block\">Cancel</button>\n    </a>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.addRegisteredUser = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.vpassword = this.registerForm.value.vpassword;
        if (this.password === this.vpassword) {
            this.userService.register(this.username, this.password)
                .subscribe(function (data) {
                console.log(data);
                _this.user = data;
                _this.router.navigate(['/profile', _this.user._id]);
            }, function (error) {
                console.log(error);
                _this.error = error._body;
            });
        }
        else {
            this.error = 'passwords do not match!';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
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

/***/ "./src/app/components/webdev-menu/webdev-menu.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/webdev-menu/webdev-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container cl-container-padding\">\n  <a (click)=\"toggleAssignmentLogin()\">Assignment</a>\n  <a (click)=\"toggleProjectLogin()\">Project</a>\n  <div *ngIf=\"showAssginmentLogin\" id=\"login-assignment\">\n    <a routerLink=\"/login\">Login</a>\n    <a routerLink=\"/register\">Register</a>\n  </div>\n  <div *ngIf=\"showProjectLogin\" id=\"project-login\">\n    <a routerLink=\"/project\">ProjectLogin</a><br>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/webdev-menu/webdev-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebdevMenuComponent; });
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

var WebdevMenuComponent = /** @class */ (function () {
    function WebdevMenuComponent() {
    }
    WebdevMenuComponent.prototype.ngOnInit = function () {
        this.showAssginmentLogin = false;
        this.showProjectLogin = false;
    };
    WebdevMenuComponent.prototype.toggleAssignmentLogin = function () {
        this.showAssginmentLogin = !this.showAssginmentLogin;
    };
    WebdevMenuComponent.prototype.toggleProjectLogin = function () {
        this.showProjectLogin = !this.showProjectLogin;
    };
    WebdevMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-webdev-menu',
            template: __webpack_require__("./src/app/components/webdev-menu/webdev-menu.component.html"),
            styles: [__webpack_require__("./src/app/components/webdev-menu/webdev-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WebdevMenuComponent);
    return WebdevMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".cl-text-white{\r\n  color: #fff;\r\n}\r\n\r\n.cl-text-black{\r\n  color: #000000;\r\n}\r\n\r\n.cl-highlight-text-blue{\r\n  color: aqua;\r\n}\r\n\r\n.cl-container-padding {\r\n  padding-top: 80px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-container-padding-bottom {\r\n  padding-bottom: 100px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n\r\n.cl-padding-websites-left{\r\n  padding-left: 47px;\r\n}\r\n\r\n.cl-icon-padding{\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n\r\n}\r\n\r\n.cl-text-grey{\r\n  color:grey;\r\n}\r\n\r\n.verticle-line{\r\n  border-right: solid thin lightgrey;\r\n  height:84%;\r\n  margin-left:32%;\r\n  position: absolute;\r\n}\r\n\r\n.cl-plus-padding-left{\r\n  padding-left: 320px;\r\n}\r\n\r\n.cl-text-bold{\r\n  font-weight: bolder;\r\n}\r\n\r\nbody {\r\n  padding-top: 70px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.cl-text-blue{\r\n  color: dodgerblue;\r\n}\r\n\r\n.li-no-border{\r\n  border: none;\r\n}\r\n\r\n.cl-widget-images{\r\n  display: inline;\r\n  width: 85%;\r\n  z-index: 100;\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary\">\n  <div class=\"row\">\n    <div class=\"col-xs-4 hidden-xs\">\n      <div class=\"container-fluid\">\n        <a routerLink=\"/profile/{{userId}}/website\">\n          <span class=\"glyphicon glyphicon-chevron-left navbar-text pull-left cl-text-white\">\n          </span>\n        </a>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Websites\n        </a>\n        <a routerLink=\"/profile/{{userId}}/website/new\" class=\"navbar-link navbar-text pull-right cl-text-white\" style=\"margin-left: 40%\">\n          <span class=\"glyphicon glyphicon-plus\"></span>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-xs-8\">\n      <div class=\"container-fluid\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Edit Website\n        </a>\n        <div class=\"navbar-text pull-right cl-text-white cl-icon-padding\">\n          <span class=\"glyphicon glyphicon-ok\" (click)=\"saveWebsiteDetails()\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding-bottom cl-container-padding\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <li *ngFor = \"let website of websites\" class=\"list-group-item li-no-border\">\n        <a routerLink=\"/profile/{{userId}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        <a routerLink=\"/profile/{{userId}}/website/{{website._id}}/page\">\n          {{website.name}}\n        </a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"verticle-line hidden-xs\" style=\"margin-top: 0\"></div>\n  <div class=\"col-xs-8\">\n    <div *ngIf=flag\n         class=\"alert alert-danger\">\n      {{error}}\n    </div>\n    <form novalidate name=\"model.myform\">\n      <div class =\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n\n        <input type=\"text\" class=\"form-control\"\n               name=\"wbesitename\"\n               [(ngModel)] = \"websiteName\"\n               id=\"website-name\"\n               placeholder=\"Name\"\n               required>\n        <span class=\"alert-class\"\n              *ngIf=flag>{{alert}}</span>\n      </div>\n\n      <div class =\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n\n        <textarea id=\"website-description\"\n                  class=\"form-control\"\n                  rows=\"5\"\n                  placeholder=\"Description\"\n                  name=\"websitedescription\"\n                  [(ngModel)]=\"websiteDescription\">\n        </textarea>\n      </div>\n    </form>\n    <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"deleteThisWebsite()\">Delete</button>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary\">\n  <div class=\"container-fluid row\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-text pull-right cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user cl-text-white\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__ = __webpack_require__("./src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
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
    function WebsiteEditComponent(websiteService, activatedRoute, router, sharedService) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.error = 'Enter the name of the website';
        this.alert = '* Enter the website name';
        this.user = this.sharedService.user;
        this.activatedRoute.params.subscribe(function (params) {
            // this.userId = params['userId'];
            _this.userId = _this.user._id;
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
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */]])
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

module.exports = "<nav class=\"navbar navbar-fixed-top bg-primary\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <div class=\"container-fluid\">\n      <p class=\"navbar-text pull-left\">\n        <a routerLink=\"/profile/{{userId}}/website\" class=\"navbar-link cl-text-white\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n      </p>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        Websites\n      </a>\n    </div>\n  </div>\n  <div class=\"col-xs-8\">\n    <div class=\"container-fluid\">\n      <p class=\"cl-text-white navbar-brand cl-text-bold\">\n        New Website\n      </p>\n      <a (click)=\"getWebsiteDetails()\" class=\"navbar-text pull-right cl-text-white\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group\">\n      <li *ngFor = \"let website of websites\" class=\"list-group-item li-no-border\">\n        <a routerLink=\"/profile/{{userId}}/website/{{website._id}}\">\n          <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n        </a>\n        <a routerLink=\"/profile/{{userId}}/website/{{website._id}}/page\">\n          {{website.name}}\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"verticle-line hidden-xs\" style=\"padding-top: 0px\"></div>\n\n  <div class=\"col-xs-8\">\n    <div *ngIf=flag\n         class=\"alert alert-danger\">\n      {{error}}\n    </div>\n    <form novalidate name=\"model.myform\">\n      <div class =\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input type=\"text\"\n               class=\"form-control\"\n               name=\"name\"\n               id=\"website-name\"\n               placeholder=\"Name\"\n               required\n               [(ngModel)]= \"websiteName\">\n        <span class=\"alert-class\"\n              *ngIf=flag>{{alert}}</span>\n      </div>\n      <div class =\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea id=\"website-description\" name= \"description\" required\n                  class=\"form-control\" rows=\"5\" placeholder=\"Description\"\n                  [(ngModel)]=\"websiteDescription\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom bg-primary\">\n  <div class=\"container-fluid row\">\n    <a routerLink=\"/profile/{{userId}}\" class=\"navbar-text pull-right cl-icon-padding\">\n      <span class=\"glyphicon glyphicon-user cl-text-white \"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
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
    function WebsiteNewComponent(websiteService, activatedRoute, sharedService, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.sharedService = sharedService;
        this.router = router;
        this.websiteName = ' ';
        this.websiteDescription = ' ';
        this.error = 'Enter the name of the website';
        this.alert = '* Enter the website name';
        this.flag = false;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.user = _this.sharedService.user;
            // this.userId = params['userId'];
            _this.userId = _this.user._id;
            _this.websiteService.findWebsitesByUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
                console.log(_this.websites);
            });
        });
    };
    WebsiteNewComponent.prototype.getWebsiteDetails = function () {
        var _this = this;
        if (this.websiteName === '') {
            this.flag = true;
        }
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* NgForm */])
    ], WebsiteNewComponent.prototype, "signupForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_shared_service__["a" /* SharedService */],
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-text pull-left\">\n      <a (click)=\"goBack()\">\n          <span class=\"glyphicon glyphicon-chevron-left cl-text-black\">\n          </span>\n      </a>\n    </div>\n    <span class = \"navbar-header navbar-brand thick pull-left\">\n       <b>Widget Edit</b>\n    </span>\n    <p class=\"navbar-text pull-right\">\n      <a (click) = \"updateWidget()\" class=\"navbar-link\">\n        <span class=\"glyphicon glyphicon-ok\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form novalidate name=\"myform\">\n    <div *ngIf=\"flag\"\n         class=\"alert alert-danger\">\n      {{error}}\n    </div>\n\n    <div class=\"form-group\" >\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"widgetName\" type=\"text\" class=\"form-control\" id=\"Name\"\n             name=\"widname\" placeholder=\"Name\" required>\n      <span class=\"alert-class\"\n            *ngIf=\"flag\">{{alert}}</span>\n    </div>\n    <!-- use with ngModel -->\n    <quill-editor [(ngModel)]=\"text\" name=\"myquill\"></quill-editor>\n  </form>\n  <p></p>\n\n  <a class=\"btn btn-danger btn-block\" (click)=\"deleteWidget()\">Delete</a>\n  <!--ng-click=\"model.deleteWidget(model.widget)\" -->\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-right\">\n      <a routerLink= \"/profile/{{userId}}\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </p>\n  </div>\n</nav>\n"

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
        if (this.widgetName === '') {
            this.flag = true;
        }
        else {
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
        }
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
        if (this.name === undefined) {
            this.flag = true;
        }
        else {
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
        }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'safe' }),
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

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(userService, router, projUserService) {
        this.userService = userService;
        this.router = router;
        this.projUserService = projUserService;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service_client__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__project_projuser_service_client__["a" /* ProjUserService */]])
    ], AuthGuardService);
    return AuthGuardService;
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/food.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodService; });
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


var FoodService = /** @class */ (function () {
    // Possible values are: dairy, egg, gluten, peanut, sesame, seafood, shellfish, soy, sulfite, tree nut, and wheat.
    function FoodService(http) {
        this.http = http;
        this.APPKEY = '2e76682876f7b5b9ccf2b29d144f2b2b';
        this.APPID = 'a5706053';
        this.items = [];
        // urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
        this.foodUrlBase = 'https://api.yummly.com/v1/api/recipes?_app_id=APPID&_app_key=APPKEY&q=PARAM';
    }
    FoodService.prototype.getIngredientList = function (foodTerm) {
        this.url = this.foodUrlBase
            .replace('APPID', this.APPID)
            .replace('APPKEY', this.APPKEY)
            .replace('PARAM', foodTerm);
        return this.http.get(this.url);
    };
    FoodService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], FoodService);
    return FoodService;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/proj-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_projuser_service_client__ = __webpack_require__("./src/app/services/project/projuser.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjAuthGuardService = /** @class */ (function () {
    function ProjAuthGuardService(router, projUserService) {
        this.router = router;
        this.projUserService = projUserService;
    }
    ProjAuthGuardService.prototype.canActivate = function () {
        return this.projUserService.loggedIn();
    };
    ProjAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__project_projuser_service_client__["a" /* ProjUserService */]])
    ], ProjAuthGuardService);
    return ProjAuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/project/projuser.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjUserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjUserService = /** @class */ (function () {
    function ProjUserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    ProjUserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        console.log('user service client login');
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/project/login', body, this.options)
            .map(function (res) {
            console.log('got response');
            console.log(res);
            return res.json();
        });
    };
    ProjUserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/project/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    ProjUserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/project/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== '0') {
                _this.sharedService.user = user; // setting user as global variable using shared service
                return true;
            }
            else {
                _this.router.navigate(['/project']);
                return false;
            }
        });
    };
    ProjUserService.prototype.register = function (user) {
        this.options.withCredentials = true;
        console.log('registering user');
        return this.http.post(this.baseUrl + '/api/project/register', user, this.options)
            .map(function (res) {
            console.log('user service client.ts after response');
            console.log(res);
            return res.json();
        });
    };
    ProjUserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl + '/api/project/user', user).map(function (response) {
            return response.json();
        });
    };
    ProjUserService.prototype.findUserByUsertype = function (userType) {
        console.log('client side usertype');
        return this.http.get(this.baseUrl + '/api/project/user?usertype=' + userType).map(function (response) {
            console.log('in project user client side');
            console.log(response);
            return response.json();
        });
    };
    ProjUserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/project/user/' + userId).map(function (response) {
            console.log('in project user client side');
            console.log(response);
            return response.json();
        });
    };
    ProjUserService.prototype.findUserByUsername = function (username) {
        return this.http.get(this.baseUrl + '/api/project/user?username=' + username).map(function (response) {
            return response.json();
        });
    };
    ProjUserService.prototype.findUserByCredentials = function (username, password) {
        console.log('client side project user' + username + ' password ' + password);
        return this.http.get(this.baseUrl + '/api/project/user?username=' + username + '&password=' + password).map(function (response) {
            console.log('after response');
            console.log(response);
            return response.json();
        });
    };
    ProjUserService.prototype.updateUser = function (userId, user) {
        return this.http.put(this.baseUrl + '/api/project/user/' + userId, user).map(function (response) {
            return response.json();
        });
    };
    ProjUserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/project/user/' + userId).map(function (response) {
            return response.json();
        });
    };
    ProjUserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]])
    ], ProjUserService);
    return ProjUserService;
}());



/***/ }),

/***/ "./src/app/services/project/recipe.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
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




var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    RecipeService.prototype.createRecipe = function (projUserId, recipe) {
        return this.http.post(this.baseUrl + '/api/project/' + projUserId + '/recipe', recipe).map(function (response) {
            return response.json();
        });
    };
    RecipeService.prototype.findAllRecipesForUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/project/' + userId + '/recipe').map(function (response) {
            return response.json();
        });
    };
    RecipeService.prototype.findRecipeById = function (recipeId) {
        return this.http.get(this.baseUrl + '/api/project/' + recipeId).map(function (response) {
            console.log(response);
            return response.json();
        });
    };
    RecipeService.prototype.updateRecipe = function (recipeId, recipe) {
        return this.http.put(this.baseUrl + '/api/project/' + recipeId, recipe).map(function (response) {
            return response.json();
        });
    };
    RecipeService.prototype.deleteRecipe = function (recipeId) {
        return this.http.delete(this.baseUrl + '/api/project/' + recipeId).map(function (response) {
            return response.json();
        });
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SharedService = /** @class */ (function () {
    function SharedService() {
        this.user = '';
    }
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SharedService);
    return SharedService;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("./src/app/services/shared.service.ts");
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
    function UserService(http, router, sharedService) {
        this.http = http;
        this.router = router;
        this.sharedService = sharedService;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
    }
    UserService.prototype.login = function (username, password) {
        this.options.withCredentials = true;
        console.log('user service client login');
        var body = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options)
            .map(function (res) {
            console.log('got response');
            console.log(res);
            return res.json();
        });
    };
    UserService.prototype.logout = function () {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map(function (res) {
            var data = res;
        });
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(function (res) {
            var user = res.json();
            if (user !== '0') {
                _this.sharedService.user = user; // setting user as global variable using shared service
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    UserService.prototype.register = function (username, password) {
        this.options.withCredentials = true;
        var user = {
            username: username,
            password: password
        };
        console.log('registering user');
        return this.http.post(this.baseUrl + '/api/register', user, this.options)
            .map(function (res) {
            console.log('user service client.ts after response');
            console.log(res);
            return res.json();
        });
    };
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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