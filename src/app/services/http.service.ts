import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable, of } from 'rxjs';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  // getHeroes (): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched heroes')),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }

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
  put(endpoint, obj) {
    return this.http.put(this.hostUrl + endpoint, obj).map(res => {
      console.log(res);
      return res.json();
    });
  }
  delete(endpoint, id) {
    return this.http.delete(this.hostUrl + endpoint + `/${id}`).map(res => {
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
  put2(endpoint, obj) {
    return this.httpC.put(this.hostUrl + endpoint, obj).map((res:any) => {
      console.log(res);
      return res.json();
    });
  }
}
