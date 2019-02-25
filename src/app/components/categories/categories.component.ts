import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Category } from 'src/app/models/category';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryList: Category[];
  isCardOpen: boolean = false;
  isAddOpt: boolean = undefined;
  categoryForm: FormGroup;
  constructor(
    private http: HttpService,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      categoryID: [''],
      categoryName: [''],
      createdDate: [this.splitDate(new Date().toISOString())],
      createdBy: [''],
      updatedDate: [this.splitDate(new Date().toISOString())],
      updatedBy: [''],
    });
    // console.log(this.splitDate(new Date().toISOString()));

  }
  splitDate(str: string) {
    return str.split('T')[0];
  }
  ngOnInit() {
    this.getCate();
  }

  getCate() {
    this.http.get2('categories').subscribe({
      next: (response: any[]) => {
        this.categoryList = response.map((res) => {
          return new Category(res);
        });
        // console.log(response);
        // console.log(this.categoryList);
      }
    });
  }

  openCard(opt: string, selector: Category) {
    this.isCardOpen = true;
    if (opt == 'ADD') {
      this.isAddOpt = true;
      this.categoryForm.patchValue({
        createdDate: this.splitDate(new Date().toISOString()),
        updatedDate: this.splitDate(new Date().toISOString()),
      });
    }
    else {
      this.isAddOpt = false;
      this.categoryForm.patchValue({
        categoryID: selector.categoryID,
        categoryName: selector.categoryName,
        createdDate: selector.createdDate,
        createdBy: selector.createdBy,
        updatedDate: this.splitDate(new Date().toISOString()),
        updatedBy: selector.updatedBy,
      });
    }
  }

  closeCard(categoryForm: FormGroup) {
    console.log(categoryForm.pristine);

    const isClose = (categoryForm.pristine) ? true : confirm('Close?');
    if (isClose) {
      this.isCardOpen = false;
      this.isAddOpt = undefined;
      categoryForm.reset();
    }
  }

  onSubmit(categoryForm: FormGroup) {
    const data = new Category(categoryForm.value);
    console.log(data);
    if(this.isAddOpt){
      this.http.post('categories',data).subscribe({
        next: (response:any) => {
          console.log(response);
        },
        error: (err)=>{
          console.log(err);
        }
      });
    }
    else{

    }
  }

}
