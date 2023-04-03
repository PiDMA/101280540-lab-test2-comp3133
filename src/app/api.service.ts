import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'https://api.spacexdata.com/v3/launches'; 

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
