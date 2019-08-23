import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateExpressionComponent } from './template-expression/template-expression.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { NgUsageComponent } from './ng-usage/ng-usage.component';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';





@NgModule({
  declarations: [
    AppComponent,
    TemplateExpressionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindComponent,
    NgUsageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule
  ],
  //services created go into the providers array
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
