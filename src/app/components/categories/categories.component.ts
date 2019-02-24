import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Category } from 'src/app/models/category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryList: Category[] = [];
  isCardOpen: boolean = true;
  categoryForm: FormGroup;

  constructor(
    private http: HttpService,
    private fb: FormBuilder
  ) { 
    this.categoryForm = this.fb.group({
      categoryID: [''],
      categoryName: [''],
      categoryDate: [this.splitDate(new Date().toISOString())],
      categoryBy: [''],
    });
    console.log(this.splitDate(new Date().toISOString()));
    
  }
  splitDate(str:string){
    return str.split('T')[0];
  }
  ngOnInit() {
    this.getCate();
    // console.log('cat', this.categoryList);
  }

  getCate() {
    this.http.get('categories').subscribe(res => {
      res.forEach(element => {
        // console.log('ele', element);
        this.categoryList.push(element);
      });
      // this.categoryList = res;
      // console.log('data1', this.categoryList);
    });
  }
  openCard(opt: string, id: string) {
    this.isCardOpen = true;
  }

  closeCard() {
    const isClose = confirm('Close?');
    if (isClose) {
      this.isCardOpen = false;
    }
  }

  onSubmit(categoryForm:FormGroup){
    console.log(categoryForm.value);
  }

}
