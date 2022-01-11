import { Component } from '@angular/core';
import { CategoryDto } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-search',
  templateUrl: './admin-category-search.component.html',
  styleUrls: ['./admin-category-search.component.css']
})
export class AdminCategorySearchComponent {

  filterText: string;
  constructor(private categoryService: CategoryService) { }

  search(filterText: string) {
    filterText = filterText.toLowerCase();
    this.categoryService.filteredCategories = this.categoryService.categories.filter((category: CategoryDto) => {
      return category.name.toLowerCase().indexOf(filterText) > -1;
    });
  }

}
