import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { ComponentNavbarComponent } from './component-navbar/component-navbar.component';
import { ComponentAboutComponent } from './component-about/component-about.component';
import { ComponentExpertiseComponent } from './component-expertise/component-expertise.component';
import { ComponentContactComponent } from './component-contact/component-contact.component';
import { ComponentFooterComponent } from './component-footer/component-footer.component';
import { ComponentProjectsComponent } from './component-projects/component-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentHomeComponent,
    ComponentNavbarComponent,
    ComponentAboutComponent,
    ComponentExpertiseComponent,
    ComponentContactComponent,
    ComponentFooterComponent,
    ComponentProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
