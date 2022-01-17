import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import CategoryDto from "../../models/category";

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.css']
})
export class BlogArticlesComponent implements OnInit {
  filterText: string;
  articles: ArticleDto[] = [];
  loadSpinner: boolean = false;
  categories: CategoryDto[]
  page = 1;
  count = 0;
  tableSize = 10;
  constructor(
    private activatedRoute: ActivatedRoute,
    public articleService: ArticleService
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
  onTableDataChange(event: any) {
    this.page = event;
    this.articleService.getArticles();
  }

  getByCategory(categoryId: number) {
    this.loadSpinner = true;
    this.articleService.getArticlesByCategory(categoryId).subscribe(response => {
      this.articles = response.data
      this.loadSpinner = false;
    })
  }

  search(filterText:string) {
    this.filterText = this.filterText.toLowerCase();
    this.articleService.filteredArticles = this.articleService.articles.filter((article: ArticleDto) => {
      return article.name.toLowerCase().indexOf(this.filterText) > -1
    })
  }





}
