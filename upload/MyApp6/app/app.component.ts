import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MyApp6';

  public stylelVar;

  public setValue(val:number):void{
    if(val == 1){
      this.stylelVar={"color":"red","font-size":"30px"};
    }

    if(val == 2){
      this.stylelVar={"color":"green","font-size":"30px"};
    }

    if(val == 3){
      this.stylelVar={"color":"blue","font-size":"30px"};
    }
   
  }

  isCondition:boolean=false;   
}
