import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChuridarComponent } from './churidar/churidar.component';
import { HomeComponent } from './home/home.component';
import { PantsComponent } from './pants/pants.component';
import { PhardhasComponent } from './phardhas/phardhas.component';
import { RunningComponent } from './running/running.component';
import { ShallComponent } from './shall/shall.component';
import { TopesComponent } from './topes/topes.component';

const routes: Routes = [
  {path : '' ,pathMatch : 'full', redirectTo : '/home' , },
  // { path: '**', redirectTo: 'home'},
  {path:'home',component:HomeComponent},
  {path:'phardha',component:PhardhasComponent},
  {path:'tops',component:TopesComponent},
  {path:'pants',component:PantsComponent},
  {path:'churidhar',component:ChuridarComponent},
  {path:'running-material',component:RunningComponent},
  {path:'shall',component:ShallComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
