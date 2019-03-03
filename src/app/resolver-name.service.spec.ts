import { TestBed } from '@angular/core/testing';

import { ResolverNameService } from './resolver-name.service';

describe('ResolverNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolverNameService = TestBed.get(ResolverNameService);
    expect(service).toBeTruthy();
  });
});
