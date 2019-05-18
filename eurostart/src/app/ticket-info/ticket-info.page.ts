import { Component, OnInit, Injectable } from '@angular/core';
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
    
  }

}
