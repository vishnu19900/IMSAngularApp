import { Component } from '@angular/core';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.css']
})
export class ToogleComponent {
  display:boolean=true;
  role: string= 'admin';

  
  

  
  constructor() {
    
  }

  
  toggle()
  {
    debugger;
    this.display = !this.display;
    
    this.role = (this.display == true) ? 'admin' : 'user';

    // if(this.role == "user")
    // {
    //   this.role = "admin";
    // }
    // else{
    //   this.role ="user";
    // }
    
  }


}
