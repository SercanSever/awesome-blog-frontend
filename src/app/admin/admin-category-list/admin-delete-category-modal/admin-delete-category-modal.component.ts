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
  showSpinner: boolean = false;
  constructor(
    private toastrService: ToastrService,
    private dialogRef: MatDialogRef<AdminDeleteCategoryModalComponent>,
    private categoryService: CategoryService,
    @Inject(MAT_DIALOG_DATA) public data: CategoryDto
  ) { }

  deleteCategory() {
    this.showSpinner = true;
    this.categoryService.hardDeleteCategory(this.data.categoryId).subscribe(response => {
      this.getSuccess(response.message || 'Successfully deleted.');

    })
  }
  getSuccess(message: string): void {
    this.categoryService.getAllCategories();
    this.dialogRef.close();
    this.showSpinner = false;
    this.toastrService.success(message);
  }
}
