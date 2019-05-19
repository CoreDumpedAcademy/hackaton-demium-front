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

  data: any;
  hasLoaded = false;
  horas = [];
  precios = [];
  constructor(private storage: Storage, private router: Router) { }

  loadData() {
    this.storage.get('TRAVEL').then((viaje: any) => {
        this.data = viaje;
      // tslint:disable-next-line:forin
        for (const hour in this.data['price']){
          this.horas.push(hour);
          this.precios.push(this.data['price'][hour]);
        }
        this.hasLoaded = true;
    });
  }

  async goTickets(){
    let both = await this.storage.get("BOTH_TICKET");
    if(!both) this.router.navigateByUrl('tickets');
    else {
      await this.storage.set("BOTH_TICKET", false)
      this.router.navigateByUrl('listahoteles')
    }
  }
  async ngOnInit() {
    let datos = await this.storage.get("TRAVEL");
    console.log(datos);
    this.loadData();
  }

  goBack() {
    this.router.navigateByUrl('homepage');
  }
  goHome(){
    this.router.navigateByUrl('');
}

}
