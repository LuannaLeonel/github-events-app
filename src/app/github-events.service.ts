import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubEventsService {
  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getPublicEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/events`);
  }

  getRepoEvents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/repos/rails/rails/events`);
  }
}
