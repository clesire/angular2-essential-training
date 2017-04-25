//trageting browser
//this function returns a platform object 
//that has a bootstrap module function on it
//used to bootstrap root module on the platform
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
