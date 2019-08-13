import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'propBinding',
  template: `
  <div>
    <img [src]="imageURL" id="img">
  </div>`,
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  imageURL = "./images/boston.png"
  

  constructor() { 
    
    setInterval( () => this.imageURL = "./images/cardinals.jpg", 10000)
  }

  ngOnInit() {
  }

}
