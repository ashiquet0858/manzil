import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
