import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {ApiResponse } from './api-response-train'
@Injectable({
  providedIn: 'root'
})
export class APIService {

  API = 'http://172.18.0.1:3000/';

  constructor(private http: HttpClient, private storage: Storage) { }

  getData() {
    return this.http.get(`${this.API}tickets/all`);
  }
  async sendTicketTrain(name_:string, surname_:string, adults_, children_, from_:string, to_:string){
    const params = new HttpParams()
    .set('name', name_)
    .set('surname', surname_)
    .set('adults', adults_.toString())
    .set('children', children_.toString())
    .set('from', from_.toString())
    .set('to', to_.toString())
    .set('city', to_.toString())
    .set('isTrain', 'true');
    
    const datos = {      
      name:name_, 
      surname:surname_,
      adults:adults_,
      children:children_,
      from:from_,
      to:to_,
      city:to_,
      isTrain:true}
    await this.http.post(`${this.API}tickets/save`,params, {headers:{'content-type':'application/x-www-form-urlencoded'}}).subscribe(data=>{console.log(data)});
  }
  async sendTicketHotel(name_:string, surname_:string, adults_:number, children_:number, city_:string){
    const params = new HttpParams()
    .set('name', name_)
    .set('surname', surname_)
    .set('adults', adults_.toString())
    .set('children', children_.toString())
    .set('from', city_.toString())
    .set('to', city_.toString())
    .set('city', city_.toString())
    .set('isTrain', 'true');
    await this.http.post(`${this.API}tickets/save`,params).subscribe(data=>{console.log(data)});

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
