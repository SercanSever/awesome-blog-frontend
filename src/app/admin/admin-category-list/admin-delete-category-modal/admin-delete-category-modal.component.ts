import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import CategoryDto from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-delete-category-modal',
  templateUrl: './admin-delete-category-modal.component.html',
  styleUrls: ['./admin-delete-category-modal.component.css']
})
export class AdminDeleteCategoryModalComponent {

  constructor(
    private toastrService: ToastrService,
    private dialogRef: MatDialogRef<AdminDeleteCategoryModalComponent>,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: CategoryDto
  ) { }

  deleteCategory() {
    this.categoryService.hardDeleteCategory(this.data.categoryId).subscribe(response => {
      this.categoryService.getAllCategories();
      this.dialogRef.close();
      this.toastrService.success(response.message || 'Successfully deleted.');
    })
  }
}
