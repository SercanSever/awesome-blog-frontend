import { Component, OnInit } from '@angular/core';
import CategoryDto from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-blog-categories',
  templateUrl: './blog-categories.component.html',
  styleUrls: ['./blog-categories.component.css']
})
export class BlogCategoriesComponent implements OnInit {
  filterText:string ='';
  categories: CategoryDto[] = [];
  currentCategory: CategoryDto;
  constructor(public categoryService: CategoryService,
              private articleService: ArticleService,) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }


}

