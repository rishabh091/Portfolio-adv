import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentProjectsComponent } from './component-projects/component-projects.component';


const routes: Routes = [
  {
    path: '', component: ComponentHomeComponent
  },
  {
    path: 'projects', component: ComponentProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
