import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-widget-image',
  templateUrl: './widget-image.component.html',
  styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
  widgetId: String;
  width: String;
  url: String;
  text: String;
  widget: Widget;
  pageId: String;
  userId: String;
  websiteId: String;


  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
    (params: any) => {
      this.widgetId = params['widgetId'];
      this.userId = params['userId'];
      this.pageId = params['pageId'];
      this.websiteId = params['websiteId'];
      console.log('widgetId' + this.widgetId);
    });
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.width = this.widget.width;
    this.text = this.widget.text;
    this.url = this.widget.url;
  }
// '456', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
// id, widgetType, pageId, size: String= '1',
//  text: String= 'text', width: String = '100%', url: String = 'url'

  updateImageWidget() {
    this.widgetService.updateWidget(this.widgetId,
      new Widget(this.widgetId, 'IMAGE', this.pageId, this.widget.size, this.text, this.width, this.url));
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    this.location.back();
  }

  goBack() {
    this.location.back();
  }

  deleteImageWidget() {
    this.widgetService.deleteWidget(this.widgetId);
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    this.location.back();
  }

}
