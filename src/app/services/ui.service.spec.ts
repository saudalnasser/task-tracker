import { TestBed } from '@angular/core/testing';

import { UiService } from './ui.service';

describe('UiService', (): void => {
  let service: UiService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
