import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SessionService } from '../session.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {

  baseUrl: string;

  constructor(private httpClient: HttpClient,
    private sessionService: SessionService) {
    this.baseUrl = this.sessionService.getRootPath() + 'QuickShop';
  }

  retrieveAllSupermarkets(): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveAllSupermarkets").pipe(
      catchError(this.handleError)
    )
  }

  retrieveAllItemsFromSupermarkets(superMarketId: number): Observable<any> {
    return this.httpClient.get<any>(this.baseUrl + "/retrieveAllItemBySupermarket?supermarketId=" + superMarketId).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error.message;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }

}
