import { ApiResponse } from './../api-response-train';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listahoteles',
  templateUrl: './listahoteles.page.html',
  styleUrls: ['./listahoteles.page.scss'],
})
export class ListahotelesPage implements OnInit {

  constructor(private storage: Storage) { }

  destino: any
  hasLoaded:Boolean = false
  hoteles = []
  dinero = []

  loadData() {
    this.storage.get('HOTEL').then((data) => {
      this.destino = data
      console.log(data)
      
      for(let hotels in this.destino["prices"]) {
        this.hoteles.push(hotels)
        this.dinero.push(data["prices"][hotels])
        this.hasLoaded = true
      }
      console.log(this.hoteles)
    })
  }

  ngOnInit() {
    this.loadData();
  }

}
