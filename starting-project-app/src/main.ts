//import { bootstrapApplication } from '@angular/platform-browser';
//import { AppComponent } from './app/app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
//bootstrapApplication(AppComponent).catch((err) => console.error(err));
