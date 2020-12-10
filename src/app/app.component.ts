import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female', "non-binary"];
  signupForm : FormGroup;
  forbiddenUsernames = ['Jack', 'Mary'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]), // null -> empty field
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

    this.signupForm.valueChanges.subscribe
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const ctrl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(ctrl);
  }
  
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value)!== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((res, rej) => {
      setTimeout(()=> {
        if(control.value === 'test@test.com'){
          res({'emailIsForbidden': true});
        }
      })
    })
    return promise;
  }

}
