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
  imports: [CommonModule, FormsModule], // Adicione FormsModule aqui
})
export class AppComponent implements OnInit {
  publicEvents: any[] = [];
  repoEvents: any[] = [];
  filteredPublicEvents: any[] = [];
  repoEventCount: number = 0;
  title = 'github-events-app';
  selectedEventType: string = ''; // Para armazenar o tipo de eve
  eventTypes: string[] = [];

  constructor(private githubEventsService: GithubEventsService) {}

  ngOnInit(): void {
    this.loadPublicEvents()
    this.loadRepoEvents()
  }

  loadPublicEvents(): void {
    this.githubEventsService.getPublicEvents().subscribe(
      (data) => {
        this.publicEvents = data;
        this.eventTypes = this.getDistinctEventTypes(); // Obt
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

  filterEvents(): void {
    if (this.selectedEventType) {
      this.filteredPublicEvents = this.publicEvents.filter(event => event.type === this.selectedEventType);
    } else {
      this.filteredPublicEvents = this.publicEvents; // Reseta o filtro se não houver seleção
    }
  }

  countRepoEventsByType(eventType: string): number {
    return this.repoEvents.filter((event) => event.type === eventType).length;
  }

  filterDistinctPublicEventsByType(eventType: string, attribute: keyof any): any[] {
    const filteredEvents = this.publicEvents.filter((event) => event.type === eventType);
    return distinct(filteredEvents, attribute);
  }

  filterDistinctEventsByType(eventType: string, attribute: keyof any): any[] {
    const filteredEvents = this.publicEvents.filter((event) => event.type === eventType);
    return distinct(filteredEvents, attribute);
  }

  countDistinctRepoEventsByType(eventType: string, attribute: keyof any): number {
    const filteredEvents = this.repoEvents.filter((event) => event.type === eventType);
    return distinct(filteredEvents, attribute).length;
  }
}
