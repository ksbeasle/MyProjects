import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateExpressionComponent } from './template-expression/template-expression.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';




@NgModule({
  declarations: [
    AppComponent,
    TemplateExpressionComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
