import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { 
    setTimeout(() => {
      this.disableAddProductButton = true;
    }, 5000);
  }

  ngOnInit() {
  }

  private titleMsg:string = "Add Product Form!";

  private pid:string;
  private pname:string;
  private price:string;

  private disableAddProductButton:boolean = false;

  onEnterPid(event:Event):void{
    console.log("PID-->"+(<HTMLInputElement>event.target).value);
    this.pid = (<HTMLInputElement>event.target).value;
  }

  onEnterPname(event:Event):void{
    console.log("PNAME-->"+(<HTMLInputElement>event.target).value);
    this.pname = (<HTMLInputElement>event.target).value;
  }

  onEnterPrice(event:Event):void{
    console.log("PRICE-->"+(<HTMLInputElement>event.target).value);
    this.price = (<HTMLInputElement>event.target).value;
  }

}