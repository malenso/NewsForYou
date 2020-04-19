import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from 'src/app/models/article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  
  constructor(
    private http: HttpClient
  ) { }

  GetArticles(topic: string): Observable<Article[]> {
    const key = '';
    const url = `https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=${key}`;

    return this.http.get(url)
      .pipe(
        map(response => response["articles"])
      );
  }
}
