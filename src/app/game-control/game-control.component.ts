import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  counter:number = 0;
  startGameRef;
  something;

  @Output() gameStarted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  
  startGame() {    
    this.startGameRef = setInterval(() => {

      // Emit event code
      this.counter += 1
      this.gameStarted.emit(this.counter);
      
    }, 1000);
  }

  endGame() {
    
    this.counter = 0;
    clearInterval(this.startGameRef);
    console.log('Cleared Interval');
  }
}
