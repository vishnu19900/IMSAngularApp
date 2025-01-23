import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-purchases',
  templateUrl: './add-purchases.component.html',
  styleUrls: ['./add-purchases.component.css']
})
export class AddPurchasesComponent {
  constructor(private _router: Router, private _http: HttpClient) { }

  purchasesForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    supplierid: new FormControl('', Validators.required),
    productId: new FormControl('', Validators.required),
    number_Received: new FormControl('', Validators.required),
    purchases_date: new FormControl('', Validators.required)
  });

  LoginPurchase() {

    this._http.post('https://localhost:7031/api/Purchases/AddPurchases', this.purchasesForm.value).subscribe((res: any) => { 
    
      this._router.navigate(['/purchases']); 
    
    });
    } 
  }


