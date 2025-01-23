import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-update-purchases',
  templateUrl: './update-purchases.component.html',
  styleUrls: ['./update-purchases.component.css']
})
export class UpdatePurchasesComponent {

constructor(private _http :HttpClient,private _route:Router,private _activate:ActivatedRoute){
  this._activate.params.subscribe(params=>{
let pro_Id=params['id'];

this._http.get('https://localhost:7031/api/purchases/Details?id='+ pro_Id)
.subscribe((res:any) =>{
  this.purchasesForm.controls['id'].patchValue(res.id);
  this.purchasesForm.controls['supplierId'].patchValue(res.supplierId);
  this.purchasesForm.controls['productId'].patchValue(res.productId);
  this.purchasesForm.controls['number_Received'].patchValue(res.number_Received);
  this.purchasesForm.controls['purchases_date'].patchValue(res.purchases_date);
});
  });
  
  

}
purchasesForm=new FormGroup({
  id:new FormControl(0,Validators.required),
  supplierId:new FormControl(0,Validators.required),
  productId:new FormControl(0,Validators.required),
  number_Received:new FormControl(0,Validators.required),
  purchases_date:new FormControl(Date,Validators.required)
})

updatepurchases()
{
console.log(this.purchasesForm.value);

this._http.put('https://localhost:7031/api/Purchases/Updatedata',this.purchasesForm.value)
.subscribe((res:any)=>{
  this._route.navigate(['/purchases']);
});
}
}






