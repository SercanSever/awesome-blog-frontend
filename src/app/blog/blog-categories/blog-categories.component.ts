import { Component, OnInit } from '@angular/core';
import CategoryDto from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import {ArticleService} from "../../services/article.service";

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
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }

  search(filterText:string){
  this.filterText = this.filterText.toLowerCase();
  this.categoryService.filteredCategories = this.categoryService.categories.filter((category:CategoryDto) => {
    return category.name.toLowerCase().indexOf(this.filterText) > -1
  })
}
  filterArticleByCategory(categoryId: number) {
    if (categoryId == 0){
      this.articleService.getArticles()
    }else{
      this.articleService.getArticlesByCategory(categoryId).subscribe(response => {
        this.articleService.filteredArticles = response.data
      })
    }
  }



}

