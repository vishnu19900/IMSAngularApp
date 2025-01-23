import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  constructor(private _router:Router,private _http:HttpClient,private _activate:ActivatedRoute){
  
    this._activate.params.subscribe(params =>{
  debugger;
    let pro_Id=params['id'];

    this._http.get('https://localhost:7031/api/product/Detail?id='+ pro_Id)
      .subscribe((res:any)=>{
        debugger;
          this.productForm.controls['id'].patchValue(res.id);
          this.productForm.controls['productName'].patchValue(res.productName);
          this.productForm.controls['partNumber'].patchValue(res.partNumber);
           this.productForm.controls['productLabel'].patchValue(res.productLabel);
           this.productForm.controls['startingInventory'].patchValue(res.startingInventory);
          this.productForm.controls['inventoryReceived'].patchValue(res.inventoryReceived);
           this.productForm.controls['inventoryshipped'].patchValue(res.inventoryshipped);
           this.productForm.controls['inventoryOnHand'].patchValue(res.inventoryOnHand);
           this.productForm.controls['minimumRequired'].patchValue(res.minimumRequired);








         
  });
});
  }

  productForm = new FormGroup({
    id:new FormControl(0,Validators.required),
    productName :new FormControl('',Validators.required),
    partNumber:new FormControl('',Validators.required),
    productLabel:new FormControl('',Validators.required),
    startingInventory:new FormControl('',Validators.required),
    inventoryReceived:new FormControl('',Validators.required),
    inventoryshipped:new FormControl('',Validators.required),
    inventoryOnHand:new FormControl('',Validators.required),
    minimumRequired:new FormControl('',Validators.required)

  })

  updateproduct()

  {
    debugger;
    console.log(this.productForm.value);

    this._http.put('https://localhost:7031/api/product/update_product', this.productForm.value)
    .subscribe((res: any) => {
      this._router.navigate(['/product-update']);
    });
  }


}  


