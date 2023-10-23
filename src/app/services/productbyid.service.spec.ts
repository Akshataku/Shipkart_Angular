import { TestBed } from '@angular/core/testing';

import { ProductbyidService } from './productbyid.service';

describe('ProductbyidService', () => {
  let service: ProductbyidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductbyidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
