import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../type';
import { Observable } from 'rxjs';

@Injectable()
export class MakeUpService {
  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://makeup-api.herokuapp.com/api/v1/products.json');
  }
}
