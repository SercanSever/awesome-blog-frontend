import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import CategoryDto from "../../models/category";
import { CategoryService } from "../../services/category.service";

@Component({
  selector: 'app-blog-articles',
  templateUrl: './blog-articles.component.html',
  styleUrls: ['./blog-articles.component.css']
})
export class BlogArticlesComponent implements OnInit {
  filterText: string;
  articles: ArticleDto[] = [];
  articleCategories: string[] = [];
  loadSpinner: boolean = false;
  categories: CategoryDto[]
  articleId: number;
  page = 1;
  count = 0;
  tableSize = 5;

  constructor(
    private activatedRoute: ActivatedRoute,
    public articleService: ArticleService,
    public categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    // if (!localStorage.getItem('hello')) {
    //   localStorage.setItem('hello', 'no reload')
    //   location.reload()
    // } else {
    //   localStorage.removeItem('hello')
    // }

    this.activatedRoute.params.subscribe(params => {
      if (params["name"]) {
        this.getByCategory(params["name"])
      } else {
        this.articleService.getArticles()
      }
    })
  }

  getByCategory(name: string) {
    this.loadSpinner = true;
    this.articleService.getArticlesByCategoryName(name).subscribe(response => {
      this.articleService.filteredArticles = response.data;
      this.loadSpinner = false;
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.articleService.getArticles();
  }

  search(filterText: string) {
    this.filterText = this.filterText.toLowerCase();
    this.articleService.filteredArticles = this.articleService.articles.filter((article: ArticleDto) => {
      return article.name.toLowerCase().indexOf(this.filterText) > -1
    })
  }






}
