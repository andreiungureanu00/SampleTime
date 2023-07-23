import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getRequest(endpoint: string, credentials = true): Observable<any> {
    return this.http
      .get(environment.apiURL + endpoint, {
        withCredentials: credentials,
      })
      .pipe(catchError(this.handleError));
  }

  postRequest(
    endpoint: string,
    body: object,
    credentials = true
  ): Observable<any> {
    return this.http
      .post(environment.apiURL + endpoint, body, {
        withCredentials: credentials,
        headers: this.httpOptions.headers,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error(`Got error: ${error.message}`);

    return throwError(() => 'Something went wrong. Please try again later');
  }
}
