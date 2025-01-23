import { Component } from '@angular/core';
import { EmployeServiceService } from '../Services/employe.service';
//import { ServiceService} from  '../Services/service.service';


@Component({
  selector: 'app-curdoperaton',
  templateUrl: './curdoperaton.component.html',
  styleUrls: ['./curdoperaton.component.css']
})
export class CurdoperatonComponent {

  employeeList: Array<any>;
  teacherList: Array<any> = [];
  employeeListCopy: { Id: number; name: string; age: number; }[];
  //countries : Array<string> = ["","",""]
  

  constructor(private empSer : EmployeServiceService) {

    this.employeeList = empSer.getEmployees();
    this.employeeListCopy = empSer.getEmployees();
    
    this.alternateBackgroundColor();

    this.teacherList = empSer.getTeacher();
  }
  

  

  visiblity(emp: any) {
     emp.isShow =!emp.isShow;
  }

  backgroundColor(item: any) {
    debugger;
    for(let i = 0 ; i < this.employeeList.length; i++)
    {
      this.employeeList[i].isColor  = false;
    }  
    debugger;  
    item.isColor = true;
    console.table(this.employeeList);
  }

  
  alternateBackgroundColor() {
    
    for(let i = 0 ; i < this.employeeList.length; i++)
    {
        if(i % 2  == 0 )
        {
          this.employeeList[i].isAlternateColor  = true;
        }
    }
  }
  
}
