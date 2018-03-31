import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.model.client';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-widget-youtube',
  templateUrl: './widget-youtube.component.html',
  styleUrls: ['./widget-youtube.component.css']
})


export class WidgetYoutubeComponent implements OnInit {
  widgetId: String;
  width: String;
  url: String;
  text: String;
  widget: any;
  pageId: String;
  userId: String;
  websiteId: String;
  updatedWidget: any;

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
    this.widgetService.findWidgetById(this.widgetId).subscribe((widgetFound) => {
      this.widget = widgetFound;
      this.width = widgetFound.width;
      this.text = widgetFound.text;
      this.url = widgetFound.url;
    });
  }

// new Widget('248', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtube.com/token' ),
  updateYouTubeWidget() {
    // this.updatedWidget = new Widget(this.widgetId, 'YOUTUBE', this.pageId,
    //   this.widget.size, this.text, this.width, this.url, 0, '' , '' , false);
    const updateWidget = {
      _id: this.widgetId,
      widgettype: 'YouTube',
      size: this.widget.size,
      text: this.text,
      url: this.url,
      _page: this.pageId,
      width: this.width
    };
    this.widgetService.updateWidget(this.widgetId, updateWidget).subscribe((widget) => {
      this.updatedWidget = widget;
      this.location.back();
    });
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

  goBack() {
    this.location.back();
  }

  deleteYouTubeWidget() {
    this.widgetService.deleteWidget(this.widgetId).subscribe((widgets) => {
      this.location.back();
    });
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
  }

}
