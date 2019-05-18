import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import {ApiResponse } from './api-response-train'

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API = 'http://localhost:3000/';

  constructor(private http: HttpClient, private storage: Storage) { }

  getData() {
    return this.http.get(`${this.API}tickets/all`);
  }
  async sendDataTrain(urlData:string){
    let price;
    let object = {};
     await this.http.get(`${this.API}train/getPrice/${urlData}`).subscribe(
        data =>{
          this.storage.set("TRAVEL", data);

       }
     );
  }
  async sendDataHotel(urlData:string){
    let price;
    let object = {};
     await this.http.get(`${this.API}hotel/getPrice/${urlData}`).subscribe(
        data =>{
          this.storage.set("HOTEL", data);

       }
     );
  }
  
}
