import { TestBed } from '@angular/core/testing';

import { NgxPolylistService } from './ngx-polylist.service';

describe('NgxPolylistService', () => {
  let service: NgxPolylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPolylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
