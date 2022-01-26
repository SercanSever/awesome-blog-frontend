import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleService} from "../../services/article.service";
import ArticleDto from "../../models/article";

@Component({
  selector: 'app-blog-article-detail',
  templateUrl: './blog-article-detail.component.html',
  styleUrls: ['./blog-article-detail.component.css']
})
export class BlogArticleDetailComponent implements OnInit {

  loadSpinner: boolean = false;
  article :ArticleDto;

  constructor(
    private activatedRoute:ActivatedRoute,
    private articleService:ArticleService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.getArticleByUrl(params.toString())
    })

  }

  getArticleByUrl(nameUrl: string){
    this.articleService.getArticlesByUrl(nameUrl).subscribe(response=>{
      this.article = response.data;
    });
  }

}
