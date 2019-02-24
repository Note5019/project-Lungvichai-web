import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http'; 
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = 'http://localhost:4200/';
  hostUrl = 'http://localhost/lungvichaiAPI/index.php/';

  headers = new Headers();
  options = new RequestOptions();

  constructor(
    private http2: Http,
    private http: HttpClient
  ) {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.options.headers = this.headers;
  }

  get(endpoint){
    console.log(this.hostUrl+ endpoint);
    return this.http2.get(this.hostUrl+ endpoint, this.options).map(res =>{
      // console.log(res);
      return  res.json();
    });
  }

}
