// TS lets you import using 
//    -bare module name
//    -relative path

import { NgModule } from '@angular/core';
// BrowserModule
// making browser based app
// contains core directives, pipes and more for woking with the DOM
import { BrowserModule } from '@angular/platform-browser';
// no need for file extension (e.g. .ts) 
// due to the way the project is configured for 
// system js module loading
import { AppComponent } from './app.component';

// decorators
// expression that evaluates to a function
// that makes it possible to annotate and 
// modify classes at design timea

// NgModule decorator takes in metadata
// == some known properties to configure the class
// imports: used to bring in other Angular moduels needed
// declarations: used to make componenets, directives, and pipes
//    available to your modeul that don't come from other module
// bootstrap: used for a root module and let Angular know which
// component(s) will be starting point for the Bootstrap process
//    e.g. Angular will use the AppComponenet as a target for
//          bootstrapping the app
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})


// want to import it in another file
// need to provide support for usig the 
// module loading syntax
export class AppModule {}