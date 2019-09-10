import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  findProducts(searchText: string) {
     return this.http.get<any>(`https://my-json-server.typicode.com/ebedoyaalzate/fakeServe/db`, {});
  }

  productDetail(id) {
    return this.http.get<any>(`https://my-json-server.typicode.com/ebedoyaalzate/fakeProducts/products/${id}`, {});
  }
}
