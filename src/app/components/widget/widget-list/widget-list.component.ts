import {Component, OnInit} from '@angular/core';
import {Widget} from '../../../models/widget.model.client';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  userId: any;
  pageId: any;
  websiteId: any;
  widgets: any [];
  public url;
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer) {
  }

  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
        this.pageId = params['pageId'];
        // console.log('userId' + this.userId);
        // console.log('websiteId' + this.websiteId);
        // console.log('pageId' + this.pageId);
        this.widgetService.findWidgetsByPageId(this.pageId).subscribe((widgetlist: any[]) => {
          console.log(widgetlist);
          this.widgets = widgetlist;
        });
      }
    );
    /*console.log(this.widgets);
    this.len = this.widgets.length;
    for (let x = 0; x < this.widgets.length; x++) {
      console.log('widget id ' + this.widgets[x]._id);
      console.log('widget text ' + this.widgets[x].text);
      console.log('widget type ' + this.widgets[x].widgetType);
    }
    console.log('widgets' + this.widgets.length);*/
  }


  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (widgetlist) => {
          console.log('widget list component ');
          console.log(widgetlist);
          this.widgets = widgetlist;
        }
      );
  }
}

@Pipe({name: 'safe' })
export class SafePipeComponent implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

