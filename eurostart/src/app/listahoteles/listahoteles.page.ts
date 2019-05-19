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

  destino: any;
  hasLoaded = false;
  hoteles = [];
  dinero = [];

  loadData() {
    this.storage.get('HOTEL').then((data) => {
      this.destino = data;
      console.log(data);

      // tslint:disable-next-line:forin
      for (const hotels in this.destino['prices']) {
        this.hoteles.push(hotels);
        this.dinero.push(data['prices'][hotels]);
        this.hasLoaded = true;
      }
      console.log(this.hoteles);
    });
  }

  async ngOnInit() {
    this.loadData();
    let datos = await this.storage.get("HOTEL");
    console.log(datos);
  }

  goBack() {
    this.router.navigateByUrl('homepage');
  }
  goHome(){
    this.router.navigateByUrl('');
}

  async goTickets(){
    let both = await this.storage.get("BOTH_TICKET")
    if(!both) this.router.navigateByUrl('tickets');
    else {
      this.router.navigateByUrl('lista-trenes');
      await this.storage.set("BOTH_TICKET", false);
    }
  }

}
