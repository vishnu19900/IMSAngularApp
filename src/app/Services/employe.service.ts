import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeServiceService {

  constructor() { }

  add(a : number, b:number)
  {
    return a+ b;
  }

  getEmployees() {
    let dataList = [
      {
        'Id': 15,
        'name': "vishnukant",
        'age': 5
      },
      {
        'Id': 42,
        'name': "MurliManhonar",
        'age': 10
      },
      {
        'Id': 63,
        'name': "malathakur",
        'age': 15
      },
      {
        'Id': 35,
        'name': "vishnu",
        'age': 5
      },
      {
        'Id': 62,
        'name': "Murli",
        'age': 10
      },
      {
        'Id': 83,
        'name': "thakur",
        'age': 15
      }
    ]
    return dataList;
    //this.employeeList = dataList;
  }
  getTeacher() {
    let teachers = [{
      'Id': 1,
      'name': "Arun",
      'subject': "english"
    },
    {
      'Id': 1,
      'name': "Arun",
      'subject': "english"
    },
    {
      'Id': 1,
      'name': "Arun",
      'subject': "english"
    },
    {
      'Id': 1,
      'name': "Arun",
      'subject': "english"
    }
    ]
    return teachers;
  }
}
