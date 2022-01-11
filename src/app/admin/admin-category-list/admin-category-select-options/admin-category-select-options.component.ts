import { Component } from '@angular/core';
import { CategoryDto } from 'src/app/models/category';
import { SelectFilter } from 'src/app/models/selectFilter';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-select-options',
  templateUrl: './admin-category-select-options.component.html',
  styleUrls: ['./admin-category-select-options.component.css']
})
export class AdminCategorySelectOptionsComponent {

  filters: SelectFilter[] = [
    { value: 0, viewValue: 'Asc' },
    { value: 1, viewValue: 'Desc' },
    { value: 2, viewValue: 'Updated' },
  ];
  constructor(private categoryService: CategoryService) { }

  filterCategory(filter: string) {
    filter = filter.toLowerCase();
    if (filter === 'updated') {
      this.categoryService.filteredCategories = this.categoryService.categories.filter((category: CategoryDto) => {
        return category.updateDate !== null;
      });
      this.categoryService.filteredCategories
    } else if (filter === 'desc') {
      this.categoryService.filteredCategories = this.categoryService.categories.sort((a, b) => a.uploadDate > b.uploadDate ? -1 : 1)
    } else {
      this.categoryService.filteredCategories = this.categoryService.categories.sort((a, b) => a.uploadDate > b.uploadDate ? 1 : -1)
    }
  }
}

