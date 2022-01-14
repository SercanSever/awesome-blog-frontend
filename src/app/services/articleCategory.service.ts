import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ArticleDto from '../models/article';
import { ArticleCategory } from '../models/articleCategory';
import { ListResponseModel } from '../models/response-models/listResponseModel';
import { ResponseModel } from '../models/response-models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleCategoryService {
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient) { }

  getAllArticleCategories(): Observable<ListResponseModel<ArticleCategory>> {
    return this.httpClient.get<ListResponseModel<ArticleCategory>>(`${this.apiUrl}/articleCategories/getAll`);
  }
  add(articleId: number, categoryNames: string[]): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/articleCategories/addCategory?articleId=` + articleId, categoryNames);
  }
}
