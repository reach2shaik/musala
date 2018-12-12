import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private logger:LogService) { 
    this.logger.log("ProductComponent Object is created");
  }

  ngOnInit() {
    this.logger.log("ProductComponent.ngOnInit() is called");
  }

  @ViewChild("pidHTML")prodId:ElementRef;
  @ViewChild("pnameHTML")prodName:ElementRef;
  @ViewChild("priceHTML")prodPrice:ElementRef;

  private pid:string;
  private pname:string;
  private price:string;

  onAddProduct():void{
    this.logger.log("ProductComponent.onAddProduct() is called");
    this.pid = this.prodId.nativeElement.value;
    this.pname = this.prodName.nativeElement.value;
    this.price = this.prodPrice.nativeElement.value; 
  }

}
