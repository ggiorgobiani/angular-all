import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, throwIfEmpty } from 'rxjs/operators';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>> 
  {
    return next.handle(request).pipe(
    catchError((error: HttpErrorResponse) => {

      let errorMessage = '';

      if (error.error instanceof ErrorEvent) {
        // Une erreur côté client s'est produite
        errorMessage = `Erreur : ${error.error.message}`;
      } else {
        // Une erreur côté serveur s'est produite
        errorMessage = `Erreur serveur (code ${error.status}): ${error.message}`;
      }

      console.error(errorMessage);

      alert(errorMessage);

      return throwError(errorMessage);
      // return throwIfEmpty(errorMessage);
      
    }));
  }
}