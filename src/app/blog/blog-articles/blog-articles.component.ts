import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.css']
})
export class BlogArticlesComponent implements OnInit {
  filterText: string = '';
  articles: ArticleDto[] = [];
  dataLoaded: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getByCategory(params["categoryId"])
      } else {
        this.articleService.getArticles()
      }
    })
  }

  getByCategory(categoryId: number) {
    this.articleService.getArticlesByCategory(categoryId).subscribe(response => {
      this.articles = response.data
      this.dataLoaded = true;
    })
  }
}
