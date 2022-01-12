import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/response-models/listResponseModel';
import { ResponseModel } from '../models/response-models/responseModel';
import CategoryDto from '../models/category';
import ArticleDto from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: CategoryDto[];
  filteredCategories: CategoryDto[];
  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient
  ) { }

  getAllCategories() {
    return this.httpClient.get<ListResponseModel<CategoryDto>>(`${this.apiUrl}/categories/getAll`)
      .subscribe(response => {
        this.categories = this.filteredCategories = response.data;
      });
  }
  getCategoriesByArticleId(articleId: number): Observable<ListResponseModel<CategoryDto>> {
    return this.httpClient.get<ListResponseModel<CategoryDto>>(`${this.apiUrl}/categories/getByArticleId?articleId=` + articleId);
  }
  addCategory(category: CategoryDto): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/categories/add`, category);
  }
  updateCategory(category: CategoryDto): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(`${this.apiUrl}/categories/update`, category);
  }
  hardDeleteCategory(categoryId: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(`${this.apiUrl} /categories/hardDelete?categoryId=` + categoryId);
  }
  softDeleteCategory(categoryId: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(`${this.apiUrl}/categories/softDelete?categoryId=` + categoryId);
  }
}
