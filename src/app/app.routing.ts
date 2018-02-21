import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

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


const appRoutes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: 'profile/:userId', component: ProfileComponent},
{path: 'profile/:userId/website', component: WebsiteListComponent},
{path: 'profile/:userId/website/new', component: WebsiteNewComponent},
{path: 'profile/:userId/website/:websiteId', component: WebsiteEditComponent},
{path: 'profile/:userId/website/:websiteId/page', component: PageListComponent},
{path: 'profile/:userId/website/:websiteId/page/new', component: PageNewComponent},
{path: 'profile/:userId/website/:websiteId/page/:pageId', component: PageEditComponent},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget', component: WidgetListComponent},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new', component: WidgetChooserComponent},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/:widgetId', component: WidgetEditComponent},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/image', component: WidgetImageComponent},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/header', component: WidgetHeaderComponent},
{path: 'profile/:userId/website/:websiteId/page/:pageId/widget/new/youtube', component: WidgetYoutubeComponent}];


export const routing = RouterModule.forRoot(appRoutes);
