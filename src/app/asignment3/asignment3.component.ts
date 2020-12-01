import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignment3',
  templateUrl: './asignment3.component.html',
  styleUrls: ['./asignment3.component.css']
})

export class Asignment3Component implements OnInit {
  
  displayContent = false;
  displayLogs = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.displayContent ? this.displayContent = false : this.displayContent = true;
    this.displayLogs.push(String(new Date()));
  }
}
