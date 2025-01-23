import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VishnuserviceService {

  constructor() { }

  
  workerlist() {
    let Worker = [
      {
        'Id': 111,
        'name': "Arun kumar Thakur"
      }, 
      {
        'Id':112,
        'name':"Barun Kumar thakur"

      }
      ,{
        'Id': 113,
        'name': "shyam kumar Thakur"
      }, 
      {
        'Id':114,
        'name':"krishna Kumar thakur"

      },{
        'Id': 115,
        'name': "ram kumar Thakur"
      }, 
      {
        'Id':112,
        'name':"Lakshman Kumar thakur"

      }

    ]
    return Worker;

  }
}
