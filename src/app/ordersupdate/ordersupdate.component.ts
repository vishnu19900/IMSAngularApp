import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ordersupdate',
  templateUrl: './ordersupdate.component.html',
  styleUrls: ['./ordersupdate.component.css']
})
export class OrdersupdateComponent {
  constructor(private _router:Router,private _http:HttpClient,private _active:ActivatedRoute){

    this._active.params.subscribe(params=>{

      let upt_Id=params['id'];

      this._http.get('https://localhost:7031/api/Orders/Details?Id='+ upt_Id).subscribe((res:any)=>{

        this.orderupdate.controls['id'].patchValue(res.id);
        this.orderupdate.controls['title'].patchValue(res.title);
        this.orderupdate.controls['first'].patchValue(res.first);
        this.orderupdate.controls['middle'].patchValue(res.middle);
        this.orderupdate.controls['last'].patchValue(res.last);
        this.orderupdate.controls['mobileNo'].patchValue(res.mobileNo);
        this.orderupdate.controls['productId'].patchValue(res.productId);
        this.orderupdate.controls['numberShipped'].patchValue(res.numberShipped);
        this.orderupdate.controls['orderDate'].patchValue(res.orderDate);
        this.orderupdate.controls['suppliersId'].patchValue(res.suppliersId);
    });
  });

}
orderupdate= new FormGroup({
  
   id : new FormControl(0,Validators.required),
  title :new  FormControl('',Validators.required),
  first: new FormControl('',Validators.required),
  middle:new FormControl('',Validators.required),
  last:new FormControl('',Validators.required),
  mobileNo:new FormControl(0,Validators.required),
  productId:new FormControl(0,Validators.required),
  numberShipped:new FormControl(0,Validators.required),
  orderDate:new FormControl (0,Validators.required),
  suppliersId: new FormControl (0,Validators.required)
  



}) 
updateproduct()
{
  console.log(this.orderupdate.value);
  this._http.put('https://localhost:7031/api/Orders/OrderUpdate',this.orderupdate.value).subscribe((res:any)=>{
    this._router.navigate(['/orders']);
  });
}
}
  

