import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response-train';
import {APIService} from '../api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotelsearch',
  templateUrl: './hotelsearch.page.html',
  styleUrls: ['./hotelsearch.page.scss'],
})
export class HotelsearchPage implements OnInit {
  citiesList= ['Madrid',
  'Barcelona',
  'Malaga',
  'Granada',
  'Pamplona']
  numberNights:number = 0;
  numberPassengers:number = 0;
  numberChilds:number = 0;
  place:string ="";
  constructor(private apiService:APIService, private storage:Storage, private router:Router) { }
  addNight(){
  this.numberNights++;
}
subNight(){
  if(this.numberNights > 0) this.numberNights--;
}
addPassenger(){
  this.numberPassengers++;
}
subPassenger(){
  if(this.numberPassengers > 0) this.numberPassengers = this.numberPassengers - 1

}
addChild(){
  this.numberChilds++;
}
subChild(){
  if(this.numberChilds > 0) this.numberChilds--;
}
ngOnInit() {
}
async sendData(){
  if(this.place != "" && this.numberPassengers > 0 && this.numberNights > 0){
    const dataUrl = this.place + "/" + this.numberPassengers + "/" + this.numberChilds + "/" + this.numberNights;
    console.log(dataUrl.toLowerCase());
    await this.apiService.sendDataHotel(dataUrl.toLowerCase())
    let datos = await this.storage.get("HOTEL");
    console.log(datos);
    //this.router.navigateByUrl('listahoteles');
  }


}
}