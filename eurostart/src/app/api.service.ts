import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API: 'http://localhost:3000/';

  constructor(private http: HttpClient, private storage: Storage) { }

  getData() {
    return this.http.get(`${this.API}api`)
  }

}
