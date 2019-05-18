import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../api-response';
import {APIService} from '../api.service';
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
  constructor(private apiService:APIService) { }
  addPassenger(){
    this.numberPassengers++;
  }
  subPassenger(){
    if(this.numberPassengers > 0) this.numberPassengers = this.numberPassengers - 1

  }
  senData(){
    if(this.cityFrom != "" && this.cityTo != "" && this.cityFrom != this.cityTo && this.numberPassengers > 0){
      const dataUrl = this.cityFrom + "/" + "/" + this.cityTo + "/" + this.numberPassengers;
      this.data.train.destino = this.cityTo;
      this.data.train.origen = this.cityFrom;
      this.data.train.personas = this.numberPassengers;
      this.apiService.sendDataTrain(dataUrl).subscribe(
        data => {

        }
      )
    }


  }
  ngOnInit() {
    this.fromDate=new Date().toISOString();

  }

}
