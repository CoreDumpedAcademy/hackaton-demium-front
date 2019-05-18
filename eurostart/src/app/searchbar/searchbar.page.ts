import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response-train';
import {APIService} from '../api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  citiesList= ['Madrid',
    'Barcelona',
    'Málaga',
    'Granada',
    'Pamplona']
  fromDate:string;
  data:ApiResponse;
  toDate:string;
  numberPassengers:number = 0;
  cityFrom:string = "";
  cityTo:string = "";
  constructor(private apiService:APIService, private storage:Storage) { }
  addPassenger(){
    this.numberPassengers++;
  }
  subPassenger(){
    if(this.numberPassengers > 0) this.numberPassengers = this.numberPassengers - 1

  }
  senData(){
    if(this.cityFrom != "" && this.cityTo != "" && this.cityFrom != this.cityTo && this.numberPassengers > 0){
      const dataUrl = this.cityFrom + "/" + "/" + this.cityTo + "/" + this.numberPassengers;
      this.data.destino = this.cityTo;
      this.data.origen = this.cityFrom;
      this.data.personas = this.numberPassengers;
      this.apiService.sendDataTrain(dataUrl).subscribe((
        data:{datares:ApiResponse}) => {
          this.data.precio = data.datares.precio;
      })
      this.storage.set('TRAVEL', this.data);
    }


  }
  ngOnInit() {
    this.fromDate=new Date().toISOString();

  }

}
