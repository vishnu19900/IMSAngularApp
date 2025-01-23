import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-detail-orders',
  templateUrl: './detail-orders.component.html',
  styleUrls: ['./detail-orders.component.css']
})
export class DetailOrdersComponent {
  ordersList:any;
  constructor(private _http:HttpClient,private route:Router,private _activate:ActivatedRoute ){
    debugger;
    this._activate.params.subscribe(Params=>{
      let _ord_Id=Params['id'];
    this._http.get('https://localhost:7031/api/Orders/Details?Id='+_ord_Id)
     .subscribe((res:any)=>{
     this.ordersList=res
    });
    });
  
  }

}
