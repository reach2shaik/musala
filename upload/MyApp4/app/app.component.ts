import { Component } from '@angular/core';
import {Product} from './Product';
import { Employee } from './Employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    console.log("--APPROOT Component Object Created--");
  }

  title = 'MyApp4';

  private emp:Employee = new Employee("","","");

  receiveEmpData(event:any):void{
    console.log("--parent component received employee object--");    
    this.emp = new Employee(event.eid,event.ename,event.esalary);    
  }

}
