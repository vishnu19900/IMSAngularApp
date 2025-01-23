import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filterText='';
  oderList = new MatTableDataSource<any>();
 


  constructor(private _http: HttpClient) {
    console.log(1)

  }

  ngOnInit(): void {
    console.log(2)
    this.Ordergetall();
    
  }

  ngAfterViewInit(): void {
    console.log(3)
    this.oderList.paginator = this.paginator;
    this.oderList.sort = this.sort; // Assign sorting to the dataSource
  }




  Ordergetall() {
    this._http.get('https://localhost:7031/api/orders/GetAllOrders')
      .subscribe((res: any) => {
        this.oderList.data = res;
        console.log(this.oderList)
      })
  }

  deleteOrders(id: any) {

    this._http.delete('https://localhost:7031/api/orders/dataDelete?id=' + id)
      .subscribe((id: any) => {
        this.Ordergetall()
        console.log(this.Ordergetall);
      })
  }
  filterdata() {
    debugger;
    this.oderList.filter = this.filterText.trim().toLowerCase();

  }

}


