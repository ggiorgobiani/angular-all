import { TestBed } from '@angular/core/testing';

import { ApiEndpointInterceptor } from './api-endpoint.interceptor';

describe('ApiEndpointInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiEndpointInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiEndpointInterceptor = TestBed.inject(ApiEndpointInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
