import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {
  widgetId: String;
  width: String;
  url: String;
  text: String;
  widget: Widget;
  pageId: String;
  userId: String;
  websiteId: String;
  widgets: Widget[] = [];

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
        this.pageId = params['pageId'];
        console.log('userId' + this.userId);
        console.log('websiteId' + this.websiteId);
        console.log('pageId' + this.pageId);
      });
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
  }

}
