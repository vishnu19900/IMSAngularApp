import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  pages: Array<number>=[1,2,3];
  next() {
   
    if (this.pages[2] < 10) {
      this.pages[0]++ // = this.pages[1];
      this.pages[1]++ //= //this.pages[2];
      this.pages[2]++;
    }
  }
  Pre() {
   
    if (this.pages[0] > 1) {
      this.pages[2] = this.pages[1];
      this.pages[1] = this.pages[0];
      this.pages[0]--;
    }
  }
}
