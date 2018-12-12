import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../Employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor() {
    console.log("--ViewComponent Object Created--");
   }

  ngOnInit() {
    console.log("--ViewComponent.ngOnInit() called--");
  }

  @Input() employee:Employee;

}
