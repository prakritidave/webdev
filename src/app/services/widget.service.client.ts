import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {Http, RequestOptions, Response} from '@angular/http';
// import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Page} from '../models/page.model.client';

@Injectable()

export class WidgetService {
  widgets: Widget[] = [
    new Widget( '123', 'HEADER', '321', '2', 'GIZMODO' ),
    new Widget('671', 'HEADER', '321', '2', 'GIZMODO' ),
    new Widget('456', 'IMAGE', '321', '2', 'text', '100%', 'http://lorempixel.com/400/200/'),
    new Widget('789', 'HEADER', '321', '2', 'GIZMODO' ),
    new Widget('248', 'YOUTUBE', '321', '2', 'text', '100%', 'https://www.youtube.com/embed/R2zeoFYamDo' ),
  ];

  createWidget(pageId: String, widget: Widget) {
    widget.pageId = pageId;
    this.widgets.push(new Widget(widget._id, widget.widgetType, widget.pageId, widget.size, widget.text));
  }

  findWidgetsByPageId(pageId) {
    const resultSet = [];
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x].pageId === pageId) {
        resultSet.push(this.widgets[x]);
      }
    }
    return resultSet;
  }

  findWidgetById(widgetId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        return this.widgets[x];
      }
    }
  }

  updateWidget(widgetId, widget) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
        switch (this.widgets[x].widgetType) {
          case 'HEADER':
            this.widgets[x].text = widget.text;
            this.widgets[x].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[x].text = widget.text;
            this.widgets[x].url = widget.url;
            this.widgets[x].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[x].text = widget.text;
            this.widgets[x].url = widget.url;
            this.widgets[x].width = widget.width;
            return true;
        }
      }
    }
    return false;
  }

  deleteWidget(widgetId) {
    for (let x = 0; x < this.widgets.length; x++) {
      if (this.widgets[x]._id === widgetId) {
          this.widgets.splice(x, 1);
      }
    }
  }

}
