import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import {Employee} from './Employee';

@Injectable()
export class EmployeeService {

  elist:Array<Employee> = new Array<Employee>();

  constructor(private logger:LogService) {
    this.logger.log("EmployeeService Object is created");
   }

   public getEmpList():Array<Employee>{
    this.logger.log("EmployeeService.getEmpList() is called");
    this.elist.push(new Employee("12","Reddy","123"));
    this.elist.push(new Employee("13","Kent","234"));
    this.elist.push(new Employee("14","James","345"));
    this.elist.push(new Employee("15","Bond","456"));
    this.elist.push(new Employee("16","Gilchrist","567"));
    return this.elist;
   }
}
