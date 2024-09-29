import { Component, OnInit } from '@angular/core';
import { GithubEventsService } from './github-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  publicEvents: any[] = [];
  repoEvents: any[] = [];

  constructor(private githubEventsService: GithubEventsService) {}

  ngOnInit(): void {
    this.loadPublicEvents();
    this.loadRepoEvents();
  }

  loadPublicEvents(): void {
    this.githubEventsService.getPublicEvents().subscribe(
      (data) => {
        this.publicEvents = data;
      },
      (error) => {
        console.error('Erro ao carregar eventos públicos:', error);
      }
    );
  }

  loadRepoEvents(): void {
    this.githubEventsService.getRepoEvents().subscribe(
      (data) => {
        this.repoEvents = data;
      },
      (error) => {
        console.error(`Erro ao carregar eventos do repositório`, error);
      }
    );
  }


  filterEventsByType(eventType: string): any[] {
    return this.publicEvents.filter(event => event.type === eventType);
  }
  filterRepoEventsByType(eventType: string): any[] {
    return this.repoEvents.filter(event => event.type === eventType);
  }
  countRepoEventsByType(eventType: string): number {
    return this.repoEvents.filter(event => event.type === eventType).length;
  }
}
