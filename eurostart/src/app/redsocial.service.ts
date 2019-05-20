import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedsocialService {

  API = 'http://172.18.0.1:3000/';

  constructor(private router:Router, private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.API}/socialNet/all`)
  }

  postData(data) {
    return this.http.post(`${this.API}/socialNet/save`, data)
  }
}
