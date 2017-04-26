import { Component } from '@angular/core';
//bring in activated route from the angular router scoped package
import { ActivatedRoute } from '@angular/router';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'app/media-item-list.component.html',
  styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent {
  medium = '';
  mediaItems = [];
  paramsSubscription;

  constructor(
    private mediaItemService: MediaItemService,
    //activated route service has a properety named
    //params that is an observable
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //We subscribed to the params observable
    //unlike the HTTP response observable that was one and done
    //i.e. would cause unsubscribe as soon as it delivered a payload
    //this observable is not; up to you to unsubscribe
    //we wanna unsubscribe in this component because 
    //router outlet will be adding and removing this component as routes are changed
    //ngOnDestroy: component life cycle hook
    //but first get a handle to this subscription:paramsSubscription
    this.paramsSubscription = this.activatedRoute.params
      .subscribe(params => {

        //normalization to the medium
        let medium = params['medium'];
        //to avoid from mock API treating it as a medium type
        if(medium.toLowerCase() === 'all') {
          medium = '';
        }
        this.getMediaItems(medium);
      });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem)
      .subscribe(() => {
        this.getMediaItems(this.medium);
      });
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}
