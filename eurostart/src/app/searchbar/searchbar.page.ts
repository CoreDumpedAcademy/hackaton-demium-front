import { Component, OnInit } from '@angular/core';
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
  fromDate:string= new Date().toISOString();
  toDate:string;
  numberPassengers:number = 0;
  constructor() { }
  addPassenger(){
    this.numberPassengers++;
  }
  subPassenger(){
    if(this.numberPassengers > 0) this.numberPassengers = this.numberPassengers - 1

  }
  ngOnInit() {
    this.fromDate="";

  }

}
