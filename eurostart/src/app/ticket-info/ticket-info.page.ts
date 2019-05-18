import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.page.html',
  styleUrls: ['./ticket-info.page.scss'],
})
export class TicketInfoPage implements OnInit {

  constructor(private http: HttpClient, private router: Router, private storage: Storage) { }

  name: string;
  lastName: string;
  start: string;
  finish: string;
  price: number;
  people: number;
  isTrain: boolean;

  ngOnInit() {
    
      this.storage.get('info').then(data => {
        this.name = data.name;
        this.lastName = data.surname;
        this.start = data.from;
        this.finish = data.to;
        this.price = data.price;
        this.isTrain = data.isTrain;
        this.people = data.children + data.adults;
      });
  }

}
