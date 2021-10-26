import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  addProduct(product: any): Observable<any> {
    console.log(product)
    return this.http.post("http://localhost:8080/api/product/addProduct", product);
  }

  getProduct(product: any): Observable<any> {
    return this.http.get("http://localhost:8080/api/product/getProduct", product)
  }

  updateProduct(product: any): Observable<any> {
    return this.http.put("http://localhost:8080/api/product/updateProduct", product)
  }
}
