import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) {}
  fetchPublicEvents(): Observable<any[]> {
    return this.http.get('https://api.github.com/events') as Observable<any[]> ;
  }

  fetchRepositoryEvents(owner: string, repo: string): Observable<any[]> {
    return this.http.get(`https://api.github.com/repos/<span class="math-inline">\{owner\}/</span>{repo}/events`) as Observable<any[]>;
  }
}
