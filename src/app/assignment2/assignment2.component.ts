import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})

export class Assignment2Component implements OnInit {

  username:string = "Enter a username";
  userNameCheck:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  checkUserName() {
    console.log(this.username)
    if(this.username != "") {
      this.userNameCheck = true;
    }
    else {
      this.userNameCheck = false;
    }
  }

  clearInput() {
    this.username = "";
  }
}
