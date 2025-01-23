import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent {


deleteSupplier(id: any) {
this.http.delete('https://localhost:7031/api/Suppliers/DeleteSuppliers?Id='+id)
.subscribe((id:any)=>{
  this.GetSupplierList();
})

}

supplierList : any;
  constructor(private http: HttpClient)
  {
    this.GetSupplierList();
  }

  GetSupplierList() {
    this.http.get('https://localhost:7031/api/Suppliers/GetAllSuppliers')        
    .subscribe((res: any)=>{
      // write your logic
      this.supplierList = res;
    });
  }
  


}
