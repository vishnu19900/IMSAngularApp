import { Component } from '@angular/core';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  loginForm = new FormGroup({
    emailAddress: new FormControl('vishnu', [Validators.email, Validators.required]),
    password: new FormControl('',Validators.required)
  })

  LoginUser() {
    console.log(this.loginForm);
    if(this.loginForm.status != 'INVALID')
    {
      console.log('for is valid!');
      
    }
    else{
      alert('Please ener corect details');
    }

  }
}
