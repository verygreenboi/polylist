import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPolylistModule } from '@codehaven/ngx-polylist';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPolylistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
