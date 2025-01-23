import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent {
  constructor(private _http:HttpClient,private _route:Router,private _activate:ActivatedRoute){}

  ordersadd  = new  FormGroup({
    id: new FormControl(),
    title: new FormControl(''),
    first:new FormControl(''),
    middle:new FormControl(''),
    last:new FormControl(''),
    mobileNo:new FormControl(),
    productId:new FormControl(''),
    numberShipped:new FormControl(''),
    orderDate:new FormControl(),
    suppliersId:new FormControl()
  });

  login()
  {
    console.warn(this.ordersadd.value);
  this._http.post('https://localhost:7031/api/orders/AddOrders',this.ordersadd.value)
  .subscribe((res:any)=>{this._route.navigate(['/addorders']);});}}
