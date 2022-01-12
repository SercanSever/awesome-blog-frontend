import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import CategoryDto from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-modal',
  templateUrl: './admin-category-modal.component.html',
  styleUrls: ['./admin-category-modal.component.css']
})
export class AdminCategoryModalComponent implements OnInit {
  dateTime = new Date();
  categoryAddForm: FormGroup;
  constructor(
    private toastrService: ToastrService,
    private dialogRef: MatDialogRef<AdminCategoryModalComponent>,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: CategoryDto
  ) { }

  ngOnInit(): void {
    this.categoryAddForm = this.formBuilder.group({
      name: [this.data?.name || '', [Validators.required, Validators.maxLength(20)]],
      uploadDate: [this.data ? this.data.uploadDate : this.dateTime],
      updateDate: [this.data ? this.dateTime : '']
    })
  }

  addCategory(): void {
    this.categoryService.addCategory(this.categoryAddForm.value).subscribe(response => {
      this.categoryService.getAllCategories();
      this.dialogRef.close();
      this.toastrService.success(response.message || 'Added Successfully');
    })
  }

  updateCategory(): void {
    this.categoryService.updateCategory(this.categoryAddForm.value).subscribe(response => {
      this.categoryService.getAllCategories();
      this.dialogRef.close();
      this.toastrService.success(response.message || 'Updated Successfully');
    })
  }


}
