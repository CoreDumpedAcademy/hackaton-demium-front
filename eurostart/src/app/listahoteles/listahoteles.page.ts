import { ApiResponse } from './../api-response-train';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listahoteles',
  templateUrl: './listahoteles.page.html',
  styleUrls: ['./listahoteles.page.scss'],
})
export class ListahotelesPage implements OnInit {

  constructor(private storage: Storage, private router: Router) { }

  destino: any
  hasLoaded:Boolean = false
  hoteles = []
  dinero = []

  loadData() {
    this.storage.get('HOTEL').then((data) => {
      this.destino = data;
      console.log(data);

      for(let hotels in this.destino["prices"]) {
        this.hoteles.push(hotels);
        this.dinero.push(data["prices"][hotels]);
        this.hasLoaded = true;
      }
      console.log(this.hoteles);
    })
  }

  ngOnInit() {
    this.loadData();
  }

  goBack() {
    this.router.navigateByUrl('homepage');
  }

  goTickets() {
    this.router.navigateByUrl('tickets');
  }

}
