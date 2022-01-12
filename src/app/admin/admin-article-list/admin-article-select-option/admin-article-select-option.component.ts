import { Component, OnInit } from '@angular/core';
import ArticleDto from 'src/app/models/article';
import { SelectFilter } from 'src/app/models/selectFilter';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-article-select-option',
  templateUrl: './admin-article-select-option.component.html',
  styleUrls: ['./admin-article-select-option.component.css']
})
export class AdminArticleSelectOptionComponent {

  filters: SelectFilter[] = [
    { value: 0, viewValue: 'Asc' },
    { value: 1, viewValue: 'Desc' },
    { value: 2, viewValue: 'Updated' },
  ];

  constructor(private articleService: ArticleService) { }

  filterArticle(filter: string) {
    filter = filter.toLowerCase();
    if (filter === 'updated') {
      this.articleService.filteredArticles = this.articleService.articles.filter((article: ArticleDto) => {
        return article.updateDate !== null;
      });
      this.articleService.filteredArticles
    } else if (filter === 'desc') {
      this.articleService.filteredArticles = this.articleService.articles.sort((a, b) => a.uploadDate > b.uploadDate ? -1 : 1)
    } else {
      this.articleService.filteredArticles = this.articleService.articles.sort((a, b) => a.uploadDate > b.uploadDate ? 1 : -1)
    }
  }
}
