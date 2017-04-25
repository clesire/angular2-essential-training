import { Component } from '@angular/core';

//needed to build an Angular component
//add at least 2 meta data properties
//selector: what Angular uses to locate
//a custom HTML element & apply the component
@Component({
  selector: 'app',
  template: '<h1>My App</h1>'
})
export class AppComponent {}
