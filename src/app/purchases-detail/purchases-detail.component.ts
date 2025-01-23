import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-purchases-detail',
  templateUrl: './purchases-detail.component.html',
  styleUrls: ['./purchases-detail.component.css']
})
export class PurchasesDetailComponent {
_purchase:any;
  constructor(private _http :HttpClient,private _router:Router,private _activatdroute:ActivatedRoute){

  this._activatdroute.params.subscribe(Params=>{
    let _pur_Id=Params['id'];

    this._http.get('https://localhost:7031/api/Purchases/Details?Id='+ _pur_Id).subscribe((res:any)=>{
      this._purchase=res
  });
  });
}
}
