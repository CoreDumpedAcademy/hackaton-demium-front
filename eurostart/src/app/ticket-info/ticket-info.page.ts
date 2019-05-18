import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.page.html',
  styleUrls: ['./ticket-info.page.scss'],
})
export class TicketInfoPage implements OnInit {

  constructor(private http: HttpClient) { }

  name: String;
  lastName: String;
  start: String;
  finish: String;
  price: number;
  pricep: number;
  people: number;

  ngOnInit() {
    this.http.get('http://localhost:3000/ticket/'+this.lastName)
    this.pricep = this.price/this.people;
  }

}
