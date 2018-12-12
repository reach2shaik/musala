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

  private disableAddProductButton:boolean = false; 
}