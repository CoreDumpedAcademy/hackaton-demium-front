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
  numberNights:number = 1;
  numberPassengers:number = 1;
  numberChilds:number = 0;
  place:string ="Madrid";
  bothTickets:boolean = false;
  cityFrom:string ="";
  name:string="";
  lastName:string="";
  errorText:string="";
  constructor(private apiService:APIService, private storage:Storage, private router:Router) { }
  addNight(){
  this.numberNights++;
}
subNight(){
  if(this.numberNights > 1) this.numberNights--;
}
addPassenger(){
  this.numberPassengers++;
}
subPassenger(){
  if(this.numberPassengers > 1) this.numberPassengers = this.numberPassengers - 1

}
addChild(){
  this.numberChilds++;
}
subChild(){
  if(this.numberChilds > 0) this.numberChilds--;
}
async ngOnInit() {
  await this.storage.set("BOTH_TICKET", false)

}
async sendData(){
  let sameFromTo = this.place == this.cityFrom;
  if(sameFromTo){
    this.errorText = "You cant take a train from "+ this.cityFrom + " to " +  this.place + ", is the same place... ";
  }else if(this.name == ""){
    this.errorText = "The name can't be in blank."
}else if(this.lastName == ""){
    this.errorText = "The last name can't be in blank."
}else{
    const dataUrl = this.place + "/" + this.numberPassengers + "/" + this.numberChilds + "/" + this.numberNights;
    console.log(dataUrl.toLowerCase());
    await this.apiService.sendDataHotel(dataUrl.toLowerCase())
    if(this.bothTickets){
      const ticketUrl = this.cityFrom + "/" + this.place + "/" + this.numberPassengers + "/" + this.numberChilds;
      await this.apiService.sendDataTrain(ticketUrl.toLowerCase());
      await this.storage.set("BOTH_TICKET", true);
    }
    this.router.navigateByUrl('listahoteles');

}

}
goHome(){
  this.router.navigateByUrl('');
}
}