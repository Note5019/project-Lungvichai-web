import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Category } from 'src/app/models/category';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModalComponent } from '../category-modal/category-modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryList: Category[] = [];
  constructor(private http: HttpService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getCate();
    // await (res) => {this.categoryList = this.data;}; 
    console.log('cat', this.categoryList);
  }

  getCate() {
    this.http.get('categories').subscribe(res => {
      res.forEach(element => {
        console.log('ele', element);
        this.categoryList.push(element);
      });
      // this.categoryList = res;
      console.log('data1', this.categoryList);
    });
  }
  openCategory(option: string, categoryID?: string) {
    const modalRef = this.modalService.open(CategoryModalComponent);
    modalRef.componentInstance.option = option;
    modalRef.componentInstance.categoryID = categoryID;
  }

}
