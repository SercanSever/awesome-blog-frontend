import { Component, OnInit } from '@angular/core';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-blog-info',
  templateUrl: './blog-info.component.html',
  styleUrls: ['./blog-info.component.css']
})
export class BlogInfoComponent implements OnInit {

  articles: ArticleDto[] = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getLastArticles();
  }

  getLastArticles() {
    this.articleService.getLastArticles().subscribe(response => {
      this.articles = response.data;
    })
  }
}
