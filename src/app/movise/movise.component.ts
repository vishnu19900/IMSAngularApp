import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movise',
  templateUrl: './movise.component.html',
  styleUrls: ['./movise.component.css']
})
export class MoviseComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
 searchText:string = 'superman';
  moviselist = new MatTableDataSource<any>();
  _totalResults: any;

  constructor(private _https: HttpClient) {
    this.moviseAllget(1);
  }


  moviseAllget(_pageIndex: number) {
    let url = 'https://www.omdbapi.com/?apikey=c61f556d&s='+this.searchText+'&page='+_pageIndex;
    this._https.get(url).
      subscribe((res: any) => {       
        this.moviselist.data = res.Search;
        this._totalResults =res.totalResults
      })

  }

  // Called when the user changes the pages
  onPageChange(event: PageEvent): void     {
   // console.log('Page changed:', event);
    this.moviseAllget(event.pageIndex + 1)
  }

  searchMovise()
  {
    this.moviseAllget(1);

  }

}
