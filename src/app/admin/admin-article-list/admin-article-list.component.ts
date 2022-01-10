import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-admin-article-list',
  templateUrl: './admin-article-list.component.html',
  styleUrls: ['./admin-article-list.component.css']
})
export class AdminArticleListComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  articles: ArticleDto[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private articleService: ArticleService) { }
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    this.getArticles();
  }

  getArticles() {
    this.articleService.getArticles().subscribe(response => {
      this.articles = response.data;
      this.dtTrigger.subscribe();
    })
  };

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


}
