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

  }

}
