import { Component, OnInit, Input } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'ngUsage',
  templateUrl: './ng-usage.component.html',
  styleUrls: ['./ng-usage.component.css']
})
export class NgUsageComponent implements OnInit {
  
  @Input('game') game: Game
  isCollapsed = true;
  constructor() { }

  toggleButton() {
    if(this.isCollapsed == true){
      this.isCollapsed = false
    }else{
      this.isCollapsed = true
    }
  }

  ngOnInit() {
    console.log("ngOnInit() called!")
    
    }

    ngOnChanges(){
      console.log("Input grabbed: changed")
    }
  }

  


