import { Component } from '@angular/core';
import { Game } from './ng-usage/game.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  game : Game
  
  constructor() {
    this.game = new Game();
    this.game.title = "Witcher 3";
    this.game.esrb = 'M';
    this.game.genre = "RPG";
    this.game.rating = 10;
    this.game.arr = ['1','2','3'];
    this.game.emptyArr = [];
  }
}


