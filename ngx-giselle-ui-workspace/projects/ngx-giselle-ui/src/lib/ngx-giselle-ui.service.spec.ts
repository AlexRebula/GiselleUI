import { TestBed } from '@angular/core/testing';

import { NgxGiselleUiService } from './ngx-giselle-ui.service';

describe('NgxGiselleUiService', () => {
  let service: NgxGiselleUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxGiselleUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
