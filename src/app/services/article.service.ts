import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/response-models/listResponseModel';

import { ResponseModel } from '../models/response-models/responseModel';
import ArticleDto from '../models/article';
import { SingleResponseModel } from '../models/response-models/singleResponseModel';


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
  getArticlesByCategoryName(categoryName: string): Observable<ListResponseModel<ArticleDto>> {
    return this.httpClient.get<ListResponseModel<ArticleDto>>(`${this.apiUrl}/articles/getbycategoryname?categoryName=${categoryName}`);
  }
  getArticlesByUrl(nameUrl: string): Observable<SingleResponseModel<ArticleDto>> {
    return this.httpClient.get<SingleResponseModel<ArticleDto>>(`${this.apiUrl}/articles/getbyurl?nameUrl=${nameUrl}`);
  }
  add(article: ArticleDto): Observable<SingleResponseModel<ArticleDto>> {
    return this.httpClient.post<SingleResponseModel<ArticleDto>>(`${this.apiUrl}/articles/add`, article);
  }
  softDeleteArticle(articleId: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(`${this.apiUrl}/articles/softDelete?articleId=` + articleId);
  }
  hardDeleteArticle(articleId: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(`${this.apiUrl}/articles/hardDelete?articleId=` + articleId);
  }
  getLastArticles(): Observable<ListResponseModel<ArticleDto>> {
    return this.httpClient.get<ListResponseModel<ArticleDto>>(`${this.apiUrl}/articles/getlastarticles`);
  }
}
