import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  widgetId: String;
  size: String;
  text: String;
  widget: Widget;
  pageId: String;
  userId: String;
  websiteId: String;
  newWidget: Widget;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.widgetId = params['widgetId'];
        console.log('widget id' + this.widgetId);
        this.userId = params['userId'];
        this.pageId = params['pageId'];
        this.websiteId = params['websiteId'];
      });

    if (this.widgetId !== undefined) {
      this.widget = this.widgetService.findWidgetById(this.widgetId);
      this.size = this.widget.size;
      this.text = this.widget.text;
    }

  }
// /profile/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget
// new Widget( '123', 'HEADER', '321', '2', 'GIZMODO' )

  createHeaderWidget() {
    this.newWidget = new Widget((Math.random() + 102) + '', 'HEADER', this.pageId, this.size, this.text);
    this.widgetService.createWidget(this.newWidget.pageId, this.newWidget);
    console.log('widget id' + this.newWidget._id);
    console.log('widget type' + this.newWidget.widgetType);
    console.log('widget page' + this.newWidget.pageId);
    console.log('widget size' + this.newWidget.size);
    console.log('widget text' + this.newWidget.text);
//    this.location.back();
  }

  updateHeaderWidget() {
    if (this.widgetId !== undefined) {
      this.widgetService.updateWidget(this.widgetId,
        new Widget(this.widgetId, 'HEADER', this.pageId, this.size, this.text));
      console.log('inside update');
      console.log('size ' + this.size + ' text ' + this.text);
    }else {
      this.createHeaderWidget();
      console.log('created new widget ');
    }
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    this.location.back();
  }
  goBack() {
    this.location.back();
  }
  deleteHeaderWidget() {
    this.widgetService.deleteWidget(this.widgetId);
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    this.location.back();
  }
}
