import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval ,Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(
    //   count => {
    //     console.log(count);
    // })
    const customObs = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count); // letting server know change occured
        if (count == 2) {
          observer.complete();
        }
        if(count > 3) {
          observer.error(new Error('Count exceeded 3'));
        }
        count++;
      }, 1000);
    })

    

    this.firstObsSubscription = customObs.pipe(map((data: number) => {
                                  return data + 1;
                                }),
                                filter( data => {
                                  return data > 1
                                })
                                ).subscribe(data => {
                                  console.log(data);
                                }, error => {
                                  console.log(error.message);
                                  alert(error.message);
                                }, ()=> {
                                  console.log('Completed');
                                })
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }

}
