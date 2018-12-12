import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';
import {EmployeeService} from '../employee.service'
import {Employee} from '../Employee';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private logger:LogService,private empService:EmployeeService) { 
    logger.log("EmployeeComponent Object is created");
    this.elist = empService.getEmpList();
  }

  ngOnInit() {
    this.logger.log("EmployeeComponent.ngOnInit() is created");
  }

  private elist:Array<Employee>;

}
