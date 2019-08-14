import { Component } from '@angular/core';
 

@Component({
  selector: 'propBinding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  public isDisabled = true;

  enable(event: Event){
    console.log('enabled...', event)
    this.isDisabled = false
  }

  disable(event: Event){
    console.log('disabled...', event)
    this.isDisabled = true
  }

  constructor() { }

}
