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

// new Widget('248', 'YOUTUBE', '321', '2', 'text', '100%', 'https://youtube.com/token' ),
  updateYouTubeWidget() {
    this.widgetService.updateWidget(this.widgetId,
      new Widget(this.widgetId, 'YOUTUBE', this.pageId, this.widget.size, this.text, this.width, this.url));
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    this.location.back();
  }

  goBack() {
    this.location.back();
  }

  deleteYouTubeWidget() {
    this.widgetService.deleteWidget(this.widgetId);
//    this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
    this.location.back();
  }

}
