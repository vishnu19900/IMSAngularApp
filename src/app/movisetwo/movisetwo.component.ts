import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-movisetwo',
  templateUrl: './movisetwo.component.html',
  styleUrls: ['./movisetwo.component.css']
})
export class MovisetwoComponent {
   _totalresult :number=0;
  moviselists = new MatTableDataSource<any>();
  searching :string=''; 
  constructor(private _https: HttpClient) {
    this.movisetwoAllgets(1);
  }


  movisetwoAllgets(_pageIndex: number) 
  {
    this._https.get('https://www.omdbapi.com/?apikey=c61f556d&s='+this.searching+'&page='+_pageIndex).
      subscribe((res: any) => {
        this.moviselists.data  = []
        this.moviselists.data = res.Search;
        this._totalresult = res.totalResults;
        console.log(res);
      })

  }
  onPageChange(event:PageEvent):void
  {
   this.movisetwoAllgets(event.pageIndex + 1)

  }
  searchMovises()
  {
this.movisetwoAllgets(1);

  }
}
