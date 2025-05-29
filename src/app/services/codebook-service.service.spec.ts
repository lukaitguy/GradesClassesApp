import { TestBed } from '@angular/core/testing';

import { CodebookServiceService } from './codebook-service.service';

describe('CodebookServiceService', () => {
  let service: CodebookServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodebookServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
