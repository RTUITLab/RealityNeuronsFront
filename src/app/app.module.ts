import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PageStartComponent } from './page-start/page-start.component';
import { PageStartTimelineComponent } from './page-start-timeline/page-start-timeline.component';
import { PageNameClassComponent } from './page-name-class/page-name-class.component';


const appRoutes: Routes =[
  { path: '', component: PageStartComponent},
  { path: 'name-class', component: PageNameClassComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageStartComponent,
    PageStartTimelineComponent,
    PageNameClassComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
