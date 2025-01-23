import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  _productDetail:any;
  constructor(private _http:HttpClient,private router:Router,private _activatdroute:ActivatedRoute) {
  debugger;
  this._activatdroute.params.subscribe(Params=>{
  let _sup_Id=Params['id'];

  this._http.get('https://localhost:7031/api/product/Detail?Id='+_sup_Id).
  subscribe((res:any)=>{
    this._productDetail=res
  });
  });
}
}
