import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-suppliers',
  templateUrl: './update-suppliers.component.html',
  styleUrls: ['./update-suppliers.component.css']
})
export class UpdateSuppliersComponent {

  constructor(private _http: HttpClient, private _router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      debugger;
      let sup_Id = params['id'];

      this._http.get('https://localhost:7031/api/Suppliers/GetSuppliers?id=' + sup_Id)
        .subscribe((res: any) => {
          this.supplierForm.controls['id'].patchValue(res.id);
          this.supplierForm.controls['supplier_Name'].patchValue(res.supplier_Name);
        });
    });
  }

  supplierForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    supplier_Name: new FormControl('', Validators.required)
  })


  UpdateSupllier() {
    debugger;
    console.log(this.supplierForm.value);

    this._http.put('https://localhost:7031/api/Suppliers/UpdateSupplier', this.supplierForm.value)
    .subscribe((res: any) => {
      this._router.navigate(['/suppliers']);
    });
  }
}
