import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/models/article';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  getArticles(topic: string) {
    const key = '';
    const url = `https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=${key}`;
    console.log(this.http.get<Article[]>(url)
      .map(a => {
          let response: any = a;
          response.map((x) => new Article(x));
        }),
      );
  }
}
