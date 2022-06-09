import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', (): void => {
  let service: TaskService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
