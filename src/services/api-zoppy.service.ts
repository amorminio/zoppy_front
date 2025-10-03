import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiZoppyService {
  private apiUrl = 'http://localhost:3000/sua-rota-de-teste';

  constructor(private http: HttpClient) { }

  client_list(): Observable<any> {
    const url = 'http://localhost:3000/client';
    return this.http.get<any>(url);
  }

  getTestData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
