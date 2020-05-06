import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentNavbarComponent } from './component-navbar/component-navbar.component';
import { ComponentAboutComponent } from './component-about/component-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHomeComponent,
    ComponentNavbarComponent,
    ComponentAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
