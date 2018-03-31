import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Location} from '@angular/common';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  error: string;
  alert: string;
  flag = false;
  widget: any;
  userId: String;
  widgetName: String;
  websiteId: string;
  pageId: string;
  widgetId: string;
  baseUrl: string;
  newWidget: any;
  text: String;
  updatedWidget: any;

  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    // initialize error and alert text
    this.error = 'Enter the name of the widget';
    this.alert = '* Enter the widget name';
    // fetch ids from current url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.websiteId = params['websiteId'];
          this.pageId = params['pageId'];
          this.widgetId = params['widgetId'];
        }
      );
    // fetching current widget based on widgetId
    if (this.widgetId !== undefined) {
      this.widgetService.findWidgetById(this.widgetId)
        .subscribe(
          (widgetFound) => {
            console.log(widgetFound);
            this.widget = widgetFound;
            this.widgetName = widgetFound.name;
            this.text = widgetFound.text;
            },
          (error: any) => console.log(error)
        );
    }
  }

  createWidget() {
/*
    this.newWidget = new Widget(Math.random() + 801 + '', 'HTML', this.pageId, '1',
      this.text, '100%', '', 0, this.widgetName, '', false);
*/
    const newWidget = {
      widgettype: 'HTML',
      name: this.widgetName,
      text: this.text,
      _page: this.pageId
    };
    this.widgetService.createWidget(this.pageId, newWidget).subscribe((widgetlist) => {
      console.log(widgetlist);
      this.goBack();
    });
  }

  updateWidget() {
    // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
  //  if (this.widget['name'] === '') {
    if (this.widgetName === '') {
      this.flag = true;
    } else {
      if (this.widgetId === undefined) {
        this.createWidget();
      }else {
        // this.updatedWidget = new Widget(this.widgetId, 'HTML', this.pageId, this.widget.size, this.text,
        //   this.widget.width, this.widget.url, this.widget.rows , this.widgetName, this.widget.placeholder, this.widget.formatted);
        const updateWidget = {
          _id: this.widgetId,
          name: this.widgetName,
          widgettype: 'HTML',
          _page: this.pageId,
          text: this.text
        };
        this.widgetService.updateWidget(this.widgetId, updateWidget)
          .subscribe(
            (data: any) => {
              console.log(data);
              this.goBack(); }
          ); }
    }
  }

  deleteWidget() {
    // call delete widget function from widget client service
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe(
        (data: any) =>
         this.goBack(),
        (error: any) => console.log(error)
      );
  }

  goBack() {
    this.location.back();
  }

}
