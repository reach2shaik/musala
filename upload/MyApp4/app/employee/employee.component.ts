import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private eid:string;
  private ename:string;
  private esalary:string;

  constructor() {
    console.log("--EmployeeComponent  Object Created--");
   }

  ngOnInit() {
    console.log("--EmployeeComponent.ngOnInit() called--");
  }

  @Output() sendEmpData = new EventEmitter<Employee>();

  onAddEmployee():void{
    console.log("--employee-chaild component called emit()--");
    this.sendEmpData.emit(new Employee(this.eid,this.ename,this.esalary));    
  }

}
