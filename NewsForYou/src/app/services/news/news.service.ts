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

  GetArticles(topic: string): Observable<Article[]> {
    const url = `${environment.newsApiUrl}/everything?q=${topic}&apiKey=${apiKeys.newsApiKey}&language=en`;

    return this.http.get<ArticlesResponse>(url)
      .pipe(
        map(data => data.articles)
      );
  }
}
