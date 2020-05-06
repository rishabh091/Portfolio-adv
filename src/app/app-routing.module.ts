import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';


const routes: Routes = [
  {
    path: '', component: ComponentHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
