import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent implements OnInit {
  @Input() categoryID;
  @Input() option;
  categoryForm = this.fb.group({
    categoryID: ['',{disabled: true}],
    categoryName: [''],
    categoryDate: [''],
    categoryBy: [''],
  });
  constructor(public activeModal: NgbActiveModal, private http: HttpService,private fb: FormBuilder) { }

  ngOnInit() {
    if(this.option != 'ADD'){
      this.getData();
    }
  }
  getData(){
    this.http.get('categories/'+this.categoryID).subscribe(res => {
      console.log(res);
      
      this.categoryForm.patchValue({
        categoryID: res[0].categoryID,
        categoryName: res[0].categoryName,
        categoryDate: res[0].createdDate,
        categoryBy: res[0].createdBy,
      }); 
    });
  }
}
