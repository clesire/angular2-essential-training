import { Routes } from '@angular/router';

import { MediaItemFormComponent } from './media-item-form.component';
import { MediaItemListComponent } from './media-item-list.component';

const appRoutes: Routes = [
  { path: 'add', component: MediaItemFormComponent },
  //route for the media item list by medium type
  //route parameter can be specified with colon followed by a term
  //order matters
  { path: ':medium', component: MediaItemListComponent },
  //default route; path to empty string
  //redirect to existing route for the media item list component
  //redirectTo property expects a string for URL segment to redirect to
  //pathMatch: tells router that the path property will represent full match 
  //   not partial match
  { path: '', pathMatch: 'full', redirectTo: 'all' }
];
