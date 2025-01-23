import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  data: Array<any> = [];
  constructor() {
    this.Show();
  }

  Show() {    
    for (let i = 5; i <= 10; i++) {
      this.data.push({ 'fName': 'visnu'+i, 'lName': 'Thakur' });
    }
    console.table(this.data);
  }
}


