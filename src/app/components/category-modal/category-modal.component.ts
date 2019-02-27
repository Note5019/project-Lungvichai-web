import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent implements OnInit {
  @Input() operation;
  @Input() selectedCategory: Category;
  categoryForm: FormGroup;

  headerText: string;
  constructor(
    private http: HttpService,
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      categoryID: [''],
      categoryName: [''],
      // createdDate: [this.splitDate(new Date().toISOString())],
      createdBy: [''],
      // updatedDate: [this.splitDate(new Date().toISOString())],
      updatedBy: [''],
    });
  }

  splitDate(str: string) {
    return str.split('T')[0];
  }

  ngOnInit() {
    if (this.operation == 'ADD') {
      this.headerText = 'Add new category'
      // this.categoryForm.patchValue({
      //   createdDate: this.splitDate(new Date().toISOString()),
      //   updatedDate: this.splitDate(new Date().toISOString()),
      // });
    }
    else {
      this.headerText = `Edit category: ${this.selectedCategory.categoryID}`;
      this.categoryForm.controls.categoryID.disable();
      this.categoryForm.patchValue({
        categoryID: this.selectedCategory.categoryID,
        categoryName: this.selectedCategory.categoryName,
        // createdDate: this.selectedCategory.createdDate,
        createdBy: this.selectedCategory.createdBy,
        // updatedDate: this.splitDate(new Date().toISOString()),
        updatedBy: this.selectedCategory.updatedBy,
      });
    }
  }

  closeCategoryModal(categoryForm: FormGroup) {
    console.log(categoryForm.pristine);
    const isClose = (categoryForm.pristine) ? true : confirm('Close?');
    if (isClose) {
      categoryForm.reset();
      this.activeModal.dismiss('Cross click');
    }
  }

  onSubmit(categoryForm: FormGroup) {
    console.log(this.operation);
    if (this.operation == 'ADD') {
      this.insertCategory(categoryForm);
    }
    else {
      this.updateCategory(categoryForm);
    }
  }

  insertCategory(categoryForm: FormGroup) {
    const data = new Category(categoryForm.value);
    console.log(data);
    this.http.post('categories', data).subscribe({
      next: (response: any) => {
        console.log(response);
        if (response) {
          categoryForm.reset();
          this.activeModal.close(()=>{
            console.log("closeeeeee");
          });
        }
        else {
          console.log('something wrong!');
        }
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  updateCategory(categoryForm: FormGroup) {
    const data = new Category(categoryForm.value);
    console.log('data',data);
    console.log('ยังพังอยู่จ้า');
    // this.http.put('categories', data).subscribe({
    //   next: (response: any) => {
    //     console.log(response);
    //     if (response) {
    //       categoryForm.reset();
    //       this.activeModal.close(()=>{
    //         console.log("closeeeeee");
    //       });
    //     }
    //     else {
    //       console.log('something wrong!');
    //     }
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });
  }

  deleteCategory(categoryForm: FormGroup) {
    const id = categoryForm.value.categoryID;
    console.log('data',id);
    console.log('ยังพังอยู่จ้า2');
    // this.http.delete('categories', id).subscribe({
    //   next: (response: any) => {
    //     console.log(response);
    //     if (response) {
    //       categoryForm.reset();
    //       this.activeModal.close(()=>{
    //         console.log("closeeeeee");
    //       });
    //     }
    //     else {
    //       console.log('something wrong!');
    //     }
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // });
  }
}
