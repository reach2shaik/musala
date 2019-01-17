import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.css'] 
})
export class MyTicketComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onBookTicket():void{
    this.router.navigate(["home"]);
  }

}
