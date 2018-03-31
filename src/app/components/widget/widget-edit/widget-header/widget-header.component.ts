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
  widget: any;
  pageId: String;
  userId: String;
  websiteId: String;
  newWidget: any;
  widgets: any [];

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
      this.widgetService.findWidgetById(this.widgetId).subscribe((widgetFound) => {
        this.widget = widgetFound;
        console.log(widgetFound);
        if (widgetFound) {
          this.size = widgetFound.size;
          this.text = widgetFound.text;
        }
      });
    }

  }
// /profile/{{userId}}/website/{{websiteId}}/page/{{page._id}}/widget
// new Widget( '123', 'HEADER', '321', '2', 'GIZMODO' )

  createHeaderWidget() {
    // this.newWidget = new Widget(Math.random() + 102, 'HEADER', this.pageId, this.size, this.text, '', ''  , 0 , ''  , '' , false)
    console.log('inside create header widget');
    const newWidget = {
      widgettype: 'Header',
      _page: this.pageId,
      text: this.text,
      size: this.size
    };
    this.widgetService.createWidget(this.pageId, newWidget).subscribe((widgetlist) => {
      console.log(widgetlist);
    });
  }

  updateHeaderWidget() {
    if (this.widgetId !== undefined) {
      // this.newWidget = new Widget(this.widgetId, 'HEADER', this.pageId, this.size, this.text, '', ''  , 0 , ''  , '' , false);
      const updateWidget = {
        _id: this.widgetId,
        widgettype: 'Header',
        _page: this.pageId,
        text: this.text,
        size: this.size
      };
      this.widgetService.updateWidget(this.widgetId, updateWidget).subscribe((widgetlist) => {
        this.widgets = widgetlist;
      });
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
    this.widgetService.deleteWidget(this.widgetId).subscribe((widgetlist) => {
      console.log(widgetlist);
    });
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    this.location.back();
  }
}
