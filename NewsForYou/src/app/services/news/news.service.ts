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
    const key = '';
    console.log(this.http.get(`https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=${key}`));
  }
}
