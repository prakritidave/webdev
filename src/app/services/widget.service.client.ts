import {Injectable} from '@angular/core';
import {Widget} from '../models/widget.model.client';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {Page} from '../models/page.model.client';

@Injectable()
export class WidgetService {

  constructor(private http: Http) { }
  baseUrl = environment.baseUrl;

  createWidget(pageId, widget) {
    return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', widget).map((response: Response) => {
      console.log('inside create widget');
      console.log(response);
      return response.json();
    });
  }

  findWidgetsByPageId(pageId) {
    console.log('inside widget service client');
    return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget').map((response: Response) => {
      console.log('before response');
      console.log(response);
      return response.json();
    });
  }

  findWidgetById(widgetId) {
    return this.http.get(this.baseUrl + '/api/widget/' + widgetId).map((response: Response) => {
      return response.json();
    });
  }

  updateWidget(widgetId, widget) {
    return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget).map((response: Response) => {
      return response.json();
    });
  }

  deleteWidget(widgetId) {
    return this.http.delete(this.baseUrl + '/api/widget/' + widgetId).map((response: Response) => {
      return response.json();
    });
  }

  reorderWidgets(startIndex, endIndex, pageId) {
    console.log('widget client ');
    return this.http.put(this.baseUrl + '/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex, '').map((res: Response) => {
      console.log('widget client inside ');
      return res.json();
    });
  }

}
