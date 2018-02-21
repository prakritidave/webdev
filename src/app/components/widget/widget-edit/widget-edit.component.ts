import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widgetId: String;
  userId: String;
  pageId: String;
  websiteId: String;
  currentWidget: Widget;

  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
        this.pageId = params['pageId'];
        this.widgetId = params['widgetId'];
        console.log('widgetId' + this.widgetId);
      }
    );
    this.currentWidget = this.widgetService.findWidgetById(this.widgetId);
    console.log('current widget' + this.currentWidget);
  }



}
