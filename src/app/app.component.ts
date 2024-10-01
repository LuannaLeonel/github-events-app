import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GithubEventsService } from './github-events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AppComponent implements OnInit {
  publicEvents: any[] = [];
  repoEvents: any[] = [];
  title = 'github-events-app';
  selectedEventType: string = '';
  selectedRepoEventType: string = '';

  constructor(private githubEventsService: GithubEventsService) {}

  ngOnInit(): void {}

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
        console.error('Erro ao carregar eventos do repositório', error);
      }
    );
  }

  getDistinctEventTypes(): string[] {
    return [...new Set(this.publicEvents.map(event => event.type))];
  }

  getDistinctRepoEventTypes(): string[] {
    return [...new Set(this.repoEvents.map(event => event.type))];
  }

  filterPublicEvents() {
    return this.selectedEventType
      ? this.publicEvents.filter(event => event.type === this.selectedEventType)
      : this.publicEvents;
  }

  filterRepoEvents() {
    return this.selectedRepoEventType
      ? this.repoEvents.filter(event => event.type === this.selectedRepoEventType)
      : this.repoEvents;
  }
}
