import { Component, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  
  users: string[];

  constructor(private usersServices: UsersService) {
    this.users = this.usersServices.activeUsers;
  }
  
  onSetToInactive(id: number) {
    this.usersServices.userSetToInactive.emit(id);
  }
}
