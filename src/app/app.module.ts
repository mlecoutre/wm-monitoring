import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { BreadcrumbComponentComponent } from './breadcrumb-component/breadcrumb-component.component';
import { PlatformsService } from './services/platforms.service';
import { FlowSelectorComponentComponent } from './flow-selector-component/flow-selector-component.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    BreadcrumbComponentComponent,
    FlowSelectorComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
