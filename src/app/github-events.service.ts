import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({  
  providedIn: 'root',
})  
export class GithubEventsService {  
  private apiUrl = 'https://api.github.com/events';  

  constructor(private http: HttpClient) {}  

  getPublicEvents(): Observable<any[]> {  
    return this.http.get<any[]>(this.apiUrl);  
  }  

  getRepoEvents(owner: string ,repo: string): Observable<any[]> {  
    return this.http.get<any[]>(`${this.apiUrl}/repos/${owner}/${repo}/events`);  
  }  
}