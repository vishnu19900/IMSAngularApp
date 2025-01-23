import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-re-form',
  templateUrl: './re-form.component.html',
  styleUrls: ['./re-form.component.css']
})
export class ReFormComponent {
  getdata(data:any)
  {
 console.log(data);

  }

}
