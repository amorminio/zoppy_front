import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiZoppyService {

  constructor(private http: HttpClient) { }

  client_list(): Observable<any> {
    const url = 'http://localhost:3000/client';
    return this.http.get<any>(url);
  }

  client_insert(client: any): Observable<any> {
    const url = 'http://localhost:3000/client';
    return this.http.post<any>(url, client);
  }

  client_delete(id: string): Observable<any> {
    const url = 'http://localhost:3000/client/'+id;
    return this.http.delete<any>(url);
  }

  client_update(client: any): Observable<any> {
    const url = 'http://localhost:3000/client/'+client.id;
    return this.http.put<any>(url, client);
  }

  product_list(): Observable<any> {
    const url = 'http://localhost:3000/product';
    return this.http.get<any>(url);
  }

  product_insert(product: any): Observable<any> {
    const url = 'http://localhost:3000/product';
    return this.http.post<any>(url, product);
  }

  product_delete(id: string): Observable<any> {
    const url = 'http://localhost:3000/product/'+id;
    return this.http.delete<any>(url);
  }

  product_update(product: any): Observable<any> {
    const url = 'http://localhost:3000/product/'+product.id;
    return this.http.put<any>(url, product);
  }

  order_list(): Observable<any> {
    const url = 'http://localhost:3000/order';
    return this.http.get<any>(url);
  }

  order_insert(order: any): Observable<any> {
    const url = 'http://localhost:3000/order';
    return this.http.post<any>(url, order);
  }

  order_delete(id: string): Observable<any> {
    const url = 'http://localhost:3000/order/'+id;
    return this.http.delete<any>(url);
  }

  order_update(order: any): Observable<any> {
    const url = 'http://localhost:3000/order/'+order.id;
    return this.http.put<any>(url, order);
  }

}
