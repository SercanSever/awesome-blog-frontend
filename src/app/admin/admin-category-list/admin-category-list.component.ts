import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';

import { CategoryDto } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { AdminCategoryModalComponent } from '../admin-category-modal/admin-category-modal.component';


@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})

export class AdminCategoryListComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  categories: CategoryDto[] = [];
  category: CategoryDto[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog) { }
  ngOnInit(): void {
    this.getCategories();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe(response => {
      this.categories = response.data;
      this.dtTrigger.subscribe();
    })
  };

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  openAddCategoryModal(): void {
    const dialog = this.dialog.open(AdminCategoryModalComponent, {
      width: '500px',
    });
    dialog.afterClosed().subscribe(response => {
      if (response) {
        this.getCategories();
      }
    });
  }
  openUpdateCategoryModal(category: CategoryDto) {
    const dialog = this.dialog.open(AdminCategoryModalComponent, {
      width: '500px',
      data: category
    });
    dialog.afterClosed().subscribe(response => {
      if (response) {
        this.getCategories();
      }
    });
  }

}
