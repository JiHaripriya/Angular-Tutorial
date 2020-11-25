import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageName = 'blog';

  // Method
  getName():String {
    return "Haripriya";
  }

  // Object
  person = {
    name: "Haripriya",
    age: 22
  }

  // Array
  names = ['Abc', 'Bcd']

}
