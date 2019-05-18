import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import {ApiResponse } from './api-response'

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API: 'http://localhost:3000/';

  constructor(private http: HttpClient, private storage: Storage) { }

  getData() {
    return this.http.get(`${this.API}all`);
  }
  sendDataTrain(urlData:string){
     return this.http.get(`${this.API}train/getPrice/`);
  }
}
