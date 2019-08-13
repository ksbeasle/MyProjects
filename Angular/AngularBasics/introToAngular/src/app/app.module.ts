import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateExpressionComponent } from './template-expression/template-expression.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ComponentBindingComponent } from './component-binding/component-binding.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateExpressionComponent,
    PropertyBindingComponent,
    ComponentBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
