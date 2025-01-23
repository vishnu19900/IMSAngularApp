import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-suppliers',
  templateUrl: './add-suppliers.component.html',
  styleUrls: ['./add-suppliers.component.css']
})
export class AddSuppliersComponent {

  constructor(private _http : HttpClient, private _router: Router) {}

  supplierForm = new FormGroup({
    id: new FormControl(0),
    supplier_Name: new FormControl('', Validators.required)
  })


  AddSupllier() {
    debugger;
    console.log(this.supplierForm.value);

    this._http.post('https://localhost:7031/api/Suppliers/AddSupplier',this.supplierForm.value).subscribe((res:any)=> {
      this._router.navigate(['/suppliers']);
    });
  }

}
