import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import CategoryDto from 'src/app/models/category';

import { CategoryService } from 'src/app/services/category.service';
import { AdminCategoryModalComponent } from './admin-category-modal/admin-category-modal.component';
import { AdminDeleteCategoryModalComponent } from './admin-delete-category-modal/admin-delete-category-modal.component';


@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})

export class AdminCategoryListComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 20;
  constructor(
    private toastrService: ToastrService,
    public categoryService: CategoryService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.categoryService.getAllCategories();
  }

  openAddCategoryModal(): void {
    const dialog = this.dialog.open(AdminCategoryModalComponent, {
      width: '500px',
    });
  }
  openUpdateCategoryModal(category: CategoryDto) {
    const dialog = this.dialog.open(AdminCategoryModalComponent, {
      width: '500px',
      data: category
    });

  }
  openHardDeleteCategoryModal(category: CategoryDto) {
    const dialog = this.dialog.open(AdminDeleteCategoryModalComponent, {
      width: '500px',
      data: category
    });
  }
  softDeleteCategory(category: CategoryDto) {
    this.categoryService.softDeleteCategory(category.categoryId).subscribe(response => {
      this.toastrService.success(response.message || 'Status change succesfully')
      this.categoryService.getAllCategories();
    });
  }
}
