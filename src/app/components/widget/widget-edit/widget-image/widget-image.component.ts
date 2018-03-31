import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  widgetId: String;
  width: String;
  size: String;
  url: String;
  text: String;
  widget: any;
  pageId: String;
  userId: String;
  websiteId: String;
  newWidget: any;
  updatedWidget: any;
  baseUrl: String;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;

    this.activatedRoute.params.subscribe(
    (params: any) => {
      this.widgetId = params['widgetId'];
      this.userId = params['userId'];
      this.pageId = params['pageId'];
      this.websiteId = params['websiteId'];
      if (this.widgetId !== undefined) {
        console.log('widgetId' + this.widgetId);
        this.widgetService.findWidgetById(this.widgetId).subscribe((widgetFound) => {
          this.widget = widgetFound;
          if (widgetFound) {
            this.width = widgetFound.width;
            this.text = widgetFound.text;
            this.url = widgetFound.url;
            this.size = widgetFound.size;
          }
        });
      }
      // else {
      //   this.widgetId = (Math.random() + 501) + '';
      //   console.log('widgetId' + this.widgetId);
      // }
    });
  }
// '456', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
// id, widgetType, pageId, size: String= '1',
//  text: String= 'text', width: String = '100%', url: String = 'url'

  createImageWidget() {
    // this.newWidget = new Widget((Math.random() + 501) + '', 'IMAGE',
    //   this.pageId, this.size, this.text, this.width, this.url, 0, '', '', false);
   const newWidget = {
     widgettype: 'Image',
     text: this.text,
     width: this.width,
     url: this.url,
     size: this.size,
     _page: this.pageId
   };
    this.widgetService.createWidget(this.pageId, newWidget).subscribe((widgetlist) => {
      if (widgetlist.length !== 0) {
         console.log(widgetlist);
      }
      this.goBack();
    });
  }

  updateImageWidget() {
    if (this.widgetId === undefined) {
          this.createImageWidget();
    }else {
     // this.updatedWidget = new Widget(this.widgetId, 'IMAGE', this.pageId, this.widget.size,
     //   this.text, this.width, this.url, 0, '', '', false);
      const updateWidget = {
        _id: this.widgetId,
        widgettype: 'Image',
        name: this.widget.name,
        _page: this.pageId,
        text: this.text,
        width: this.width,
        url: this.url,
        size: this.size
      };

      this.widgetService.updateWidget(this.widgetId, updateWidget).subscribe((widgetUpdate) => {
        console.log(widgetUpdate);
        this.location.back();
      });
    }
// this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
   }

  goBack() {
    this.location.back();
  }
// profile/:userId/website/:websiteId/page/:pageId/widget/flicker
  flickrNavigate() {
    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', 'new', 'flickr']);
  }
  deleteImageWidget() {
    this.widgetService.deleteWidget(this.widgetId).subscribe((widgetlist) => {
      console.log(widgetlist);
      this.location.back();
    });
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }
}
