import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { PhardhasComponent } from './phardhas/phardhas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopesComponent } from './topes/topes.component';
import { PantsComponent } from './pants/pants.component';
import { ChuridarComponent } from './churidar/churidar.component';
import { RunningComponent } from './running/running.component';
import { ShallComponent } from './shall/shall.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhardhasComponent,
    NavbarComponent,
    TopesComponent,
    PantsComponent,
    ChuridarComponent,
    RunningComponent,
    ShallComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
