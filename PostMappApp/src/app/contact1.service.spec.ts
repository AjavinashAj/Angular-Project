import { TestBed } from '@angular/core/testing';

import { Contact1Service } from './contact1.service';

describe('Contact1Service', () => {
  let service: Contact1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contact1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
