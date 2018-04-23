import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import {Pipe} from '@angular/compiler/src/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Component} from '@angular/core';
import { QuillEditorModule } from 'ngx-quill-editor';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material';
import {MatFormFieldControl} from '@angular/material';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { RegisterComponent } from './components/user/register/register.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import {SafePipeComponent, WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import { WidgetHeaderComponent } from './components/widget/widget-edit/widget-header/widget-header.component';
import { WidgetImageComponent } from './components/widget/widget-edit/widget-image/widget-image.component';
import { WidgetYoutubeComponent } from './components/widget/widget-edit/widget-youtube/widget-youtube.component';

import { UserService } from './services/user.service.client';
import { WebsiteService } from './services/website.service.client';
import { PageService } from './services/page.service.client';
import { WidgetService } from './services/widget.service.client';
import {SortableDirective} from '../../assignment/directives/sortable.directive';
import { WidgetHtmlComponent } from './components/widget/widget-edit/widget-html/widget-html.component';
import { WidgetTextComponent } from './components/widget/widget-edit/widget-text/widget-text.component';
import { FlickrImageSearchComponent } from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {FlickrService} from './services/flickr.service.client';
import {SharedService} from './services/shared.service';
import {AuthGuardService} from './services/auth-guard.service';
import { HomeComponent } from './components/projUser/home/home.component';
import { RegisterProjUserComponent } from './components/projUser/register-proj-user/register-proj-user.component';
import { ProfileProjUserComponent } from './components/projUser/profile-proj-user/profile-proj-user.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { AddChefRecipeComponent } from './components/recipes/add-recipe/add-chef-recipe/add-chef-recipe.component';
import {FoodService} from './services/food.service.client';
import {ProjUserService} from './services/project/projuser.service.client';
import {RecipeService} from './services/project/recipe.service.client';
import { SearchYummlyRecipesComponent } from './components/recipes/search-yummly-recipes/search-yummly-recipes.component';
import { ViewRecipeComponent } from './components/recipes/view-recipe/view-recipe.component';
import { ChefListComponent } from './components/projUser/chef-list/chef-list.component';
import { EditChefRecipeComponent } from './components/recipes/edit-chef-recipe/edit-chef-recipe.component';
import { WebdevMenuComponent } from './components/webdev-menu/webdev-menu.component';
import {ProjAuthGuardService} from './services/proj-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    SortableDirective,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    WebsiteNewComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    PageNewComponent,
    PageEditComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    WidgetHeaderComponent,
    WidgetImageComponent,
    WidgetYoutubeComponent,
    SafePipeComponent,
    WidgetHtmlComponent,
    WidgetTextComponent,
    FlickrImageSearchComponent,
    HomeComponent,
    RegisterProjUserComponent,
    ProfileProjUserComponent,
    RecipeListComponent,
    AddChefRecipeComponent,
    SearchYummlyRecipesComponent,
    ViewRecipeComponent,
    ChefListComponent,
    EditChefRecipeComponent,
    WebdevMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    QuillEditorModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],

  providers: [UserService, WebsiteService, WidgetService, PageService, FlickrService, SharedService,
    AuthGuardService, FoodService, ProjUserService, RecipeService, ProjAuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
