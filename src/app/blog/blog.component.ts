import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ArticleDto from '../models/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
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
        this.getAllArticles()
      }
    })
  }
  getAllArticles() {
    this.articleService.getArticles().subscribe((response) => {
      this.articles = response.data;
      this.dataLoaded = true;
    });
  }

  getByCategory(categoryId: number) {
    this.articleService.getArticlesByCategory(categoryId).subscribe(response => {
      this.articles = response.data
      this.dataLoaded = true;
    })
  }

}