import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from 'src/app/models/article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticlesResponse } from 'src/app/models/articles-response';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  GetArticles(topic: string): Observable<Article[]> {
    const key = '';
    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${key}&language=en`;

    return this.http.get<ArticlesResponse>(url)
      .pipe(
        map(data => data.articles)
      );
  }
}
