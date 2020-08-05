import{BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CreateComponent } from './components/create/create.component';
import { DetailComponent } from './components/detail/detail.component';


const routes: Routes = [
  
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'jobs',
    component:JobsComponent
  },  
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'job/:id',
    component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,HttpClientModule,FormsModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }
