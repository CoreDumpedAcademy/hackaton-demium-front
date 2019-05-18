import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response-train';
import {APIService} from '../api.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  citiesList= ['Madrid',
    'Barcelona',
    'Malaga',
    'Granada',
    'Pamplona']
  fromDate:string;
  data= {};
  toDate:string;
  numberPassengers:number = 0;
  cityFrom:string = "";
  cityTo:string = "";
  numberChilds:number = 0;
  constructor(private apiService:APIService, private storage:Storage, private router:Router) { }
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
  async sendData(){
    if(this.cityFrom != '' && this.cityTo != '' && this.cityFrom != this.cityTo && this.numberPassengers > 0){
      const dataUrl = this.cityFrom + "/" + this.cityTo + "/" + this.numberPassengers + "/" + this.numberChilds;
      console.log(dataUrl.toLowerCase());
      let dataObject:any;
      await this.apiService.sendDataTrain(dataUrl)

      this.router.navigateByUrl('lista-trenes')
    }


  }
  ngOnInit() {
    this.fromDate=new Date().toISOString();


  }

}
