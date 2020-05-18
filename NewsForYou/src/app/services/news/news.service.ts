import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from 'src/app/models/article';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { ArticlesResponse } from 'src/app/models/articles-response';
import { environment } from 'src/environments/environment';
import { apiKeys } from 'src/apiKeys';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  activeArticle: Article;
  articles: Article[];

  constructor(
    private http: HttpClient
  ) { }

  getArticleById(id: string): Article {
    //   return this.articles.filter(article => article.id === id);
    return null;
  }

  getArticlesByTopic(topic: string): Observable<Article[]> {
    const url = `${environment.newsApiUrl}/everything?q=${topic}&language=en&apiKey=${apiKeys.newsApiKey}`;

    return this.http.get<any>(url)
      .pipe(
        map(data => {
          this.articles = data.articles.map(article => {
            return {
              author: article.author,
              title: article.title,
              description: article.description,
              url: article.url,
              urlToImage: article.urlToImage,
              publishedAt: article.publishedAt,
              content: article.content,
              id: Math.floor(Math.random() * 100000)
            };
          });
          return this.articles;
        })
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
