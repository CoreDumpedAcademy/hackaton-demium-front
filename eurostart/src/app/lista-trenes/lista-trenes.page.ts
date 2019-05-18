import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response-train';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-trenes',
  templateUrl: './lista-trenes.page.html',
  styleUrls: ['./lista-trenes.page.scss'],
})

export class ListaTrenesPage implements OnInit {

  data:any
  hasLoaded:Boolean = false
  horas = [];
  precios = [];
  constructor(private storage: Storage, private router: Router) { }

  loadData() {
    this.storage.get('TRAVEL').then((viaje: any) => {
        this.data = viaje;
        for(let hour in this.data["price"]){
          this.horas.push(hour);
          this.precios.push(this.data["price"][hour]);
        }
        this.hasLoaded = true;
    })
  }

  ngOnInit() {
    this.loadData();
  }

}
