import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { ProductModel } from '../shared/models/product.model';

@Injectable({ providedIn: 'root' })

export class ProductsService {
  
  constructor(
    private http: HttpClient,
  ) { }
  
  
  getAll() {
    return this.http.get<ProductModel[]>(`${environment.apiUrl}/api/products/`);
  }

}

