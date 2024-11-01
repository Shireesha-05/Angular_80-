import { TestBed } from '@angular/core/testing';

import { AuthhttpInterceptor } from './authhttp.interceptor';

describe('AuthhttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthhttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthhttpInterceptor = TestBed.inject(AuthhttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
