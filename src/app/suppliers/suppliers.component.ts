import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit, AfterViewInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;
  filtertext='';
  supplierList = new MatTableDataSource<any>();


  deleteSupplier(id: any) {
    this.http.delete('https://localhost:7031/api/Suppliers/DeleteSuppliers?Id=' + id)
      .subscribe((id: any) => {
        this.GetSupplierList();
      })

  }

  constructor(private http: HttpClient) {
    this.GetSupplierList();
  }
  ngAfterViewInit(): void {
    this.supplierList.paginator = this.paginator;
    this.supplierList.sort=this.sort;
  }


  ngOnInit(): void {
    this.GetSupplierList();
  }


  GetSupplierList() {
    this.http.get('https://localhost:7031/api/Suppliers/GetAllSuppliers')
      .subscribe((res: any) => {
        // write your logic
        this.supplierList.data = res;
      });
  }
  
  filterdata()
  {
    this.supplierList.filter =this.filtertext.trim().toLowerCase(); 
  }



}
