import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  filtertext='';
  purchasesList = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id','supplier_Name','productName','number_Received','purchase_date','action'];

  constructor(private _http: HttpClient) {
    this.purchasesget();
  }

  ngOnInit(): void {
    this.purchasesget();
  }

  ngAfterViewInit(): void {
    this.purchasesList.paginator = this.paginator;
    this.purchasesList.sort=this.sort;
  }

  purchasesget() {
    this._http.get('https://localhost:7031/api/Purchases/GetAllData').subscribe((res: any) => {
      this.purchasesList.data = res;
      console.log(this.purchasesList.data)
    })
  }

  deletePurchases(id: any) {
    this._http.delete('https://localhost:7031/api/Purchases/deletePurchase?id=' + id)
      .subscribe((id: any) => {
        this.purchasesget()
      })
  }

  filterdata()
  {
    this.purchasesList.filter = this.filtertext.trim().toLowerCase();
  }
}

