import { Injectable, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { Article } from 'src/app/models/article';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  imports: [HttpClientModule]
})
export class NewsService {

  constructor(
    private http: HttpClient
  ) { }

  public get(topic: string) {
    const key = '';
    return this.http.get<Article[]>(`https://newsapi.org/v2/top-headlines?q=${topic}&apiKey=${key}`);
  }
}
