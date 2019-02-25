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
    private http: Http,
    private httpC: HttpClient
  ) {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.options.headers = this.headers;
  }

  get(endpoint) {
    console.log(this.hostUrl + endpoint);
    return this.http.get(this.hostUrl + endpoint, this.options).map(res => {
      // console.log(res);
      return res.json();
    });
  }
  post(endpoint, obj) {
    return this.http.post(this.hostUrl + endpoint, obj, this.options).map(res => {
      console.log(res);
      return res.json();
    });
  }
  get2(endpoint) {
    console.log(this.hostUrl + endpoint);
    return this.httpC.get(this.hostUrl + endpoint);
  }
  post2(endpoint, obj) {
    return this.httpC.post(this.hostUrl + endpoint, obj);
  }
}
