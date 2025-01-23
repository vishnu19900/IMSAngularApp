import { Component } from '@angular/core';
import{NgForm} from '@angular/forms' ;


@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent {
  
  getdata(data: any)
  {
    debugger;

    console.log(data);
  }

}
