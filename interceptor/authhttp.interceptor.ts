import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthhttpInterceptor implements HttpInterceptor {

  constructor() {
   
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const date=Date.now();

    const cloneRequest= request.clone({
    //  headers:request.headers.set('Authorization',`date ${date}`)

    setHeaders:{
      'Authorization':'none'
    }
    });
    console.log('Request Url: ', request.url);

    return next.handle(cloneRequest);

  }
}
