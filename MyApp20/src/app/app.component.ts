import { Component } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  userName:string;
  passWord:string;
  mobilNumber:string;
  vehicleNumber:string;
  email:string;

  VehicleRegistration(data:NgForm):void{
    console.log("registered vehicle");
    console.log(data);
    this.userName = data.value.userName;
    this.passWord = data.value.passWord;
    this.mobilNumber = data.value.mobileNo;
    this.vehicleNumber = data.value.vehicleNo;
    this.email = data.value.email;
  }
}
