import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'compBind',
  templateUrl: './component-binding.component.html',
  styleUrls: ['./component-binding.component.css']
})
export class ComponentBindingComponent {
  dataSource = "My source"
  constructor() { 
    setInterval( () => this.dataSource = "my s" + Date.now(), 1000)
  }

}

@Component({
  selector: 'child',
  template: `<h1>{{ data }}</h1>`,
  styleUrls: ['./component-binding.component.css']
})
export class Child {
data = "test"
  constructor() { }

}
