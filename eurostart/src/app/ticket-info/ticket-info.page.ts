import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sendData } from '../sendData.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.page.html',
  styleUrls: ['./ticket-info.page.scss'],
})
export class TicketInfoPage implements OnInit {

  constructor(private http: HttpClient,private sendData: sendData, private router: Router) { }
 
  name: String;
  lastName: String;
  start: String;
  finish: String;
  price: number;
  people: number;
  isTrain: boolean;

  ngOnInit() {
    this.sendData.sentData.subscribe(data => {
      this.name = data.name;
      this.lastName = data.surname;
      this.price = data.price;
      this.isTrain = data.isTrain;
    })
  }

}
