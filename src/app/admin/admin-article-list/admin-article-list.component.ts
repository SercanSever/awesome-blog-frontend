import { Component, OnInit } from '@angular/core';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.css']
})
export class AdminArticleListComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 20;

  constructor(public articleService: ArticleService) { }
  ngOnInit(): void {
    this.articleService.getArticles();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.articleService.getArticles();
  }
  openUpdatearticleModal(article: ArticleDto) {

  }
  softDeletearticle(article: ArticleDto) {

  }
}
