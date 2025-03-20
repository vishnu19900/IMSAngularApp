import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private _router: Router, private _http: HttpClient) { }


  vishnu = new FormGroup({
    id: new FormControl(''),
    productName: new FormControl(''),
    partNumber: new FormControl(''),
    productLabel: new FormControl(''),
    startingInventory: new FormControl(''),
    inventoryReceived: new FormControl(''),
    inventoryshipped: new FormControl(''),
    inventoryOnHand: new FormControl(''),
    minimumRequired: new FormControl('')
  });
  Loginuser() {
    console.warn(this.vishnu.value);
    this._http.post('https://localhost:7031/api/product/Add_product', this.vishnu.value)
      .subscribe((res: any) => {
        this._router.navigate(['/product']);
      });
      

  }

}
