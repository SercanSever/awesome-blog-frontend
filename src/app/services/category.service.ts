import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/response-models/listResponseModel';

import { environment } from 'src/environments/environment';
import { CategoryDto } from '../models/category';
import { ResponseModel } from '../models/response-models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient) { }

  getAllCategories(): Observable<ListResponseModel<CategoryDto>> {
    return this.httpClient.get<ListResponseModel<CategoryDto>>(`${this.apiUrl}/categories/getAll`);
  }
  addCategory(category: CategoryDto): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/categories/add`, category);
  }
  updateCategory(category: CategoryDto): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(`${this.apiUrl}/categories/update`, category);
  }
}
