import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private usersServices: UsersService) {}

  ngOnInit() {
    this.usersServices.userSetToInactive.subscribe(
      (id: number) => this.usersServices.onSetToInactive(id)
    )
    this.usersServices.userSetToActive.subscribe(
      (id: number) => this.usersServices.onSetToActive(id)
    )
  }
}
