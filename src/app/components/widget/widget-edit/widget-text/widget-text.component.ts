import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';
import { Location } from '@angular/common';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  flag = false; // setting error flag as false by default
  error: string;
  alert: string;
  websiteId: string;
  userId: String;
  pageId: string;
  widgetId: string;
  text: String;
  rows: Number;
  name: String;
  placeholder: String;
  formatted: Boolean;
  updatedWidget: any;
  newWidget: any;

  // widget = {placeholder: '', };
  widget: any;

  constructor(private widgetService: WidgetService, private router: Router,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    // initialize error and alert text
    this.error = 'Enter the required field';
    this.alert = '* Enter the required fields';

    // fetch ids from current url
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.widgetId = params['widgetId'];
          if (this.widgetId !== undefined) {
            this.widgetService.findWidgetById(this.widgetId).subscribe((widgetFound) => {
              this.widget = widgetFound;
              if (widgetFound) {
                this.rows = widgetFound.rows;
                this.text = widgetFound.text;
                this.name = widgetFound.name;
                this.placeholder = widgetFound.placeholder;
                this.formatted = widgetFound.formatted;
              }
            });
          }
          this.websiteId = params['websiteId'];
          this.userId = params['userId'];
          this.pageId = params['pageId'];
        }
      );

    // fetch widget values as created on widget-new component
    /*this.widgetService.findWidgetById(this.widgetId)
      .subscribe(
        (data: any) => this.widget = data,
        (error: any) => console.log(error)
      );*/
  }

  updateWidget() {
   // if name field is undefined then set error 'flag' to true making 'error' and 'alert' message visible
    if (this.name === undefined) {
        this.flag = true;
    } else {
      if (this.widgetId === undefined ) {
        this.createTextWidget();
      }else {
        // this.updatedWidget = new Widget(this.widgetId, this.widget.widgetType, this.pageId, '1', this.text, this.widget.width,
        //   this.widget.url, this.rows, this.name, this.placeholder, this.formatted);
        const updateWidget = {
          _id: this.widgetId,
          widgettype: 'Text',
          placeholder: this.placeholder,
          _page: this.pageId,
          rows: this.rows,
          text: this.text,
          formatted: this.formatted,
          name: this.name
        };
        this.widgetService.updateWidget(this.widgetId, updateWidget)
          .subscribe(
            (widgetUpdated) => {
              console.log(widgetUpdated);
              this.widget = widgetUpdated;
              this.goBack();
            });
      }
    }
  }

  createTextWidget() {
    // this.newWidget = new Widget( Math.random() + 201 + '', 'TEXT', this.pageId, '1', this.text, '100%',
    //   '', this.rows, this.name, this.placeholder, this.formatted);
    // console.log(this.newWidget);
    const newWidget = {
      widgettype: 'Text',
      _page: this.pageId,
      placeholder: this.placeholder,
      rows: this.rows,
      formatted: this.formatted,
      name: this.name
    };
    this.widgetService.createWidget(this.pageId, newWidget).subscribe((widgetlist) => {
      console.log(widgetlist);
      if (widgetlist.length !== 0 ) {
         this.goBack();
      }
    });
  }

  deleteWidget() {
    // call delete widget function from widget client service
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((widgetlist) => {
        console.log(widgetlist);
        this.goBack();
        });
  }

  goBack() {
    this.location.back();
  }

}
