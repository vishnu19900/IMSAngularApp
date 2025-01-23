import { Component } from '@angular/core';

@Component({
  selector: 'app-alternative',
  templateUrl: './alternative.component.html',
  styleUrls: ['./alternative.component.css']
})
export class AlternativeComponent {

  teacher: Array<any> = [];
 
  constructor() {

    this.teacher = this.teach();
  }
  teach() {
    let teachdata = [
      {
        'Id': 111,
        'name': 'ram',
        'age': 24

      },
      {
        'Id': 222,
        'name': 'shyam kumar',
        'age': 25

      },
      {
        'Id': 333,
        'name': 'barun kumar thakur',
        'age': 23

      }

    ]

    return teachdata;

  }
    
  visible(tea:any)
  {
    for (let i = 0; i < this.teacher.length; i++) {
      this.teacher[i].isShow = false;      
    }
    tea.isShow =!tea.isShow;
  }
}
