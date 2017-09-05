import { TestBed, inject } from '@angular/core/testing';

import { TodoFilterService } from './todo-filter.service';

describe('TodoFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoFilterService]
    });
  });

  it('should be created', inject([TodoFilterService], (service: TodoFilterService) => {
    expect(service).toBeTruthy();
  }));
});
