import { TestBed } from '@angular/core/testing';

import { GooglebookService } from './googlebook.service';

describe('GooglebookService', () => {
  let service: GooglebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
