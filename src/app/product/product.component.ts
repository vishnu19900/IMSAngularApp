import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,AfterViewInit
{
@ViewChild(MatPaginator) paginator!:MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
filtertext='';
productList= new MatTableDataSource<any>();
  
  constructor(private http: HttpClient) {
    this.ProductAllget();

  }
  ngOnInit(): void {
    this.ProductAllget();
  }
  ngAfterViewInit(): void {
    this.productList.paginator=this.paginator;
    this.productList.sort = this.sort;
  }
  ProductAllget() {
    debugger;
    this.http.get('https://localhost:7031/api/product/ProductAllget')
      .subscribe((resp: any) => {
        //Add your logic
        debugger;
        this.productList.data= resp;
        console.log(this.productList)
    })
  }


  deteteProducts(id: any) 
  {
    this.http.delete('https://localhost:7031/api/product/product_delete?id=' + id)
      .subscribe((id: any) =>
         {
        this.ProductAllget()
        console.log(this.productList);




      })
    
  }
  filterdata()
  {
    this.productList.filter = this.filtertext.trim().toLowerCase();
  }
}
    