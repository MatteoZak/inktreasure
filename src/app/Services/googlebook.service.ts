import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GooglebookService {

  http: HttpClient = inject(HttpClient);

  constructor() { }

  getBooks(search: string) {
    return this.http.get('https://www.googleapis.com/books/v1/volumes?q='+ search);
  }
}
