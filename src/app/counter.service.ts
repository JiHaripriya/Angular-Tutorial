import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  toActiveCount = 0;
  toInactiveCount = 0;

  constructor() { }

  toActiveLog() {
    console.log('Number of times inactive was set to active: ',  ++this.toActiveCount);
  }

  toInactiveLog() {
    console.log('Number of times active was set to inactive: ', ++this.toInactiveCount);
  }

}
