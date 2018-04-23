import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AuthGuardService} from './services/auth-guard.service';

import {LoginComponent} from './components/user/login/login.component';
import {RegisterComponent} from './components/user/register/register.component';
import {WebsiteListComponent} from './components/website/website-list/website-list.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {WebsiteNewComponent} from './components/website/website-new/website-new.component';
import {PageListComponent} from './components/page/page-list/page-list.component';
import {PageNewComponent} from './components/page/page-new/page-new.component';
import {PageEditComponent} from './components/page/page-edit/page-edit.component';
import {WidgetListComponent} from './components/widget/widget-list/widget-list.component';
import {WidgetChooserComponent} from './components/widget/widget-chooser/widget-chooser.component';
import {WidgetEditComponent} from './components/widget/widget-edit/widget-edit.component';
import {WidgetHeaderComponent} from './components/widget/widget-edit/widget-header/widget-header.component';
import {WidgetImageComponent} from './components/widget/widget-edit/widget-image/widget-image.component';
import {WidgetYoutubeComponent} from './components/widget/widget-edit/widget-youtube/widget-youtube.component';
import {WebsiteEditComponent} from './components/website/website-edit/website-edit.component';
import {WidgetHtmlComponent} from './components/widget/widget-edit/widget-html/widget-html.component';
import {WidgetTextComponent} from './components/widget/widget-edit/widget-text/widget-text.component';
import {FlickrImageSearchComponent} from './components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component';
import {HomeComponent} from './components/projUser/home/home.component';
import {RegisterProjUserComponent} from './components/projUser/register-proj-user/register-proj-user.component';
import {ProfileProjUserComponent} from './components/projUser/profile-proj-user/profile-proj-user.component';
import {RecipeListComponent} from './components/recipes/recipe-list/recipe-list.component';
import {AddChefRecipeComponent} from './components/recipes/add-recipe/add-chef-recipe/add-chef-recipe.component';
import {SearchYummlyRecipesComponent} from './components/recipes/search-yummly-recipes/search-yummly-recipes.component';
import {ViewRecipeComponent} from './components/recipes/view-recipe/view-recipe.component';
import {ChefListComponent} from './components/projUser/chef-list/chef-list.component';
import {EditChefRecipeComponent} from './components/recipes/edit-chef-recipe/edit-chef-recipe.component';
import {WebdevMenuComponent} from './components/webdev-menu/webdev-menu.component';
import {ProjAuthGuardService} from './services/proj-auth-guard.service';

// /profile/{{user._id}}/website/{{website._id}}/page
const appRoutes: Routes = [
{path: '', component: WebdevMenuComponent},
{path: 'project', component: HomeComponent},
{path: 'registerProjUser', component: RegisterProjUserComponent},
{path: 'project/profile/:userId', component: ProfileProjUserComponent, canActivate: [ProjAuthGuardService]},
{path: 'project/profile/:userId/recipe', component: RecipeListComponent, canActivate: [ProjAuthGuardService]},
{path: 'project/profile/:recipeId/view', component: ViewRecipeComponent, canActivate: [ProjAuthGuardService]},
{path: 'project/profile/:userId/recipe/new', component: AddChefRecipeComponent, canActivate: [ProjAuthGuardService]},
{path: 'project/profile/:userId/recipe/:recipeId', component: EditChefRecipeComponent, canActivate: [ProjAuthGuardService]},
{path: 'project/profile/:userId/recipe/:recipeId/view', component: ViewRecipeComponent, canActivate: [ProjAuthGuardService]},
{path: 'project/profile/:userId/:chefId/recipe', component: RecipeListComponent, canActivate: [ProjAuthGuardService]},
{path: 'project/profile/:userId/recipe/new/yummly', component: SearchYummlyRecipesComponent, canActivate: [ProjAuthGuardService]},
{path: 'project/profile/:userId/chefs', component: ChefListComponent, canActivate: [ProjAuthGuardService]},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website', component: WebsiteListComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/new', component: WebsiteNewComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId', component: WebsiteEditComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page', component: PageListComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/new', component: PageNewComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId', component: PageEditComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget', component: WidgetListComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new', component: WidgetChooserComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: WidgetEditComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/image',
  component: WidgetImageComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/flickr',
  component: FlickrImageSearchComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/header',
  component: WidgetHeaderComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/youtube',
  component: WidgetYoutubeComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/html',
  component: WidgetHtmlComponent, canActivate: [AuthGuardService]},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/text',
  component: WidgetTextComponent, canActivate: [AuthGuardService]}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
