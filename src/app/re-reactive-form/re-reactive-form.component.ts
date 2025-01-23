import { Component } from '@angular/core';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-re-reactive-form',
  templateUrl: './re-reactive-form.component.html',
  styleUrls: ['./re-reactive-form.component.css']
})
export class ReReactiveFormComponent {

  constructor(private route : ActivatedRoute) {

  }

  vishnuform = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required)
  })

  Loginform() {    
    let id = this.route.snapshot.paramMap.get('id');
    console.log(this.vishnuform.value);
    if(this.vishnuform.status != 'INVALID')
      {
        console.log('for is valid!');
      }
      else{
        alert('Please ener corect details');
      }
  }

}
