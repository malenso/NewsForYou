import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from 'src/app/models/article';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // maps observable to response, requires pipe after rxjs upgrade

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  response;

  constructor(
    private http: HttpClient
  ) { }

  GetArticles(topic: string) {
    const key = '';
    const url = `https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=${key}`;
    console.log(this.http.get<Article[]>(url)

    this.http.get(url)
    .subscribe(response => {
      console.log(response);
      return response;
    });
  }
}
