import { TestBed } from '@angular/core/testing';

import { GithubEventsService } from './github-events.service';

describe('GithubEventsService', () => {
  let service: GithubEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
