import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {

  constructor() { 
    console.log("--ProductComponent Object is created--");
  }

  ngOnInit() {
    console.log("--ProductComponent.init() is called--");
  }

  ngOnDestroy(){
    console.log("--ProductComponent.destroy() is called--");
  }

  @ViewChild("pidHTML")prodId:ElementRef;
  @ViewChild("pnameHTML")prodName:ElementRef;
  @ViewChild("priceHTML")prodPrice:ElementRef;

  private pid:string;
  private pname:string;
  private price:string;

  onAddProduct():void{
    this.pid = this.prodId.nativeElement.value;
    this.pname = this.prodName.nativeElement.value;
    this.price = this.prodPrice.nativeElement.value; 
  }

}
