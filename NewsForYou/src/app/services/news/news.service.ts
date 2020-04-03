import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  public get(topic: string) {
    const key = '66c280e1278e49edac439de6a314ba7f';
    return this.http.get<Article[]>(`https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=${key}`);
  }
}
