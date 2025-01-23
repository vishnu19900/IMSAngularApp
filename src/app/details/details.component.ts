import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  supplierDetail:any;
  constructor(private _http: HttpClient, private _route: Router, private _activatedroute: ActivatedRoute) {
    debugger;
    this._activatedroute.params.subscribe(Params => {
      let _sup_Id = Params['id'];


      this._http.get('https://localhost:7031/api/Suppliers/dataDetails?Id=' + _sup_Id)
        .subscribe((res: any) => {
          this.supplierDetail = res;
        });
    });

  }
}
