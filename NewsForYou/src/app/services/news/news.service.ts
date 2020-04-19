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
    const key = 'fc2a4aa033814df2adaa6f9ab9ada05d';
    const url = `https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=${key}&language=en`;

    return this.http.get<Article[]>(url)
      .pipe(
        map(response => response["articles"]) //this feels off
      );
  }
}
