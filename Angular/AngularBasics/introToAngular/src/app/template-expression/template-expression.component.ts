import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'templateExp',
  template:`
  <div>
    <h2>{{ message }}</h2>
    <h3>Here we will use setInterval() to show model changing the view here: {{ time }}</h3>
  </div>
  `,
  styleUrls:['./template-expression.component.css']
})
export class TemplateExpressionComponent implements OnInit {
   message = "This is one-way data binding using template expression. This value can only be changed from the model side or the variable is kept up to date from the view."
  time = 0
   constructor() {
    setInterval( () => this.time = Date.now(), 1000)
   }

  ngOnInit() {
  }

}
