import { TestBed } from '@angular/core/testing';

import { VirtualizerService } from './virtualizer.service';

describe('VirtualizerService', () => {
  let service: VirtualizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
