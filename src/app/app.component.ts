import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  item;

  getNumber(valueEmitted: number) {
    this.item = valueEmitted;
  }
}
