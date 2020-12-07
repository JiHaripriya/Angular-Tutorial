import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  toActiveCount = 0;
  toInactiveCount = 0;

  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();

  constructor() { }

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.toInactiveLog();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.toActiveLog();
  }

  toActiveLog() {
    this.toActiveCount++;
    console.log('Number of times inactive was set to active: ', this.toActiveCount);
  }

  toInactiveLog() {
    this.toInactiveCount++;
    console.log('Number of times active was set to inactive: ', this.toInactiveCount);
  }
}
