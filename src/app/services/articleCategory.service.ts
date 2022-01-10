import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ArticleCategory } from '../models/articleCategory';
import { ListResponseModel } from '../models/response-models/listResponseModel';

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
}
