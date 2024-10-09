import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl:any="http://localhost:3000/";
  headers:HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  })

  constructor(private http:HttpClient) { }

  getdata(endpoint:any){
    const url = this.baseurl + endpoint;
    return this.http.get(url, { headers: this.headers })
  }
}
