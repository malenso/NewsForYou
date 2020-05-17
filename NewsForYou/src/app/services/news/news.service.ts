import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from 'src/app/models/article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticlesResponse } from 'src/app/models/articles-response';
import { environment } from 'src/environments/environment';
import { apiKeys } from 'src/apiKeys';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getArticlesByTopic(topic: string): Observable<Article[]> {
    const url = `${environment.newsApiUrl}/everything?q=${topic}&language=en&apiKey=${apiKeys.newsApiKey}`;

    return this.http.get<ArticlesResponse>(url)
      .pipe(
        map(data => data.articles)
      );
  }

  getHeadlines(): Observable<Article[]> {
    const url = `${environment.newsApiUrl}/top-headlines?language=en&apiKey=${apiKeys.newsApiKey}&pageSize=5`;

    return this.http.get<ArticlesResponse>(url)
      .pipe(
        map(data => data.articles)
      );
  }
}
