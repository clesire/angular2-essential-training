import { Component, Input } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  //input decorator
  //this lets angular know that we want it to support any 
  //property bindings placed on instances of the mw-media-item
  //elements where the property name is mediaItem
  @Input('mediaItemToWatch') mediaItem;

  onDelete() {
    console.log('deleted');
  }
}
