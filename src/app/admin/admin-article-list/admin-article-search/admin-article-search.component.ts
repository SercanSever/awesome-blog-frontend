import { Component } from '@angular/core';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-article-search',
  templateUrl: './admin-article-search.component.html',
  styleUrls: ['./admin-article-search.component.css']
})
export class AdminArticleSearchComponent {

  filterText: string;

  constructor(private articleService: ArticleService) { }

  search(filterText: string) {
    filterText = filterText.toLowerCase();
    this.articleService.filteredArticles = this.articleService.articles.filter((article: ArticleDto) => {
      return article.name.toLowerCase().indexOf(filterText) > -1
    })
  }

}
