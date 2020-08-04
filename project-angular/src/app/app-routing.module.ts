import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { CreateComponent } from './components/create/create.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
