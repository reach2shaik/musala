import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private pid:string;
  private pname:string;
  private price:string;  

  constructor() { }

  ngOnInit() {
  }

  prodList:Array<Product> = new Array<Product>();
  prodListSize:number;
  
  onAddProduct():void{
  this.prodList.push(new Product(this.pid,this.pname,this.price));
  this.prodListSize = this.prodList.length;
  }

  people: any[] = [{"name": "Douglas  Pace","age": 35,"country": 'MARS'},
  {"name": "Mcleod  Mueller","age": 32,"country": 'USA'},
  {"name": "Day  Meyers","age": 21,"country": 'HK'},
  {"name": "Aguirre  Ellis","age": 34,"country": 'UK'},
  {"name": "Cook  Tyson","age": 32,"country": 'USA'} ];
}
