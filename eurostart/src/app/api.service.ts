import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  API: 'http://localhost:3000/api/';

  constructor(private http: HttpClient, private storage: Storage) { }
}
