import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {

  cricetdata=new (MatTableDataSource)<any>();
 
  constructor(private _http:HttpClient)
  {
    this.cricketinformation();

  }

  cricketinformation()
  {
    this._http.get('https://api.cricapi.com/v1/series?apikey=e2e9f631-af54-471c-804d-70f3a03c7c2f&offset=0').
    subscribe((res:any)=>
  { this.cricetdata.data=res.data;
        console.log(res);
      })
  }
}
