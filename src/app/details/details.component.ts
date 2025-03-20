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
  constructor(private _http: HttpClient, private _route: Router, private _activatedroute: ActivatedRoute) 
  {
    debugger;
    this.getId()

  }
  getId()
  {
    this._activatedroute.params.subscribe((Param:any) => {
      //let _sup_Id = Param['id']; 
      let _sup_Id = Param.id;
        this.getDetail(_sup_Id)
     });
     
  }

  

  getDetail(id:number)
  {
    this._http.get('https://localhost:7031/api/Suppliers/details?Id=' + id)
    .subscribe((res: any) => {
      this.supplierDetail = res;
    });
  }
}
