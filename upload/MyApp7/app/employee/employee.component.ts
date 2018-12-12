import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private empId:string;
  private empName:string;
  private empSalary:string;

  onAddEmployee(eid:HTMLInputElement,ename:HTMLInputElement,esalary:HTMLInputElement):void{
    this.empId = eid.value;
    this.empName = ename.value;
    this.empSalary = esalary.value;
  }

}
