import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-trenes',
  templateUrl: './lista-trenes.page.html',
  styleUrls: ['./lista-trenes.page.scss'],
})
export class ListaTrenesPage implements OnInit {

  data: {
    destino: String,
    origen: String,
    personas: Number,
    precio: Number
  }

  constructor() { }

  loadData() {
    
  }

  ngOnInit() {
  }

}
