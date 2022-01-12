import { Component, OnInit } from '@angular/core';
import CategoryDto from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent implements OnInit {
  categories: CategoryDto[] = [];
  currentCategory: CategoryDto;
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }

  setCurrentCategory(category: CategoryDto) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: CategoryDto) {
    if (category == this.currentCategory) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }

  getAllCategoryClass() {
    if (!this.currentCategory) {
      return "list-group-item active"
    }
    else {
      return "list-group-item"
    }
  }

}
