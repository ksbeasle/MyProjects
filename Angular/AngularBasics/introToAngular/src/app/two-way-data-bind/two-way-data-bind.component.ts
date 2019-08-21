import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'twoWay',
  template:`<div>
              <h2>Two way data binding:</h2>
              <p>Example for using two way data binding: when using some sort of form it is important
              to keep the data in the form in sync with the values inside the class</p>
              <p>Class -> Data Bind to View -> Event Bind to Class</p>

                
              <input [(ngModel)]="name" type="text"> {{ name }}

              <p>Data flows from the class to the text box (view), then from the view back to the class. As you
              type in the text box you can see the text appear and that is the view sending the data back to the class.</p>
            </div>`,
  styleUrls: ['./two-way-data-bind.component.css']
})
/* square brackets for property binding from the class to the view */
/* parenthesis for event binding for data flow from view to the class */
export class TwoWayDataBindComponent implements OnInit {

  public name = ""


  constructor() { }

  ngOnInit() {
  }

}
