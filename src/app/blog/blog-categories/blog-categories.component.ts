import { Component, OnInit } from '@angular/core';
import CategoryDto from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent implements OnInit {
  filterText: string = '';
  categories: CategoryDto[] = [];
  currentCategory: CategoryDto;
  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }


}

