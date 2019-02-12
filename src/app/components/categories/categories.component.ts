import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  data:any;
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.data = this.http.get('categories');
  }

}
