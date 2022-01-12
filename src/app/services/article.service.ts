import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/response-models/listResponseModel';

import { ResponseModel } from '../models/response-models/responseModel';
import ArticleDto from '../models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: ArticleDto[];
  filteredArticles: ArticleDto[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  getArticles() {
    return this.httpClient.get<ListResponseModel<ArticleDto>>(`${this.apiUrl}/articles/getAll`)
      .subscribe(response => {
        this.articles = this.filteredArticles = response.data;
      });
  }
  getArticlesByCategory(categoryId: number): Observable<ListResponseModel<ArticleDto>> {
    return this.httpClient.get<ListResponseModel<ArticleDto>>(`${this.apiUrl}/articles/getbycategory?categoryId=${categoryId}`);
  }
  add(article: ArticleDto): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/articles/add`, article);
  }
  softDeleteArticle(articleId: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(`${this.apiUrl}/articles/softDelete?articleId=` + articleId);
  }
  hardDeleteArticle(articleId: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(`${this.apiUrl}/articles/hardDelete?articleId=` + articleId);
  }
}
