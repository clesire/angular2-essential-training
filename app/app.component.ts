import { Component } from '@angular/core';

// when Angular finds a match in the DOM for a componenet selector
// it will inject the componenet markup into the DOM element 
// that it found a match on
@Component({
  selector: 'mw-app',
  //template: `
  //  <h1>My App</h1>
  //  <p>extra paragraph</p>
  //`,
  templateUrl: 'app/app.component.html'
})
export class AppComponent {}
