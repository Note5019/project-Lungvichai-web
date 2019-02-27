import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Category } from 'src/app/models/category';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryModalComponent } from '../category-modal/category-modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryList: Category[];

  constructor(
    private http: HttpService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getCate();
  }

  getCate() {
    this.http.get2('categories').subscribe({
      next: (response: any[]) => {
        this.categoryList = response.map((res) => {
          return new Category(res);
        });
      }
    });
  }

  openCategoryModal(opt: string, c?: Category) {
    const modalRef = this.modalService.open(CategoryModalComponent, { size: 'lg' });
    modalRef.result.then(
      (result) => {
        result();
        // console.log(result, 'When user closes');
        this.getCate();
      },
      (result) => {
        // console.log(result, 'Backdrop click');
        // this.getCate();
      });
    modalRef.componentInstance.operation = opt;
    modalRef.componentInstance.selectedCategory = c;
  }
}
