import { Component, OnInit } from '@angular/core';
import {FlickrService} from '../../../../../services/flickr.service.client';
import {WidgetService} from '../../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-flickr-image-search',
  templateUrl: './flickr-image-search.component.html',
  styleUrls: ['./flickr-image-search.component.css']
})
export class FlickrImageSearchComponent implements OnInit {

  websiteId: string;
  pageId: string;
  userId: string;
  widgetId: string;
  photos: [any];
  error: string;
  searchText: string;

constructor(private flickrService: FlickrService, private widgetService: WidgetService,
            private router: Router, private activatedRoute: ActivatedRoute) { }

ngOnInit() {
  this.activatedRoute.params.subscribe((params: any) => {
    this.userId = params['userId'];
    this.websiteId = params['websiteId'];
    this.pageId = params['pageId'];
    this.widgetId = params['widgetId'];
    console.log(this.widgetId);
  });
  }

  searchPhotos() {
  this.flickrService
    .searchPhotos(this.searchText)
    .subscribe((data: any) => {
      let val = data._body;
      val = val.replace('jsonFlickrApi(', '');
      val = val.substring(0, val.length - 1);
      val = JSON.parse(val);
      this.photos = val.photos;
    });
  }

  selectPhoto(photo) {
   let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
   url += '/' + photo.id + '_' + photo.secret + '_b.jpg';

    const widget = {
      _page : this.pageId,
      url: url,
      widgettype: 'Flickr'
    };
// profile/:userId/website/:websiteId/page/:pageId/widget
    if (this.widgetId === undefined) {
      this.widgetService
        .createWidget(this.pageId, widget)
        .subscribe((data: any) => {
          const result = data;
          console.log('flickr created');
          console.log(data);
          if (result) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
          }else {
            this.error = 'failed!';
          }
        });
    } else {
      const updateWidget = {
        _page : this.pageId,
        url: url,
        widgettype: 'Flickr'
      };
      this.widgetService
        .updateWidget(this.widgetId, updateWidget)
        .subscribe((data: any) => {
          const result = data;
          if (result) {
            this.router.navigate(['/profile', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
          }else {
            this.error = 'failed!';
          }
        });
    }

  }

}
