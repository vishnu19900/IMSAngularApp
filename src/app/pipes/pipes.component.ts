import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  title = 'vishnujehgrlngkrenbkletnbtnknbekhbntebetn1123456';
  today = Date();
  capitem(item: string) {
    return item.toUpperCase();

  }
  lowitem(item: string) {
    return item.toLowerCase();

  }
  user :any=
    {
      'Id': 1,
      'name': 'vishnkant thakur'

    }


}
