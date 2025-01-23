import { Component } from '@angular/core';
import { VishnuserviceService } from '../Services/vishnuservice.service';


@Component({
  selector: 'app-re-curdoperation',
  templateUrl: './re-curdoperation.component.html',
  styleUrls: ['./re-curdoperation.component.css']
})
export class ReCurdoperationComponent {
  employeess: Array<any> = [];
  workerss: Array<any> = [];

  constructor(private murli: VishnuserviceService) {

    this.employeess = this.employee();
    this.workerss=murli.workerlist();
  }

  employee() {
    let employ = [{
      'Id': 11,
      'Name': 'thakur',
      'Age': 20

    },
    {
      'Id': 11,
      'Name': 'Kant',
      'Age': 25

    },
    {
      'Id': 33,
      'Name': 'vishnu',
      'Age': 28

    },
    {
      'Id': 44,
      'Name': 'vkt',
      'Age': 30

    }]
    return employ
  }

  see(emps: any) {
    emps.isshow = !emps.isshow;
  }

  vishnu(emps: any) {
    for (let i = 0; i < this.employeess.length; i++) {
      this.employeess[i].isColor = false;
    }
    emps.isColor = true;
    console.table(this.employeess);
  }

  backgroundcolour(emps: any) {
    for (let i = 0; i < this.employeess.length; i++) {
      this.employeess[i].isColor = false;
    }
    emps.isColor = true;
    console.table(this.employeess);
  }

  alternateBackgroundColor() {
    for (let i = 0; i < this.employeess.length; i++) {
      if (i % 2 == 0) {
        this.employeess[i].isAlternateColor = true;

      }

    }

  }


}
