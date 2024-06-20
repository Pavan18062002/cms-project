import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, user);
  }

  getArticles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/articles`);
  }

  getArticle(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/articles/${id}`);
  }

  createArticle(article: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/articles`, article);
  }

  updateArticle(id: string, article: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/articles/${id}`, article);
  }

  deleteArticle(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/articles/${id}`);
  }
}
