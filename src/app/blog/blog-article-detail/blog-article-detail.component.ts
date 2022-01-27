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
  refreshCount:number =0;
  constructor(
    private activatedRoute:ActivatedRoute,
    private articleService:ArticleService) { }

  ngOnInit(): void {
    // if (!localStorage.getItem('hello')) {
    //   localStorage.setItem('hello', 'no reload')
    //   location.reload()
    // } else {
    //   localStorage.removeItem('hello')
    // }

    this.activatedRoute.params.subscribe(params=>{
      this.getArticleByUrl(params['nameUrl'])
    })
  }

  getArticleByUrl(nameUrl: string){
    this.articleService.getArticlesByUrl(nameUrl).subscribe(response=>{
      this.article = response.data;
    });
  }

}
