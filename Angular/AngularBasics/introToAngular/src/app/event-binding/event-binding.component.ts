import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eventBinding',
  template:`<div>
              <h3>{{ name }}</h3>
              <h4>{{ info }}</h4>
              <button (click)="onClick($event)">Click Me</button>
            </div>`,
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public name = "Event Bind"
  public info = ""

  onClick(event){
    console.log(event)
    this.info = "This is an example of event binding, after the button click we displayed this text. Check console for more details."
  }


  constructor() { }

  ngOnInit() {
  }

}
