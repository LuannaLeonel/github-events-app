import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { distinct } from '../utils';
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
  filteredPublicEvents: any[] = [];
  filteredRepoEvents: any[] = [];
  repoEventCount: number = 0;
  title = 'github-events-app';
  selectedEventType: string = '';
  selectedRepoEventType:string='';
  eventTypes: string[] = [];
  repoEventTypes: string[] = [];

  constructor(private githubEventsService: GithubEventsService) {}

  ngOnInit(): void{
  }

  loadPublicEvents(): void {
    this.githubEventsService.getPublicEvents().subscribe(
      (data) => {
        this.publicEvents = data;
        this.eventTypes = this.getDistinctEventTypes();
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
        this.repoEventTypes = this.getDistinctRepoEventTypes();

      },
      (error) => {
        console.error('Erro ao carregar eventos do repositório', error);
      }
    );
  }

  getDistinctRepoEventTypes(): string[] {
    return [...new Set(this.repoEvents.map(event => event.type))];
  }
  getDistinctEventTypes(): string[] {
    return [...new Set(this.publicEvents.map(event => event.type))];
  }

  filterEvents(): void {
    if (this.selectedEventType) {
      this.filteredPublicEvents = this.publicEvents.filter(event => event.type === this.selectedEventType);
    } else {
      this.filteredPublicEvents = this.publicEvents;
    }
  }

  filterEventsByType(): void {
    if (this.selectedEventType) {
      this.filteredPublicEvents = this.publicEvents.filter(event => event.type === this.selectedEventType);
    } else {
      this.filteredPublicEvents = this.publicEvents;
    }
  }
  filterRepoEventsByType(): void {
    if (this.selectedRepoEventType) {
      this.filteredRepoEvents = this.repoEvents.filter(event => event.type === this.selectedEventType);
    } else {
      this.filteredRepoEvents = this.repoEvents;
    }
  }
  countRepoEventsByType(eventType: string): number {
    return this.repoEvents.filter(event => event.type === eventType).length;
  }
  filterDistinctPublicEventsByType(eventType: string, attribute: keyof any): any[] {
    const filteredEvents = this.publicEvents.filter(event => event.type === eventType);
    return distinct(filteredEvents, attribute);

  }

  filterDistinctEventsByType(eventType: string, attribute: keyof any): any[] {
    const filteredEvents = this.publicEvents.filter(event => event.type === eventType);
    return distinct(filteredEvents, attribute);
  }


  countDistinctRepoEventsByType(eventType: string, attribute: keyof any): number {
    const filteredEvents = this.repoEvents.filter(event => event.type === eventType);
    return distinct(filteredEvents, attribute).length;
  }
}
