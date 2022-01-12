import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { parseDate } from 'igniteui-angular/lib/core/utils';
import ArticleDto from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-article-date-select',
  templateUrl: './admin-article-date-select.component.html',
  styleUrls: ['./admin-article-date-select.component.css']
})
export class AdminArticleDateSelectComponent implements OnInit {
  startDate: Date
  endDate: Date
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {

  }

  addRangeToData(startDate: Date, endDate: Date) {
    let start = startDate.toLocaleDateString()
    let end = endDate.toLocaleDateString()
    this.articleService.filteredArticles = this.articleService.articles.filter((article: ArticleDto) => {
      return new Date(article.uploadDate).toLocaleDateString() >= start && new Date(article.uploadDate).toLocaleDateString() <= end;
    })
  }
}

