import { Component, OnInit } from '@angular/core';
import ArticleDto from 'src/app/models/article';
import CategoryDto from 'src/app/models/category';
import { SelectFilter } from 'src/app/models/selectFilter';
import { ArticleService } from 'src/app/services/article.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-article-filter-category',
  templateUrl: './admin-article-filter-category.component.html',
  styleUrls: ['./admin-article-filter-category.component.css']
})
export class AdminArticleFilterCategoryComponent implements OnInit {
  category: CategoryDto;
  filters: SelectFilter[];
  constructor(
    public categoryService: CategoryService,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }

  filterArticleByCategory(categoryId: number) {
    this.articleService.getArticlesByCategory(categoryId).subscribe(response => {
      this.articleService.filteredArticles = response.data
    })
  }
}
